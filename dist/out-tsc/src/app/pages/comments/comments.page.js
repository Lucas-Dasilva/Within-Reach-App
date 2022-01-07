import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
let CommentsPage = class CommentsPage {
    constructor(nav, route, getData, postData, user) {
        this.nav = nav;
        this.route = route;
        this.getData = getData;
        this.postData = postData;
        this.user = user;
        this.stopPolling = new Subject();
        this.refresh$ = new BehaviorSubject(true);
        this.replyBody = "";
        //Get Post Id From route Url
        this.route.queryParams.subscribe(params => {
            if (params) {
                this.post_id = JSON.parse(params.post_id);
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            //Get single post for comment page
            yield this.user.userInfo();
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
        });
    }
    //Makes post request to createReply and changes value of behaviorSubject object so that new call to get replys is made
    sendReply() {
        if (this.replyBody.length != 0) {
            this.postData.createReplyRequest(this.user.uuid, this.post_id, this.replyBody).then(() => {
                this.refresh$.next(true);
            });
        }
    }
    gotToHome() {
        this.nav.back();
    }
    ngOnDestroy() {
        this.stopPolling.next();
    }
};
CommentsPage = __decorate([
    Component({
        selector: 'app-comments',
        templateUrl: './comments.page.html',
        styleUrls: ['./comments.page.scss'],
    })
], CommentsPage);
export { CommentsPage };
//# sourceMappingURL=comments.page.js.map