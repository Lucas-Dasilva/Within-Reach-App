import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetDataService } from 'src/app/services/get-data.service';
import { PostDataService } from 'src/app/services/post-data.service';
import { IPost } from 'src/app/models/postModel';
import { IReply } from 'src/app/models/replyModel'
import { LoadingController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { IReact } from 'src/app/models/reactModel';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  private stopPolling = new Subject();

  post_id: number;
  user_id: string;
  replys$: Observable<{post: IPost, post_reactions: IReact[], reply_list: IReply[], react_list: IReact[]}>;
  refresh$ = new BehaviorSubject<boolean>(true);
  post: IPost;
  replyBody: string="";
  loadedReactions: IReact[];


  constructor(private nav: NavController, private route: ActivatedRoute, 
              private getData: GetDataService,  private postData: PostDataService, private user: UserService) 
  { 
    //Get Post Id From route Url
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.post_id = JSON.parse(params.post_id);
      }
    });
  }

  async ngOnInit() {
    //Get single post for comment page
    await this.user.userInfo(); 
    // const res = await this.getData.getSinglePost(this.post_id, this.user.uuid).toPromise();
    // console.log(res);
    // this.post = res.post[0];
    // this.loadedReactions = res.react_list;
    
    // this.getData.getSinglePost(this.post_id, this.user.uuid)
    // .subscribe((data)=>{
    //   console.log(data);
    //   this.post = data.post[0]; 
    //   this.loadedReactions = data.react_list;
   
    // });
    //This will return the the getReplys$ observable
    //On every value change for refresh$ the getReplys call will be made
    this.replys$ = this.refresh$.pipe(switchMap(_ => this.getData.getReplys(this.post_id, this.user.uuid)));
    
  }

  //Makes post request to createReply and changes value of behaviorSubject object so that new call to get replys is made
  sendReply(){
    if (this.replyBody.length != 0){
      this.postData.createReplyRequest(this.user.uuid, this.post_id, this.replyBody).then(() =>{
        this.refresh$.next(true);
      })
    }
    
  }
  gotToHome(){
    this.nav.back();
  }
  ngOnDestroy() {
    this.stopPolling.next();
 }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     spinner: null,
  //     duration: 5000,
  //     message: 'Click the backdrop to dismiss early...',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading',
  //     backdropDismiss: true
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed with role:', role);
  // }
}



