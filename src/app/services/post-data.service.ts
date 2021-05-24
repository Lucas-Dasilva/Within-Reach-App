import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  // url = 'http://127.0.0.1:5000/';
  url = 'https://officialwithinreach.herokuapp.com/';
  
  constructor(private http: HttpClient, private user: UserService) { }


  async createPostRequest(latitude: number, longitude: number, user_id: string, postBody: string){

    await this.http.post(this.url + "createPostHandler", {
      user_id: user_id,
      post_body: postBody,
      // latitude: 46.7298,
      latitude: latitude,
      // longitude: -117.1817
      longitude: longitude
    },
    {responseType: 'text'})
    .toPromise()
    .then(response => {
      console.log(response +", Captured 'Create Post' Response");
    })
    .catch(console.log);
  }
  async createReplyRequest(user_id: string, post_id: number, postBody: string){
    await this.http.post(this.url + "createReplyHandler", {
      user_id: user_id,
      post_body: postBody,
      post: post_id,
    },
    {responseType: 'text'})
    .toPromise() 
    .then(response => {
      console.log(response +", Captured 'Create Reply' Response");
    })
    .catch(console.log);
  }
  async createUserRequest(user_id: string){
     
    await this.http.post(this.url + "createUser", {
      user_id: user_id,
    },
    {responseType: 'text'})
    .toPromise() 
    .then(response => {
      console.log(response +", Captured 'Create User' Response");
    })
    .catch(console.log); 
  }



}

