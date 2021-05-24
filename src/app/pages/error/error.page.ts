import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FakeHttpService } from 'src/app/services/fake-http.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  constructor(private fakeHttp: FakeHttpService, private toastCtrl:ToastController) { }

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
 
  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
