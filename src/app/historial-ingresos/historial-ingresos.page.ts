import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Globals } from '../globals';

@Component({
  selector: 'app-historial-ingresos',
  templateUrl: './historial-ingresos.page.html',
  styleUrls: ['./historial-ingresos.page.scss'],
})
export class HistorialIngresosPage implements OnInit {
  
  ingresosList: any;
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
    this.http.post("http://45.15.24.33/economyhealth_server/obtener_historial_ingresos.php", this.datos).subscribe( data => {
    this.ingresosList = data;
    console.log(data);
    }, err =>{
    console.log(err); 
    }); 
    }

}
