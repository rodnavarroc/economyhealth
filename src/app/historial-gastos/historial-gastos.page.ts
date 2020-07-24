import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Globals } from '../globals';

@Component({
  selector: 'app-historial-gastos',
  templateUrl: './historial-gastos.page.html',
  styleUrls: ['./historial-gastos.page.scss'],
})
export class HistorialGastosPage implements OnInit {
  
  gastosList: any;
  datos: any = {};
  
  constructor(public http:HttpClient, public globals: Globals) { this.globals = globals; }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.datos.idusuario = this.globals.username;
    this.http.post("http://45.15.24.33/economyhealth_server/obtener_historial_gastos.php", this.datos).subscribe( data => {
    this.gastosList = data;
    console.log(data);
    }, err =>{
    console.log(err); 
    }); 
    }

}
