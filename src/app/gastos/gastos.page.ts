import { Component, OnInit } from '@angular/core';


import { HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  gasto:any= {};
  
  constructor(public http:HttpClient, public alertController: AlertController, public router : Router, public globals: Globals) { this.globals = globals;}

  ngOnInit() {
  }

  insertDatosGasto(){
    this.gasto.action = "insert"; 
    this.gasto.idusuario = this.globals.username;
    this.http.post("http://45.15.24.33/economyhealth_server/historial_gasto.php", this.gasto).subscribe(data=>{ 
    console.log(data);
    let result = JSON.stringify(data["_body"]);
    if(data['status'] == "success")
    {
      this.successAlert();
      this.router.navigate(['/tabs/tab1', { gasto: this.gasto }]);
    }
    }, err=>{
    console.log(err); 
    })
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: '¡Listo!',
      message: 'Gasto registrado correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
