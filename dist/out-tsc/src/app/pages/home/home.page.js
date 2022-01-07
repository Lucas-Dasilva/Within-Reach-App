import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { CreatePostPage } from '../create-post/create-post.page';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
let HomePage = class HomePage {
    // Called first time before the ngOnInit()
    constructor(location, getData, modalCtrl, postData, nav, router, user) {
        this.location = location;
        this.getData = getData;
        this.modalCtrl = modalCtrl;
        this.postData = postData;
        this.nav = nav;
        this.router = router;
        this.user = user;
        this.stopPolling = new Subject();
        this.refresh$ = new BehaviorSubject(true);
    }
    // Called after the constructor and called  after the first ngOnChanges() 
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            //We want to compare the uuid with the user_id in the server. If they match then they can enter the page
            //This checks if the uuid was actually saved in the database when user pressed "Continue" in location page
            try {
                yield this.user.userInfo();
                //Must wait for coords to get colected or it will go straight to error
                yield this.location.getCoords();
                this.user_id = this.user.uuid;
                this.userLat = this.location.currentLocation.latitude;
                this.userLon = this.location.currentLocation.longitude;
                //Obeservables to forkjoin
                // this.user$ = this.getData.getUser(this.user.uuid);
                this.user$ = this.refresh$.pipe(switchMap(_ => this.getData.getUser(this.user.uuid)));
                // this.posts$ = this.getData.getPosts(this.userLat,this.userLon, this.user.uuid);
                this.posts$ = this.refresh$.pipe(switchMap(_ => this.getData.getPosts(this.userLat, this.userLon, this.user.uuid)));
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
            catch (_a) {
                this.nav.navigateRoot('error');
            }
        });
    }
    // Update post after getting out of comments page
    ionViewWillEnter() {
        this.refresh$.next(true);
    }
    doRefresh($event) {
        return __awaiter(this, void 0, void 0, function* () {
            //Refresh Posts and Karma
            setTimeout(() => {
                this.refresh$.next(true);
                $event.target.complete();
            }, 1000);
        });
    }
    //Sort segment
    sortPosts(event) {
        //sort by hot
        if (event.target.value == 'hot') {
            this.posts$ = this.refresh$.pipe(switchMap(_ => this.getData.getPostsSorted(this.userLat, this.userLon, this.user_id)));
        }
        //sort by new
        else if (event.target.value == 'new') {
            this.posts$ = this.refresh$.pipe(switchMap(_ => this.getData.getPosts(this.userLat, this.userLon, this.user_id)));
        }
    }
    //Route to createpost Modal
    createPost() {
        return __awaiter(this, void 0, void 0, function* () {
            let postModal = yield this.modalCtrl.create({
                component: CreatePostPage
            });
            yield postModal.present();
            postModal.onDidDismiss()
                .then((data) => {
                //send post request if not empty post
                if (data.data != undefined) {
                    //update location before posting
                    this.userLat = this.location.currentLocation.latitude;
                    this.userLon = this.location.currentLocation.longitude;
                    this.postData.createPostRequest(this.userLat, this.userLon, this.user_id, data.data.postBod).then(() => {
                        this.refresh$.next(true);
                    });
                }
            });
        });
    }
    //Comments Page on tapping on post
    gotToComments(post_id) {
        let navigationExtras = {
            queryParams: {
                post_id: JSON.stringify(post_id),
            }
        };
        this.router.navigate(['comments'], navigationExtras);
    }
    ngOnDestroy() {
        this.stopPolling.next();
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map