(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qhKe:function(t,n,e){"use strict";e.r(n),e.d(n,"CommentsPageModule",(function(){return z}));var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),s=e("tyNb"),r=e("mrSG"),a=e("2Vo4"),l=e("eIep"),b=e("XNiG"),d=e("fXoL"),p=e("EQNs"),h=e("2ZZ0"),g=e("qfBg"),u=e("/Hhz"),m=e("tk/3");function f(t,n){if(1&t&&(d.Kb(0,"div",2),d.Ib(1,"ion-icon",3),d.Kb(2,"div",4),d.jc(3),d.Jb(),d.Ib(4,"ion-icon",5),d.Jb()),2&t){const t=d.Ub();d.xb(3),d.kc(t.votecount)}}const _=function(t){return{"active up":t}},v=function(t){return{"active down":t}};function C(t,n){if(1&t){const t=d.Lb();d.Kb(0,"div",2),d.Kb(1,"ion-icon",6),d.Sb("click",(function(){return d.dc(t),d.Ub().upVote()})),d.Jb(),d.Kb(2,"div",4),d.jc(3),d.Jb(),d.Kb(4,"ion-icon",7),d.Sb("click",(function(){return d.dc(t),d.Ub().downVote()})),d.Jb(),d.Jb()}if(2&t){const t=d.Ub();d.xb(1),d.Zb("ngClass",d.ac(3,_,t.user_vote>0)),d.xb(2),d.kc(t.votecount),d.xb(1),d.Zb("ngClass",d.ac(5,v,t.user_vote<0))}}let y=(()=>{class t{constructor(t,n){this.user=t,this.http=n,this.owner=!1,this.url="https://officialwithinreach.herokuapp.com/"}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.user.userInfo(),this.local_user=this.user.uuid;const t=this.reactions.find(t=>t.post==this.reply_id);null!=t&&(this.user_vote=t.status),this.votecount=this.likes,this.post_user==this.local_user&&(this.owner=!0)}))}upVote(){1==this.user_vote?(this.user_vote=0,this.votecount=this.votecount-1):-1==this.user_vote?(this.user_vote=1,this.votecount=this.votecount+2):(this.user_vote=1,this.votecount=this.votecount+1),this.http.post(this.url+"upvotereplyHandler",{user_id:this.local_user,reply_id:this.reply_id},{responseType:"text"}).toPromise().then(t=>{}).catch(console.log)}downVote(){-1==this.user_vote?(this.user_vote=0,this.votecount=this.votecount+1):1==this.user_vote?(this.user_vote=-1,this.votecount=this.votecount-2):(this.user_vote=-1,this.votecount=this.votecount-1),this.http.post(this.url+"downvotereplyHandler",{user_id:this.local_user,reply_id:this.reply_id},{responseType:"text"}).toPromise().then(t=>{}).catch(console.log)}}return t.\u0275fac=function(n){return new(n||t)(d.Hb(g.a),d.Hb(m.b))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-reply-vote-button"]],inputs:{post_user:"post_user",reply_id:"reply_id",likes:"likes",reactions:"reactions"},decls:3,vars:2,consts:[["class","votebox",4,"ngIf","ngIfElse"],["react",""],[1,"votebox"],["name","chevron-up",1,"active","up"],[1,"likecount"],["name","chevron-down",1,"vote"],["name","chevron-up",3,"ngClass","click"],["name","chevron-down",3,"ngClass","click"]],template:function(t,n){if(1&t&&(d.hc(0,f,5,1,"div",0),d.hc(1,C,5,7,"ng-template",null,1,d.ic)),2&t){const t=d.cc(2);d.Zb("ngIf",1==n.owner)("ngIfElse",t)}},directives:[o.k,c.o,o.i],styles:["@media (prefers-color-scheme:light){.votebox[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:2em;align-items:center;color:#dce1e5}.votebox[_ngcontent-%COMP%]   .active.down[_ngcontent-%COMP%], .votebox[_ngcontent-%COMP%]   .active.up[_ngcontent-%COMP%]{color:#5600f7}.likecount[_ngcontent-%COMP%]{font-size:.65em;color:#5f656d}}@media (prefers-color-scheme:dark){.votebox[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:2em;align-items:center;color:#555b62}.votebox[_ngcontent-%COMP%]   .active.down[_ngcontent-%COMP%], .votebox[_ngcontent-%COMP%]   .active.up[_ngcontent-%COMP%]{color:#6161bd}.likecount[_ngcontent-%COMP%]{font-size:.6em;color:#bcbbbe}}"]}),t})();var x=e("Wu1i");const O=["content"];function M(t,n){1&t&&(d.Kb(0,"ion-col",22),d.Ib(1,"ion-icon",23),d.Kb(2,"div",24),d.jc(3,"none"),d.Jb(),d.Jb())}function P(t,n){1&t&&(d.Kb(0,"ion-col",22),d.Ib(1,"ion-icon",23),d.Kb(2,"div",24),d.jc(3,"1 reply"),d.Jb(),d.Jb())}function k(t,n){if(1&t&&(d.Kb(0,"ion-col",22),d.Ib(1,"ion-icon",25),d.Kb(2,"div",24),d.jc(3),d.Jb(),d.Jb()),2&t){const t=d.Ub().ngIf;d.xb(3),d.lc("",t.post.reply_count," replies")}}function w(t,n){if(1&t&&(d.Kb(0,"div",11),d.Kb(1,"ion-card",12),d.Kb(2,"ion-row",13),d.Kb(3,"ion-col",14),d.jc(4),d.Jb(),d.Kb(5,"ion-col",15),d.Ib(6,"app-vote-button",16),d.Jb(),d.Jb(),d.Kb(7,"ion-row",17),d.Kb(8,"ion-col",18),d.Ib(9,"ion-icon",19),d.jc(10),d.Vb(11,"datepipe"),d.Jb(),d.hc(12,M,4,0,"ion-col",20),d.hc(13,P,4,0,"ion-col",20),d.hc(14,k,4,1,"ion-col",20),d.Ib(15,"ion-col",21),d.Jb(),d.Jb(),d.Jb()),2&t){const t=n.ngIf;d.xb(4),d.lc(" ",t.post.body," "),d.xb(2),d.Zb("reactions",t.post_reactions)("post_id",t.post.id)("post_user",t.post.user_id)("likes",t.post.likes),d.xb(4),d.lc(" ",d.Wb(11,9,t.post.timestamp)," "),d.xb(2),d.Zb("ngIf",0==t.post.reply_count),d.xb(1),d.Zb("ngIf",1==t.post.reply_count),d.xb(1),d.Zb("ngIf",t.post.reply_count>1)}}function J(t,n){if(1&t&&(d.Kb(0,"ion-card",29),d.Kb(1,"ion-row"),d.Kb(2,"ion-col",14),d.jc(3),d.Jb(),d.Kb(4,"ion-col",15),d.Ib(5,"app-reply-vote-button",30),d.Jb(),d.Jb(),d.Kb(6,"ion-row",17),d.Kb(7,"ion-col",18),d.Ib(8,"ion-icon",19),d.jc(9),d.Vb(10,"datepipe"),d.Jb(),d.Ib(11,"ion-col",21),d.Ib(12,"ion-col",21),d.Jb(),d.Jb()),2&t){const t=n.$implicit,e=d.Ub().ngIf;d.xb(3),d.lc(" ",t.body," "),d.xb(2),d.Zb("reactions",e.react_list)("reply_id",t.id)("post_user",t.user_id)("likes",t.likes),d.xb(4),d.lc(" ",d.Wb(10,6,t.timestamp)," ")}}function K(t,n){if(1&t&&(d.Kb(0,"ion-content",26,27),d.Kb(2,"ion-list"),d.hc(3,J,13,8,"ion-card",28),d.Jb(),d.Jb()),2&t){const t=n.ngIf;d.xb(3),d.Zb("ngForOf",t.reply_list)}}const I=[{path:"",component:(()=>{class t{constructor(t,n,e,o,i){this.nav=t,this.route=n,this.getData=e,this.postData=o,this.user=i,this.stopPolling=new b.a,this.refresh$=new a.a(!0),this.replyBody="",this.route.queryParams.subscribe(t=>{t&&(this.post_id=JSON.parse(t.post_id))})}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.user.userInfo(),this.replys$=this.refresh$.pipe(Object(l.a)(t=>this.getData.getReplys(this.post_id,this.user.uuid)))}))}sendMessage(){return Object(r.a)(this,void 0,void 0,(function*(){0!=this.replyBody.length&&(yield this.postData.createReplyRequest(this.user.uuid,this.post_id,this.replyBody).then(()=>{this.refresh$.next(!0),setTimeout(()=>this.content.scrollToBottom(1e3),800)})),this.replyBody=""}))}ionViewDidEnter(){setTimeout(()=>this.content.scrollToBottom(2e3),750)}gotToHome(){this.nav.back()}ngOnDestroy(){this.stopPolling.next()}}return t.\u0275fac=function(n){return new(n||t)(d.Hb(c.G),d.Hb(s.a),d.Hb(p.a),d.Hb(h.a),d.Hb(g.a))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-comments"]],viewQuery:function(t,n){var e;1&t&&d.mc(O,!0),2&t&&d.bc(e=d.Tb())&&(n.content=e.first)},decls:18,vars:7,consts:[[1,"topHeader"],["slot","start"],["defaultHref","home","text","","icon","chevron-back"],[1,"centercontent"],["color","dark",1,"label"],["slot","end"],["name","flag-outline","color","danger"],["class","topContent",4,"ngIf"],["class","botContent",4,"ngIf"],["lines","full",1,"box"],["enterkeyhint","send","minlength","1","clearInput","true","maxlength","200","autocorrect","on","autocomplete","on","inputmode","text","autofocus","true","placeholder","Reply Back",3,"ngModel","keyup.enter","ngModelChange"],[1,"topContent"],[1,"mainCard"],[1,"mainRow"],["size","10",1,"body"],["size","2",1,"vote"],[3,"reactions","post_id","post_user","likes"],["size","1"],["size","5",1,"time"],["name","time-outline"],["size","4","class","reply",4,"ngIf"],[1,"reply"],["size","4",1,"reply"],["name","chatbubble-outline"],[1,"text"],["name","chatbubbles-outline"],[1,"botContent"],["content",""],["class","replyCard",4,"ngFor","ngForOf"],[1,"replyCard"],[3,"reactions","reply_id","post_user","likes"]],template:function(t,n){1&t&&(d.Kb(0,"ion-header",0),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",1),d.Kb(3,"ion-button"),d.Ib(4,"ion-back-button",2),d.Jb(),d.Jb(),d.Kb(5,"div",3),d.Kb(6,"ion-label",4),d.jc(7,"Details"),d.Jb(),d.Jb(),d.Kb(8,"ion-buttons",5),d.Kb(9,"ion-button"),d.Ib(10,"ion-icon",6),d.Jb(),d.Jb(),d.Jb(),d.hc(11,w,16,11,"div",7),d.Vb(12,"async"),d.Jb(),d.hc(13,K,4,1,"ion-content",8),d.Vb(14,"async"),d.Kb(15,"ion-footer"),d.Kb(16,"ion-item",9),d.Kb(17,"ion-input",10),d.Sb("keyup.enter",(function(){return n.sendMessage()}))("ngModelChange",(function(t){return n.replyBody=t})),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.xb(11),d.Zb("ngIf",d.Wb(12,3,n.replys$)),d.xb(2),d.Zb("ngIf",d.Wb(14,5,n.replys$)),d.xb(4),d.Zb("ngModel",n.replyBody))},directives:[c.n,c.B,c.g,c.f,c.d,c.e,c.r,c.o,o.k,c.l,c.q,c.p,c.J,i.c,i.b,i.f,i.g,c.h,c.w,c.j,u.a,c.k,c.s,o.j,y],pipes:[o.b,x.a],styles:["ion-back-button[_ngcontent-%COMP%]{--color:#5600f7}ion-icon[_ngcontent-%COMP%]{vertical-align:middle;padding-bottom:3px}.header-md[_ngcontent-%COMP%]:after{background-image:none}.centercontent[_ngcontent-%COMP%]{text-align:center;font-weight:700;margin-right:2em}.topContent[_ngcontent-%COMP%]{border-bottom:2px solid #bcbbbe;background-image:url(/assets/img/mapblur.jpg);background-size:cover;background-repeat:no-repeat;vertical-align:middle;width:100%;padding-top:1em;padding-bottom:1em}.list-md[_ngcontent-%COMP%]{padding-top:2%}.ionic-content[_ngcontent-%COMP%]{--offset-bottom:0!important}.scroll-content[_ngcontent-%COMP%]{padding-bottom:0!important}.mainRow[_ngcontent-%COMP%]{height:10em}.time[_ngcontent-%COMP%]{padding-top:0;padding-left:1em;color:#7972da}.vote[_ngcontent-%COMP%]{display:flex;padding-bottom:0;align-items:center}.reply[_ngcontent-%COMP%]{justify-content:left;padding-top:0;display:flex}.text[_ngcontent-%COMP%]{margin-left:.5em}.body[_ngcontent-%COMP%]{padding:1em}.cancel[_ngcontent-%COMP%]{color:#f04747}@media (prefers-color-scheme:light){.box[_ngcontent-%COMP%]{--border-color:#535353;--highlight-color-valid:#5e5e5e}.send-btn[_ngcontent-%COMP%]{color:#202225}.topContent[_ngcontent-%COMP%]{background-color:#fff}.mainCard[_ngcontent-%COMP%], .replyCard[_ngcontent-%COMP%]{box-shadow:5px 5px 15px 5px hsla(0,0%,66.7%,.41)}ion-list[_ngcontent-%COMP%]{width:100%;background-color:#e6e6e6}.botContent[_ngcontent-%COMP%]{--background:#e6e6e6}ion-input[_ngcontent-%COMP%]{background-color:#ddd;border-radius:25px;color:#222;font-weight:400;font-size:medium}ion-item.sc-ion-input-md-h[_ngcontent-%COMP%]:not(.item-label), ion-item[_ngcontent-%COMP%]:not(.item-label)   .sc-ion-input-md-h[_ngcontent-%COMP%]{--padding-start:15px;--padding-end:15px}}@media (prefers-color-scheme:dark){.box[_ngcontent-%COMP%]{--border-color:#fff;--highlight-color-valid:#50c8ff;margin:1px;border:thin solid #403e39;border-radius:25px}.send-btn[_ngcontent-%COMP%]{color:#50c8ff}.topContent[_ngcontent-%COMP%]{background-image:url(/assets/img/mapblurDark.jpg);border-bottom:2px solid #403e39;background-color:#2f3237}ion-card[_ngcontent-%COMP%]{box-shadow:2px 2px 17px 4px rgba(0,0,0,.41)}ion-list[_ngcontent-%COMP%]{width:100%;background-color:#202225}.botContent[_ngcontent-%COMP%]{--background:#202225}ion-input[_ngcontent-%COMP%]{color:#bcbbbe;font-weight:400;font-size:medium;--highlight-background:purple}}@media only screen and (max-height:824px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:9em}}@media only screen and (max-height:812px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:741px){.topHeader[_ngcontent-%COMP%]{height:30%}.list-md[_ngcontent-%COMP%]{padding-top:50px}.mainRow[_ngcontent-%COMP%]{height:6em}}@media only screen and (max-height:738px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:732px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:8em}}@media only screen and (max-height:668px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:641px){.topHeader[_ngcontent-%COMP%]{height:30%}.list-md[_ngcontent-%COMP%]{padding-top:45px}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:569px){.topHeader[_ngcontent-%COMP%]{height:30%}.list-ios[_ngcontent-%COMP%]{margin-top:55px}.mainRow[_ngcontent-%COMP%]{height:5em}}"]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(I)],s.i]}),t})();var H=e("nETc");let z=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(n){return new(n||t)},imports:[[o.c,i.a,c.C,j,H.a]]}),t})()}}]);