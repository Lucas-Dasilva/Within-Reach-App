import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let VoteButtonComponent = class VoteButtonComponent {
    constructor(getData, user, http) {
        this.getData = getData;
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
            //send In local Id to getReactions 
            // this.getData.getReactions(this.local_user)
            //   .subscribe((data) => {
            //     this.reactions = data.react_list;
            //     const reaction = this.reactions.find(reaction=> reaction.post == this.post_id);
            //     if (reaction != undefined){
            //       this.user_vote = reaction.status;
            //     }
            //     this.votecount = this.likes;
            //   });
            const reaction = this.reactions.find(reaction => reaction.post == this.post_id);
            if (reaction != undefined) {
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
        this.http.post(this.url + "upvoteHandler", {
            user_id: this.local_user,
            post_id: this.post_id
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
        this.http.post(this.url + "downvoteHandler", {
            user_id: this.local_user,
            post_id: this.post_id
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
], VoteButtonComponent.prototype, "post_user", void 0);
__decorate([
    Input()
], VoteButtonComponent.prototype, "post_id", void 0);
__decorate([
    Input()
], VoteButtonComponent.prototype, "likes", void 0);
__decorate([
    Input()
], VoteButtonComponent.prototype, "reactions", void 0);
VoteButtonComponent = __decorate([
    Component({
        selector: 'app-vote-button',
        templateUrl: './vote-button.component.html',
        styleUrls: ['./vote-button.component.scss'],
    })
], VoteButtonComponent);
export { VoteButtonComponent };
//# sourceMappingURL=vote-button.component.js.map