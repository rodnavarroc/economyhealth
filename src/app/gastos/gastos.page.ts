import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  tipoGasto: string = "";
  nombreGasto: string = "";
  costoGasto: string = "";

  constructor() { }

  funcionImprimir(){
    console.log(this.tipoGasto);
    console.log(this.nombreGasto);
    console.log(this.costoGasto);
  }

  ngOnInit() {
  }

}
