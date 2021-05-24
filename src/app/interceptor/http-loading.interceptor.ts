import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { catchError, delay, finalize, map, retryWhen, switchMap, tap } from 'rxjs/operators';
import { FakeHttpService } from '../services/fake-http.service';
 
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private loading: HTMLIonLoadingElement;
  constructor(private nav: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private fakeHttp: FakeHttpService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(request.params.has("forceload") && request.params.get("forceload") === "true"){
      //present loading while sending request
      this.loadingCtrl.create({
        spinner:'crescent',
        translucent: true,
        duration: 2000,
        cssClass: 'loadingLucas'
      }).then(loading =>{
        this.loading = loading;
        loading.present();

      });
    }


    return next.handle(request).pipe(
      //Catch error if token expires
      catchError(err =>{
        if(err instanceof HttpErrorResponse){
          switch ((<HttpErrorResponse>err).status) {
            //If token expired we assign it a new token
            case 401:
              return this.handle401Error(request, next);

            default:
              return throwError(err);

          }
        }else {
          return throwError(err);
        }
      }),
      retryWhen(err => {
        //Want to retry 3 times 
        let retries =1;
        return err.pipe(
          delay(2000),
          tap(() =>{
            this.showRetryToast(retries)
          }),
          map(error => {
            //Increase retries until we handle 3, then we throw error
            if (retries++ === 3){
              throw error;
            }
            return error;
          })
        )
      }),
      //present error after 3rd try
      catchError(err => {
        console.log('error: ', err);
        this.presentFailedAlert(err.error['msg']);
        return EMPTY;
      }),
      //Dismiss loading after retrying 3 times
      finalize(() => {
        if(this.loading){
          this.loading.dismiss();
        }
      })
    );
  }

  async showRetryToast(retryCount) {
    const toast = await this.toastCtrl.create({
      message: `Retry: ${retryCount}/3`,
      duration: 2000
    });
    toast.present();
  }
  async presentFailedAlert(msg){
    const alert = await this.alertCtrl.create({
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
    await alert.present();
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler){
    console.log('Trying to refresh Token');
    return this.fakeHttp.getToken().pipe(
      //switch map to a new observable
      switchMap(res=> {
        console.log('in switchmap: ', res);
        //grab token
        const token = res['token'];
        request = request.clone({
          setParams: {
            token
          }
        });
        return next.handle(request);
      })
    );
  }
}