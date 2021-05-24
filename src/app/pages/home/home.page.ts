import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { GetDataService } from 'src/app/services/get-data.service'
import { PostDataService } from 'src/app/services/post-data.service';
import { IPost } from 'src/app/models/postModel';
import { IReact } from 'src/app/models/reactModel';
import { UserService } from 'src/app/services/user.service';
import { CreatePostPage } from '../create-post/create-post.page';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';
import { IUser } from 'src/app/models/userModel';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // Called first time before the ngOnInit()
  constructor(private location: LocationService, private getData: GetDataService, private modalCtrl: ModalController, private postData: PostDataService, private nav: NavController, private router: Router, private user: UserService){}

  private stopPolling = new Subject();
  posts$: Observable<{post_list: IPost[], react_list: IReact[]}>;
  refresh$ = new BehaviorSubject<boolean>(true);
  user$: Observable<IUser[]>;
  reply_count: Observable<number>;
  public user_id: string;
  public user_karma: number;
  public reactions: IReact[];
  public userLat: number;
  public userLon: number;


  // Called after the constructor and called  after the first ngOnChanges() 
  async ngOnInit() {   
    //We want to compare the uuid with the user_id in the server. If they match then they can enter the page
    //This checks if the uuid was actually saved in the database when user pressed "Continue" in location page
    try{
      await this.user.userInfo(); 
      //Must wait for coords to get colected or it will go straight to error
      await this.location.getCoords();
      this.user_id = this.user.uuid;
      this.userLat = this.location.currentLocation.latitude;
      this.userLon = this.location.currentLocation.longitude;

      //Obeservables to forkjoin
    
      // this.user$ = this.getData.getUser(this.user.uuid);
      this.user$ = this.refresh$.pipe(switchMap(_ => this.getData.getUser(this.user.uuid)));

      // this.posts$ = this.getData.getPosts(this.userLat,this.userLon, this.user.uuid);
      this.posts$ = this.refresh$.pipe(switchMap(_ => this.getData.getPosts(this.userLat,this.userLon, this.user.uuid)));
      // this.reactions$ = this.refresh$.pipe(switchMap(_ => this.getData.getReactions(this.user.uuid)));
      // forkJoin([this.user$, this.posts$]).subscribe(results => {
      //   this.loadedUser = results[0];
      //   this.loadedPosts = results[1].post_list;
      //   this.loadedReactions = results[1].react_list;
      //   console.log(this.loadedUser);
      //   console.log(this.loadedPosts);
      //   console.log(this.loadedReactions);
      // });
    }
    catch{
      this.nav.navigateRoot('error');
    }
  }
  
  // Update post after getting out of comments page
  ionViewWillEnter(){
    this.refresh$.next(true);
  }
  async doRefresh($event: any) {
    //Refresh Posts and Karma
    setTimeout(() => {
      this.refresh$.next(true);
      $event.target.complete();
    }, 1000);
  }
  //Sort segment
  sortPosts(event:any){
    //sort by hot
    if(event.target.value == 'hot'){
      this.posts$ = this.refresh$.pipe(switchMap(_ => this.getData.getPostsSorted(this.userLat,this.userLon, this.user_id)));
    }
    //sort by new
    else if (event.target.value == 'new'){
      this.posts$ = this.refresh$.pipe(switchMap(_ => this.getData.getPosts(this.userLat,this.userLon, this.user_id)));
    }
  }

  //Route to createpost Modal
  async createPost(){
    let postModal = await this.modalCtrl.create({
      component: CreatePostPage 
    })
    await postModal.present();
    postModal.onDidDismiss()
    .then ((data)=> {
      //send post request if not empty post
      if(data.data != undefined){
        //update location before posting
        this.userLat = this.location.currentLocation.latitude;
        this.userLon = this.location.currentLocation.longitude;
        this.postData.createPostRequest(this.userLat, this.userLon, this.user_id, data.data.postBod).then(() =>{
        this.refresh$.next(true);
        });
      }
    });
  }

  //Comments Page on tapping on post
  gotToComments(post_id:number){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        post_id: JSON.stringify(post_id),
      }
    };
    this.router.navigate(['comments'], navigationExtras);
  }
  ngOnDestroy() {
    this.stopPolling.next();
 }

}


