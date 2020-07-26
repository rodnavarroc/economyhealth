import { Component } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public globals: Globals) { this.globals = globals; }  

  ionViewDidEnter()
  {
    this.globals.loadFavs();
  }

}
