import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-ingresos',
  templateUrl: './historial-ingresos.page.html',
  styleUrls: ['./historial-ingresos.page.scss'],
})
export class HistorialIngresosPage implements OnInit {

  lista: any=[
    {
      col1:"Test1",
      col2:"Test1",
      col3:"Test1",
      col4:"Test1"
    },
    {
      col1:"Test2",
      col2:"Test2",
      col3:"Test2",
      col4:"Test2"
      }

];

  constructor() { }

  ngOnInit() {
  }

}
