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
    this.http.post("http://localhost/economyhealth/historial_gasto.php", this.gasto).subscribe(data=>{
    console.log(data); 
    data['idusuario'] = this.globals.username;
    console.log(data['idusuario']);
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
      header: '¡Correcto!',
      message: 'Información enviada correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

  info(){
    console.log(this.gasto.categoria);
    console.log(this.gasto.concepto);
    console.log(this.gasto.monto);
  }

}
