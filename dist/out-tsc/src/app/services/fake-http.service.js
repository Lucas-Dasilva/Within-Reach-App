import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FakeHttpService = class FakeHttpService {
    constructor(http) {
        this.http = http;
        this.url = 'https://httpinterceptor-dummy.herokuapp.com';
    }
    getSuccess() {
        return this.http.get(`${this.url}/`);
    }
    getFailed() {
        return this.http.get(`${this.url}/error1`);
    }
    getRetryFailed() {
        return this.http.get(`${this.url}/error2`);
    }
    getAuthFailed() {
        return this.http.get(`${this.url}/error3`);
    }
    getToken() {
        return this.http.get(`${this.url}/token`);
    }
};
FakeHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FakeHttpService);
export { FakeHttpService };
//# sourceMappingURL=fake-http.service.js.map