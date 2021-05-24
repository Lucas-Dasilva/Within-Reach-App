import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { PostDataService } from 'src/app/services/post-data.service';
import { UserService } from 'src/app/services/user.service'

const { Device } = Plugins;


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit{
  url = 'http://127.0.0.1:5000/';

  constructor(private location: LocationService,private postData: PostDataService, private nav: NavController, private user: UserService) {
    
  }
  async ngOnInit(){
    await this.user.userInfo(); 
    this.postData.createUserRequest(this.user.uuid);
    
  }
  latitude: number;
  longitude: number;
  uuid: string;
  async getLocation(){
    //Promise: type for asyncrinous function, must have await and async to define it as a variable
    //no need to save to database, just run getLocation() everry time I calc distance from post
    try{
      this.latitude = this.location.currentLocation.latitude;
      this.longitude = this.location.currentLocation.longitude;
      this.nav.navigateRoot('home');
    }
    catch{
      this.nav.navigateRoot('error');
    }

  }
}

