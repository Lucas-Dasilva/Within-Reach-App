import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ReplyVoteButtonComponent = class ReplyVoteButtonComponent {
    constructor(user, http) {
        this.user = user;
        this.http = http;
        // reactListLength: number=0;
        this.owner = false;
        this.url = 'http://127.0.0.1:5000/';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.userInfo();
            this.local_user = this.user.uuid;
            //Setting reaction to the specific post from the reply for loop in commentspage.html
            const reaction = this.reactions.find(reaction => reaction.post == this.reply_id);
            if (reaction != undefined) {
                // console.log(reaction);
                this.user_vote = reaction.status;
            }
            this.votecount = this.likes;
            //Check if this post belongs to local user
            if (this.post_user == this.local_user) {
                //console.log("hi")
                this.owner = true;
            }
        });
    }
    upVote() {
        //Change button look in real time, by checking if its already beeing clicked
        if (this.user_vote == 1) {
            this.user_vote = 0;
            this.votecount = this.votecount - 1;
        }
        else if (this.user_vote == -1) {
            this.user_vote = 1;
            this.votecount = this.votecount + 2;
        }
        else {
            this.user_vote = 1;
            this.votecount = this.votecount + 1;
        }
        //Everything inside <response type> models the schema of whatever the endpoint returns
        this.http.post(this.url + "upvotereplyHandler", {
            user_id: this.local_user,
            reply_id: this.reply_id
        }, { responseType: 'text' })
            .toPromise()
            .then(response => {
            //console.log(response);
        })
            .catch(console.log);
    }
    downVote() {
        //Change button look in real time, by checking if its already beeing clicked
        if (this.user_vote == -1) {
            this.user_vote = 0;
            this.votecount = this.votecount + 1;
        }
        else if (this.user_vote == 1) {
            this.user_vote = -1;
            this.votecount = this.votecount - 2;
        }
        else {
            this.user_vote = -1;
            this.votecount = this.votecount - 1;
        }
        //Everything inside <response type> models the schema of whatever the endpoint returns
        this.http.post(this.url + "downvotereplyHandler", {
            user_id: this.local_user,
            reply_id: this.reply_id
        }, { responseType: 'text' })
            .toPromise()
            .then(response => {
            //console.log(response);
        })
            .catch(console.log);
    }
};
__decorate([
    Input()
], ReplyVoteButtonComponent.prototype, "post_user", void 0);
__decorate([
    Input()
], ReplyVoteButtonComponent.prototype, "reply_id", void 0);
__decorate([
    Input()
], ReplyVoteButtonComponent.prototype, "likes", void 0);
__decorate([
    Input()
], ReplyVoteButtonComponent.prototype, "reactions", void 0);
ReplyVoteButtonComponent = __decorate([
    Component({
        selector: 'app-reply-vote-button',
        templateUrl: './reply-vote-button.component.html',
        styleUrls: ['./reply-vote-button.component.scss'],
    })
], ReplyVoteButtonComponent);
export { ReplyVoteButtonComponent };
//# sourceMappingURL=reply-vote-button.component.js.map