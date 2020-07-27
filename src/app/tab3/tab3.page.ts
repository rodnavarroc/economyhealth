import { Component } from '@angular/core';
import { Globals } from '../globals';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public globals: Globals, private socialSharing: SocialSharing) { this.globals = globals; }  

  ionViewDidEnter()
  {
    this.globals.loadFavs();
  }

  sendShare(message:any, subject:any, url:any) {
    this.socialSharing.share(message, subject, null, url);
  }

}
