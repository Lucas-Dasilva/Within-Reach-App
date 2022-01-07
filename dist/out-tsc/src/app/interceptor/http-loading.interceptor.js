import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY, throwError } from 'rxjs';
import { catchError, delay, finalize, map, retryWhen, switchMap, tap } from 'rxjs/operators';
let HttpRequestInterceptor = class HttpRequestInterceptor {
    constructor(nav, loadingCtrl, toastCtrl, alertCtrl, fakeHttp) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.fakeHttp = fakeHttp;
    }
    intercept(request, next) {
        if (request.params.has("forceload") && request.params.get("forceload") === "true") {
            //present loading while sending request
            this.loadingCtrl.create({
                spinner: 'crescent',
                translucent: true,
                duration: 2000,
                cssClass: 'loadingLucas'
            }).then(loading => {
                this.loading = loading;
                loading.present();
            });
        }
        return next.handle(request).pipe(
        //Catch error if token expires
        catchError(err => {
            if (err instanceof HttpErrorResponse) {
                switch (err.status) {
                    //If token expired we assign it a new token
                    case 401:
                        return this.handle401Error(request, next);
                    default:
                        return throwError(err);
                }
            }
            else {
                return throwError(err);
            }
        }), retryWhen(err => {
            //Want to retry 3 times 
            let retries = 1;
            return err.pipe(delay(2000), tap(() => {
                this.showRetryToast(retries);
            }), map(error => {
                //Increase retries until we handle 3, then we throw error
                if (retries++ === 3) {
                    throw error;
                }
                return error;
            }));
        }), 
        //present error after 3rd try
        catchError(err => {
            console.log('error: ', err);
            this.presentFailedAlert(err.error['msg']);
            return EMPTY;
        }), 
        //Dismiss loading after retrying 3 times
        finalize(() => {
            if (this.loading) {
                this.loading.dismiss();
            }
        }));
    }
    showRetryToast(retryCount) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `Retry: ${retryCount}/3`,
                duration: 2000
            });
            toast.present();
        });
    }
    presentFailedAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Oooopsie Dasie",
                message: msg,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            alert.dismiss().then(() => this.nav.navigateRoot('error'));
                            return false;
                        }
                    }]
            });
            yield alert.present();
        });
    }
    handle401Error(request, next) {
        console.log('Trying to refresh Token');
        return this.fakeHttp.getToken().pipe(
        //switch map to a new observable
        switchMap(res => {
            console.log('in switchmap: ', res);
            //grab token
            const token = res['token'];
            request = request.clone({
                setParams: {
                    token
                }
            });
            return next.handle(request);
        }));
    }
};
HttpRequestInterceptor = __decorate([
    Injectable()
], HttpRequestInterceptor);
export { HttpRequestInterceptor };
//# sourceMappingURL=http-loading.interceptor.js.map