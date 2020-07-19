import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { Globals } from '../globals';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  datos:any={};
  nombre_usuario: any=0;
  correo_electronico: any=0;
  constructor(public http:HttpClient, private menu: MenuController, public globals: Globals) { this.globals = globals; }


  ngOnInit() {
  }

    obtenerUsuario(){
    this.datos.action = "insert"; 
    this.datos.idusuario = this.globals.username;
    this.http.post("http://45.15.24.33/economyhealth_server/obtener_datosPerfil.php", this.datos).subscribe(data=>{
    console.log(data); 
    let result = JSON.stringify(data["_body"]);

    this.nombre_usuario = data['nombre_usuario'];
    this.correo_electronico = data['correo_electronico'];
    }, err=>{
      console.log('Error al obtener datos del usuario');
    })
    }
}
