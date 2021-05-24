import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  @ViewChild('autofocus', { static: true }) textArea: IonTextarea;

  public postBody: string="";
  constructor(private modalCtrl: ModalController) { }
  async close(){
    await this.modalCtrl.dismiss();
  }
  async send(){
    if (this.postBody.length != 0){
      await this.modalCtrl.dismiss({postBod: this.postBody});
    }
  }
  ionViewDidEnter() {
    setTimeout(() => this.textArea.setFocus(), 300);
  }
  ngOnInit() {}
}
