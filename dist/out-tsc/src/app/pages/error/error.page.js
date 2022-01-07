import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let ErrorPage = class ErrorPage {
    constructor(fakeHttp, toastCtrl) {
        this.fakeHttp = fakeHttp;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
    }
    getSuccess() {
        this.fakeHttp.getSuccess().subscribe(res => {
            console.log('getSuccess: ', res);
            this.showToast(res['msg']);
        });
    }
    getFailed() {
        this.fakeHttp.getFailed().subscribe(res => {
            console.log('getFailed: ', res);
        });
    }
    getRetryFailed() {
        this.fakeHttp.getRetryFailed().subscribe(res => {
            console.log('getRetryFailed: ', res);
            this.showToast(res['msg']);
        });
    }
    getAuthFailed() {
        this.fakeHttp.getAuthFailed().subscribe(res => {
            console.log('getAuthFailed: ', res);
            this.showToast(res['msg']);
        });
    }
    showToast(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
ErrorPage = __decorate([
    Component({
        selector: 'app-error',
        templateUrl: './error.page.html',
        styleUrls: ['./error.page.scss'],
    })
], ErrorPage);
export { ErrorPage };
//# sourceMappingURL=error.page.js.map