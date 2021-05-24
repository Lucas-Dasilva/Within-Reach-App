import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { IReact } from '../models/reactModel';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss'],
  
})
export class VoteButtonComponent implements OnInit {

  constructor(private getData: GetDataService, private user: UserService, private http: HttpClient ) { }
  // reactListLength: number=0;
  owner: boolean = false;
  user_vote: number;
  local_user: string;
  votecount: number;
  url = 'http://127.0.0.1:5000/';
  @Input() post_user: string;
  @Input() post_id: number;
  @Input() likes: number;
  @Input() reactions: IReact[];
  async ngOnInit() {
    await this.user.userInfo();
    this.local_user = this.user.uuid;   

    //send In local Id to getReactions 
    // this.getData.getReactions(this.local_user)
    //   .subscribe((data) => {
    //     this.reactions = data.react_list;
    //     const reaction = this.reactions.find(reaction=> reaction.post == this.post_id);
    //     if (reaction != undefined){
    //       this.user_vote = reaction.status;
    //     }
    //     this.votecount = this.likes;

        
    //   });
    const reaction = this.reactions.find(reaction=> reaction.post == this.post_id);
    if (reaction != undefined){
      this.user_vote = reaction.status;
    }
    this.votecount = this.likes;
    //Check if this post belongs to local user
    if (this.post_user == this.local_user){
      //console.log("hi")
      this.owner = true;
    }
  }

  upVote(){
    //Change button look in real time, by checking if its already beeing clicked
    if (this.user_vote == 1){
      this.user_vote = 0;
      this.votecount = this.votecount-1;
    }
    else if(this.user_vote == -1){
      this.user_vote = 1;
      this.votecount = this.votecount+2;
    }
    else{
      this.user_vote = 1;
      this.votecount = this.votecount+1;
    }
    //Everything inside <response type> models the schema of whatever the endpoint returns
    this.http.post(this.url + "upvoteHandler", {
      user_id: this.local_user,
      post_id: this.post_id
    },
    {responseType: 'text'})
    .toPromise()
    .then(response => {
      //console.log(response);
    })
    .catch(console.log);

  }
  downVote(){
    //Change button look in real time, by checking if its already beeing clicked
    if (this.user_vote == -1){
      this.user_vote = 0;
      this.votecount = this.votecount+1;
    }
    else if(this.user_vote == 1){
      this.user_vote = -1;
      this.votecount = this.votecount-2;
    }
    else{
      this.user_vote = -1;
      this.votecount = this.votecount-1;
    }
    //Everything inside <response type> models the schema of whatever the endpoint returns
    this.http.post(this.url + "downvoteHandler", {
      user_id: this.local_user,
      post_id: this.post_id
    },
    {responseType: 'text'})
    .toPromise()
    .then(response => {
      //console.log(response);
    })
    .catch(console.log);
  }

}
