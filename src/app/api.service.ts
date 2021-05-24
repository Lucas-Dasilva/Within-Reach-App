import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users = [
    {name: "Lucas"},
    {name: "Jack"},
    {name: "JackColby"}
  ]

  constructor() { }
  getUsers(): Observable<any[]>{
    return of(this.users);
  }
  addUser(name: string){
    this.users = [...this.users,{ name}];
  }
}
