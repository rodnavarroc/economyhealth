import { Component, OnInit } from '@angular/core';


import { HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  ingreso:any ={}
  constructor(public http:HttpClient, public alertController: AlertController, public router : Router, public globals: Globals) { this.globals = globals;}

  ngOnInit() {
  }


  insertDatosIngreso(){
    this.ingreso.action = "insert"; 
    this.ingreso.idusuario = this.globals.username;
    this.http.post("http://45.15.24.33/economyhealth_server/historial_ingreso.php", this.ingreso).subscribe(data=>{ 
    console.log(data);
    let result = JSON.stringify(data["_body"]);
    if(data['status'] == "success")
    {
      this.successAlert();
      this.router.navigate(['/tabs/tab1']);
    }
    }, err=>{
    console.log(err); 
    })
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: '¡Listo!',
      message: 'Ingreso registrado correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
