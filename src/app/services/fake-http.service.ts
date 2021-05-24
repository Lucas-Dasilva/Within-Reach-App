import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  url = 'https://httpinterceptor-dummy.herokuapp.com';
 
  constructor(private http: HttpClient) { }
 
  getSuccess() {
    return  this.http.get(`${this.url}/`);
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
}
