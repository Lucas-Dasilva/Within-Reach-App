import { __decorate } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let GetDataService = class GetDataService {
    constructor(http) {
        this.http = http;
        // private allPosts$: Observable<{post_list: IPost[]}>;
        // private allReactions: Observable<{react_list: IReact[]}>;
        // private allReplys: Observable<{reply_list: IReply[]}>;
        this.stopPolling = new Subject();
        // url = 'http://127.0.0.1:5000/'
        this.url = 'https://officialwithinreach.herokuapp.com/';
    }
    getUser(user_id) {
        return this.http.get(this.url + "getUser/" + user_id);
    }
    getSinglePost(post_id, user_id) {
        return this.http.get(this.url + "getSinglePost/" + post_id + "/" + user_id);
    }
    getPosts(latitude, longitude, user_id) {
        let params = new HttpParams();
        params = params.append('forceload', "true");
        return this.http.get(this.url + "getPosts/" + latitude + "/" + longitude + "/" + user_id, { params: params });
    }
    getPostsSorted(latitude, longitude, user_id) {
        let params = new HttpParams();
        params = params.append('forceload', "true");
        return this.http.get(this.url + "getPostsSorted/" + latitude + "/" + longitude + "/" + user_id, { params: params });
    }
    getReplys(post_id, user_id) {
        let params = new HttpParams();
        params = params.append('forceload', "true");
        return this.http.get(this.url + "getReplys/" + post_id + "/" + user_id, { params: params });
    }
    getReactions(user_id) {
        return this.http.get(this.url + "getReactions/" + user_id);
    }
    getReplyReactions(user_id) {
        return this.http.get(this.url + "getReplyReactions/" + user_id);
    }
    ngOnDestroy() {
        this.stopPolling.next();
    }
};
GetDataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GetDataService);
export { GetDataService };
//# sourceMappingURL=get-data.service.js.map