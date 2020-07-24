import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-gastos',
  templateUrl: './historial-gastos.page.html',
  styleUrls: ['./historial-gastos.page.scss'],
})
export class HistorialGastosPage implements OnInit {

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
