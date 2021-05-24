import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPost } from 'src/app/models/postModel';
import { IReact } from 'src/app/models/reactModel';
import { IReply } from 'src/app/models/replyModel'
import { IUser } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class GetDataService implements OnDestroy{


  // private allPosts$: Observable<{post_list: IPost[]}>;
  // private allReactions: Observable<{react_list: IReact[]}>;
  // private allReplys: Observable<{reply_list: IReply[]}>;

  private stopPolling = new Subject();

  // url = 'http://127.0.0.1:5000/'
  url = 'https://officialwithinreach.herokuapp.com/'

  constructor(private http: HttpClient) {   

  }

  getUser(user_id: string): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url +"getUser/"+ user_id);
  }
  getSinglePost(post_id: number, user_id: string): Observable<{post: IPost, react_list: IReact[]}>
  {
    return this.http.get<{post: IPost, react_list: IReact[]}>(this.url +"getSinglePost/"+ post_id+"/"+user_id);
  }
  getPosts(latitude: number, longitude: number, user_id: string): Observable<{post_list: IPost[], react_list: IReact[]}>{
    let params = new HttpParams();
    params = params.append('forceload', "true");
    return this.http.get<{post_list: IPost[], react_list: IReact[]}>(this.url +"getPosts/"+latitude+"/"+longitude+"/"+user_id, {params: params});
  }
  getPostsSorted(latitude: number, longitude: number, user_id: string): Observable<{post_list: IPost[], react_list: IReact[]}>{
    let params = new HttpParams();
    params = params.append('forceload', "true");
    return this.http.get<{post_list: IPost[], react_list: IReact[]}>(this.url +"getPostsSorted/"+latitude+"/"+longitude+"/"+user_id, {params: params});
  }
  getReplys(post_id: number, user_id: string): Observable<{post: IPost, post_reactions: IReact[], reply_list: IReply[], react_list: IReact[]}>
  {
    let params = new HttpParams();
    params = params.append('forceload', "true");
    return this.http.get<{post: IPost, post_reactions: IReact[], reply_list: IReply[], react_list: IReact[]}>(this.url +"getReplys/"+ post_id+"/"+user_id, {params: params});
  }
  getReactions(user_id: string): Observable<IReact[]>{
    return this.http.get<IReact[]>(this.url +"getReactions/"+ user_id);
  }  
  getReplyReactions(user_id: string): Observable<{react_list: IReact[]}>{
    return this.http.get<{react_list:IReact[]}>(this.url +"getReplyReactions/"+ user_id);
  }

  ngOnDestroy() {
    this.stopPolling.next();
 }
}
