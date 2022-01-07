import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PostDataService = class PostDataService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        // url = 'http://127.0.0.1:5000/';
        this.url = 'https://officialwithinreach.herokuapp.com/';
    }
    createPostRequest(latitude, longitude, user_id, postBody) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.url + "createPostHandler", {
                user_id: user_id,
                post_body: postBody,
                // latitude: 46.7298,
                latitude: latitude,
                // longitude: -117.1817
                longitude: longitude
            }, { responseType: 'text' })
                .toPromise()
                .then(response => {
                console.log(response + ", Captured 'Create Post' Response");
            })
                .catch(console.log);
        });
    }
    createReplyRequest(user_id, post_id, postBody) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.url + "createReplyHandler", {
                user_id: user_id,
                post_body: postBody,
                post: post_id,
            }, { responseType: 'text' })
                .toPromise()
                .then(response => {
                console.log(response + ", Captured 'Create Reply' Response");
            })
                .catch(console.log);
        });
    }
    createUserRequest(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(this.url + "createUser", {
                user_id: user_id,
            }, { responseType: 'text' })
                .toPromise()
                .then(response => {
                console.log(response + ", Captured 'Create User' Response");
            })
                .catch(console.log);
        });
    }
};
PostDataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PostDataService);
export { PostDataService };
//# sourceMappingURL=post-data.service.js.map