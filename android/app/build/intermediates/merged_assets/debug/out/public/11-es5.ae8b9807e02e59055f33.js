!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qhKe:function(n,o,i){"use strict";i.r(o),i.d(o,"CommentsPageModule",(function(){return E}));var c=i("ofXK"),r=i("3Pt+"),s=i("TEn/"),a=i("tyNb"),l=i("mrSG"),b=i("2Vo4"),u=i("eIep"),p=i("XNiG"),d=i("fXoL"),h=i("EQNs"),g=i("2ZZ0"),f=i("qfBg"),m=i("/Hhz"),v=i("tk/3");function _(t,n){if(1&t&&(d.Kb(0,"div",2),d.Ib(1,"ion-icon",3),d.Kb(2,"div",4),d.jc(3),d.Jb(),d.Ib(4,"ion-icon",5),d.Jb()),2&t){var e=d.Ub();d.xb(3),d.kc(e.votecount)}}var y=function(t){return{"active up":t}},x=function(t){return{"active down":t}};function C(t,n){if(1&t){var e=d.Lb();d.Kb(0,"div",2),d.Kb(1,"ion-icon",6),d.Sb("click",(function(){return d.dc(e),d.Ub().upVote()})),d.Jb(),d.Kb(2,"div",4),d.jc(3),d.Jb(),d.Kb(4,"ion-icon",7),d.Sb("click",(function(){return d.dc(e),d.Ub().downVote()})),d.Jb(),d.Jb()}if(2&t){var o=d.Ub();d.xb(1),d.Zb("ngClass",d.ac(3,y,o.user_vote>0)),d.xb(2),d.kc(o.votecount),d.xb(1),d.Zb("ngClass",d.ac(5,x,o.user_vote<0))}}var O,P=((O=function(){function n(e,o){t(this,n),this.user=e,this.http=o,this.owner=!1,this.url="https://officialwithinreach.herokuapp.com/"}return e(n,[{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.user.userInfo();case 2:this.local_user=this.user.uuid,null!=(n=this.reactions.find((function(t){return t.post==e.reply_id})))&&(this.user_vote=n.status),this.votecount=this.likes,this.post_user==this.local_user&&(this.owner=!0);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"upVote",value:function(){1==this.user_vote?(this.user_vote=0,this.votecount=this.votecount-1):-1==this.user_vote?(this.user_vote=1,this.votecount=this.votecount+2):(this.user_vote=1,this.votecount=this.votecount+1),this.http.post(this.url+"upvotereplyHandler",{user_id:this.local_user,reply_id:this.reply_id},{responseType:"text"}).toPromise().then((function(t){})).catch(console.log)}},{key:"downVote",value:function(){-1==this.user_vote?(this.user_vote=0,this.votecount=this.votecount+1):1==this.user_vote?(this.user_vote=-1,this.votecount=this.votecount-2):(this.user_vote=-1,this.votecount=this.votecount-1),this.http.post(this.url+"downvotereplyHandler",{user_id:this.local_user,reply_id:this.reply_id},{responseType:"text"}).toPromise().then((function(t){})).catch(console.log)}}]),n}()).\u0275fac=function(t){return new(t||O)(d.Hb(f.a),d.Hb(v.b))},O.\u0275cmp=d.Bb({type:O,selectors:[["app-reply-vote-button"]],inputs:{post_user:"post_user",reply_id:"reply_id",likes:"likes",reactions:"reactions"},decls:3,vars:2,consts:[["class","votebox",4,"ngIf","ngIfElse"],["react",""],[1,"votebox"],["name","chevron-up",1,"active","up"],[1,"likecount"],["name","chevron-down",1,"vote"],["name","chevron-up",3,"ngClass","click"],["name","chevron-down",3,"ngClass","click"]],template:function(t,n){if(1&t&&(d.hc(0,_,5,1,"div",0),d.hc(1,C,5,7,"ng-template",null,1,d.ic)),2&t){var e=d.cc(2);d.Zb("ngIf",1==n.owner)("ngIfElse",e)}},directives:[c.k,s.o,c.i],styles:["@media (prefers-color-scheme:light){.votebox[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:2em;align-items:center;color:#dce1e5}.votebox[_ngcontent-%COMP%]   .active.down[_ngcontent-%COMP%], .votebox[_ngcontent-%COMP%]   .active.up[_ngcontent-%COMP%]{color:#5600f7}.likecount[_ngcontent-%COMP%]{font-size:.65em;color:#5f656d}}@media (prefers-color-scheme:dark){.votebox[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:2em;align-items:center;color:#555b62}.votebox[_ngcontent-%COMP%]   .active.down[_ngcontent-%COMP%], .votebox[_ngcontent-%COMP%]   .active.up[_ngcontent-%COMP%]{color:#6161bd}.likecount[_ngcontent-%COMP%]{font-size:.6em;color:#bcbbbe}}"]}),O),M=i("Wu1i"),k=["content"];function w(t,n){1&t&&(d.Kb(0,"ion-col",22),d.Ib(1,"ion-icon",23),d.Kb(2,"div",24),d.jc(3,"none"),d.Jb(),d.Jb())}function J(t,n){1&t&&(d.Kb(0,"ion-col",22),d.Ib(1,"ion-icon",23),d.Kb(2,"div",24),d.jc(3,"1 reply"),d.Jb(),d.Jb())}function K(t,n){if(1&t&&(d.Kb(0,"ion-col",22),d.Ib(1,"ion-icon",25),d.Kb(2,"div",24),d.jc(3),d.Jb(),d.Jb()),2&t){var e=d.Ub().ngIf;d.xb(3),d.lc("",e.post.reply_count," replies")}}function I(t,n){if(1&t&&(d.Kb(0,"div",11),d.Kb(1,"ion-card",12),d.Kb(2,"ion-row",13),d.Kb(3,"ion-col",14),d.jc(4),d.Jb(),d.Kb(5,"ion-col",15),d.Ib(6,"app-vote-button",16),d.Jb(),d.Jb(),d.Kb(7,"ion-row",17),d.Kb(8,"ion-col",18),d.Ib(9,"ion-icon",19),d.jc(10),d.Vb(11,"datepipe"),d.Jb(),d.hc(12,w,4,0,"ion-col",20),d.hc(13,J,4,0,"ion-col",20),d.hc(14,K,4,1,"ion-col",20),d.Ib(15,"ion-col",21),d.Jb(),d.Jb(),d.Jb()),2&t){var e=n.ngIf;d.xb(4),d.lc(" ",e.post.body," "),d.xb(2),d.Zb("reactions",e.post_reactions)("post_id",e.post.id)("post_user",e.post.user_id)("likes",e.post.likes),d.xb(4),d.lc(" ",d.Wb(11,9,e.post.timestamp)," "),d.xb(2),d.Zb("ngIf",0==e.post.reply_count),d.xb(1),d.Zb("ngIf",1==e.post.reply_count),d.xb(1),d.Zb("ngIf",e.post.reply_count>1)}}function j(t,n){if(1&t&&(d.Kb(0,"ion-card",29),d.Kb(1,"ion-row"),d.Kb(2,"ion-col",14),d.jc(3),d.Jb(),d.Kb(4,"ion-col",15),d.Ib(5,"app-reply-vote-button",30),d.Jb(),d.Jb(),d.Kb(6,"ion-row",17),d.Kb(7,"ion-col",18),d.Ib(8,"ion-icon",19),d.jc(9),d.Vb(10,"datepipe"),d.Jb(),d.Ib(11,"ion-col",21),d.Ib(12,"ion-col",21),d.Jb(),d.Jb()),2&t){var e=n.$implicit,o=d.Ub().ngIf;d.xb(3),d.lc(" ",e.body," "),d.xb(2),d.Zb("reactions",o.react_list)("reply_id",e.id)("post_user",e.user_id)("likes",e.likes),d.xb(4),d.lc(" ",d.Wb(10,6,e.timestamp)," ")}}function H(t,n){if(1&t&&(d.Kb(0,"ion-content",26,27),d.Kb(2,"ion-list"),d.hc(3,j,13,8,"ion-card",28),d.Jb(),d.Jb()),2&t){var e=n.ngIf;d.xb(3),d.Zb("ngForOf",e.reply_list)}}var R,z,Z,B=[{path:"",component:(R=function(){function n(e,o,i,c,r){var s=this;t(this,n),this.nav=e,this.route=o,this.getData=i,this.postData=c,this.user=r,this.stopPolling=new p.a,this.refresh$=new b.a(!0),this.replyBody="",this.route.queryParams.subscribe((function(t){t&&(s.post_id=JSON.parse(t.post_id))}))}return e(n,[{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.user.userInfo();case 2:this.replys$=this.refresh$.pipe(Object(u.a)((function(t){return n.getData.getReplys(n.post_id,n.user.uuid)})));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"sendMessage",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=0!=this.replyBody.length,!t.t0){t.next=4;break}return t.next=4,this.postData.createReplyRequest(this.user.uuid,this.post_id,this.replyBody).then((function(){n.refresh$.next(!0),setTimeout((function(){return n.content.scrollToBottom(1e3)}),800)}));case 4:this.replyBody="";case 5:case"end":return t.stop()}}),t,this)})))}},{key:"ionViewDidEnter",value:function(){var t=this;setTimeout((function(){return t.content.scrollToBottom(2e3)}),750)}},{key:"gotToHome",value:function(){this.nav.back()}},{key:"ngOnDestroy",value:function(){this.stopPolling.next()}}]),n}(),R.\u0275fac=function(t){return new(t||R)(d.Hb(s.G),d.Hb(a.a),d.Hb(h.a),d.Hb(g.a),d.Hb(f.a))},R.\u0275cmp=d.Bb({type:R,selectors:[["app-comments"]],viewQuery:function(t,n){var e;1&t&&d.mc(k,!0),2&t&&d.bc(e=d.Tb())&&(n.content=e.first)},decls:18,vars:7,consts:[[1,"topHeader"],["slot","start"],["defaultHref","home","text","","icon","chevron-back"],[1,"centercontent"],["color","dark",1,"label"],["slot","end"],["name","flag-outline","color","danger"],["class","topContent",4,"ngIf"],["class","botContent",4,"ngIf"],["lines","full",1,"box"],["enterkeyhint","send","minlength","1","clearInput","true","maxlength","200","autocorrect","on","autocomplete","on","inputmode","text","autofocus","true","placeholder","Reply Back",3,"ngModel","keyup.enter","ngModelChange"],[1,"topContent"],[1,"mainCard"],[1,"mainRow"],["size","10",1,"body"],["size","2",1,"vote"],[3,"reactions","post_id","post_user","likes"],["size","1"],["size","5",1,"time"],["name","time-outline"],["size","4","class","reply",4,"ngIf"],[1,"reply"],["size","4",1,"reply"],["name","chatbubble-outline"],[1,"text"],["name","chatbubbles-outline"],[1,"botContent"],["content",""],["class","replyCard",4,"ngFor","ngForOf"],[1,"replyCard"],[3,"reactions","reply_id","post_user","likes"]],template:function(t,n){1&t&&(d.Kb(0,"ion-header",0),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",1),d.Kb(3,"ion-button"),d.Ib(4,"ion-back-button",2),d.Jb(),d.Jb(),d.Kb(5,"div",3),d.Kb(6,"ion-label",4),d.jc(7,"Details"),d.Jb(),d.Jb(),d.Kb(8,"ion-buttons",5),d.Kb(9,"ion-button"),d.Ib(10,"ion-icon",6),d.Jb(),d.Jb(),d.Jb(),d.hc(11,I,16,11,"div",7),d.Vb(12,"async"),d.Jb(),d.hc(13,H,4,1,"ion-content",8),d.Vb(14,"async"),d.Kb(15,"ion-footer"),d.Kb(16,"ion-item",9),d.Kb(17,"ion-input",10),d.Sb("keyup.enter",(function(){return n.sendMessage()}))("ngModelChange",(function(t){return n.replyBody=t})),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.xb(11),d.Zb("ngIf",d.Wb(12,3,n.replys$)),d.xb(2),d.Zb("ngIf",d.Wb(14,5,n.replys$)),d.xb(4),d.Zb("ngModel",n.replyBody))},directives:[s.n,s.B,s.g,s.f,s.d,s.e,s.r,s.o,c.k,s.l,s.q,s.p,s.J,r.c,r.b,r.f,r.g,s.h,s.w,s.j,m.a,s.k,s.s,c.j,P],pipes:[c.b,M.a],styles:["ion-back-button[_ngcontent-%COMP%]{--color:#5600f7}ion-icon[_ngcontent-%COMP%]{vertical-align:middle;padding-bottom:3px}.header-md[_ngcontent-%COMP%]:after{background-image:none}.centercontent[_ngcontent-%COMP%]{text-align:center;font-weight:700;margin-right:2em}.topContent[_ngcontent-%COMP%]{border-bottom:2px solid #bcbbbe;background-image:url(/assets/img/mapblur.jpg);background-size:cover;background-repeat:no-repeat;vertical-align:middle;width:100%;padding-top:1em;padding-bottom:1em}.list-md[_ngcontent-%COMP%]{padding-top:2%}.ionic-content[_ngcontent-%COMP%]{--offset-bottom:0!important}.scroll-content[_ngcontent-%COMP%]{padding-bottom:0!important}.mainRow[_ngcontent-%COMP%]{height:10em}.time[_ngcontent-%COMP%]{padding-top:0;padding-left:1em;color:#7972da}.vote[_ngcontent-%COMP%]{display:flex;padding-bottom:0;align-items:center}.reply[_ngcontent-%COMP%]{justify-content:left;padding-top:0;display:flex}.text[_ngcontent-%COMP%]{margin-left:.5em}.body[_ngcontent-%COMP%]{padding:1em}.cancel[_ngcontent-%COMP%]{color:#f04747}@media (prefers-color-scheme:light){.box[_ngcontent-%COMP%]{--border-color:#535353;--highlight-color-valid:#5e5e5e}.send-btn[_ngcontent-%COMP%]{color:#202225}.topContent[_ngcontent-%COMP%]{background-color:#fff}.mainCard[_ngcontent-%COMP%], .replyCard[_ngcontent-%COMP%]{box-shadow:5px 5px 15px 5px hsla(0,0%,66.7%,.41)}ion-list[_ngcontent-%COMP%]{width:100%;background-color:#e6e6e6}.botContent[_ngcontent-%COMP%]{--background:#e6e6e6}ion-input[_ngcontent-%COMP%]{background-color:#ddd;border-radius:25px;color:#222;font-weight:400;font-size:medium}ion-item.sc-ion-input-md-h[_ngcontent-%COMP%]:not(.item-label), ion-item[_ngcontent-%COMP%]:not(.item-label)   .sc-ion-input-md-h[_ngcontent-%COMP%]{--padding-start:15px;--padding-end:15px}}@media (prefers-color-scheme:dark){.box[_ngcontent-%COMP%]{--border-color:#fff;--highlight-color-valid:#50c8ff;margin:1px;border:thin solid #403e39;border-radius:25px}.send-btn[_ngcontent-%COMP%]{color:#50c8ff}.topContent[_ngcontent-%COMP%]{background-image:url(/assets/img/mapblurDark.jpg);border-bottom:2px solid #403e39;background-color:#2f3237}ion-card[_ngcontent-%COMP%]{box-shadow:2px 2px 17px 4px rgba(0,0,0,.41)}ion-list[_ngcontent-%COMP%]{width:100%;background-color:#202225}.botContent[_ngcontent-%COMP%]{--background:#202225}ion-input[_ngcontent-%COMP%]{color:#bcbbbe;font-weight:400;font-size:medium;--highlight-background:purple}}@media only screen and (max-height:824px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:9em}}@media only screen and (max-height:812px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:741px){.topHeader[_ngcontent-%COMP%]{height:30%}.list-md[_ngcontent-%COMP%]{padding-top:50px}.mainRow[_ngcontent-%COMP%]{height:6em}}@media only screen and (max-height:738px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:732px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:8em}}@media only screen and (max-height:668px){.topHeader[_ngcontent-%COMP%]{height:30%}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:641px){.topHeader[_ngcontent-%COMP%]{height:30%}.list-md[_ngcontent-%COMP%]{padding-top:45px}.mainRow[_ngcontent-%COMP%]{height:7em}}@media only screen and (max-height:569px){.topHeader[_ngcontent-%COMP%]{height:30%}.list-ios[_ngcontent-%COMP%]{margin-top:55px}.mainRow[_ngcontent-%COMP%]{height:5em}}"]}),R)}],T=((z=function n(){t(this,n)}).\u0275mod=d.Fb({type:z}),z.\u0275inj=d.Eb({factory:function(t){return new(t||z)},imports:[[a.i.forChild(B)],a.i]}),z),V=i("nETc"),E=((Z=function n(){t(this,n)}).\u0275mod=d.Fb({type:Z}),Z.\u0275inj=d.Eb({factory:function(t){return new(t||Z)},imports:[[c.c,r.a,s.C,T,V.a]]}),Z)}}])}();