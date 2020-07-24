import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { Globals } from '../globals';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  datos:any={};
  datos2:any={};
  nombre_usuario: any="";
  correo_electronico: any="";
  constructor(public http:HttpClient, private menu: MenuController, public globals: Globals, public alertController: AlertController, public router : Router) { this.globals = globals; }


  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.obtenerUsuario();
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

    eliminarCuenta(){
      this.datos2.action = "insert"; 
      this.datos2.idusuario = this.globals.username;
      this.http.post("http://45.15.24.33/economyhealth_server/borrar_cuenta.php", this.datos2).subscribe(data=>{ 
      console.log(data);
      let result = JSON.stringify(data["_body"]);
      if(data['status'] == "success")
      {
        this.successAlert();
        this.router.navigate(['/start-page']);
      }
      }, err=>{
      console.log(err); 
      })
    }
  
    async successAlert() {
      const alert = await this.alertController.create({
        header: '¡Listo!',
        message: 'Su cuenta se ha eliminado junto con todos sus registros asociados.',
        buttons: ['OK']
      });
      await alert.present();
    }
}
