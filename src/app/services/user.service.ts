import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';


const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  public uuid: string;
  public platform: string;

  async userInfo(){
    const info = await Device.getInfo();
    // this.uuid = "user1";
    this.uuid = info["uuid"];
  }
}
