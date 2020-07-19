import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Globals } from '../../globals';

@Component({
  selector: 'app-eco-menu',
  templateUrl: './eco-menu.component.html',
  styleUrls: ['./eco-menu.component.scss'],
})
export class EcoMenuComponent implements OnInit {

  constructor(public router: Router, public globals: Globals) { this.globals=globals;}

  cerrarSesion(){
    this.router.navigate(['/start-page']);
    this.globals.username=null;
  }
  ngOnInit() {}

}
