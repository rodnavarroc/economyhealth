import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { Globals } from '../globals';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tests =[{
    imageURL:'https://trello-attachments.s3.amazonaws.com/5f073b3d701bae47a418dcf9/1200x1200/0e24c618da79f0c3cd9bb2f7cdfe6a9b/logo_transparent.png'
  }]

  datos: any = {}; 
  
  alimento: any = 0;
  salud: any = 0;
  servicios: any = 0;
  ocio: any = 0;
  otros: any = 0;
  balance_general: any = 0;
  gastos_totales: any = 0;

  porcentaje_alimento: any = 0;
  porcentaje_salud: any = 0;
  porcentaje_servicios: any = 0;
  porcentaje_ocio: any = 0;
  porcentaje_otros: any = 0;

  constructor(public http:HttpClient, private menu: MenuController, public globals: Globals) { this.globals = globals; }

  ionViewDidEnter()
  {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.datos.action = "insert"; 
    this.datos.idusuario = this.globals.username;
    this.http.post("http://localhost/economyhealth/obtener_gastos.php", this.datos).subscribe(data=>{
    console.log(data); 
    let result = JSON.stringify(data["_body"]);

    this.alimento = data['alimento'];
    this.salud = data['salud'];
    this.servicios = data['servicios'];
    this.ocio = data['ocio'];
    this.otros = data['otros'];
    this.balance_general = data['balance_general'];
    this.gastos_totales = data['gastos_totales'];

    this.porcentaje_alimento = (this.alimento / this.balance_general) * 100;
    this.porcentaje_salud = (this.salud / this.balance_general) * 100;
    this.porcentaje_servicios = (this.servicios / this.balance_general) * 100;
    this.porcentaje_ocio = (this.ocio / this.balance_general) * 100;
    this.porcentaje_otros = (this.otros / this.balance_general) * 100;

    }, err=>{
    console.log(err); 
    })
    }
}
