import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Globals} from '../globals';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})

export class IniciarsesionPage implements OnInit {
  
  session:any = {};
  constructor(public http:HttpClient, public alertController: AlertController, public router : Router, public globals: Globals) { this.globals = globals; }

  ngOnInit() {
  }

  iniciarSesion(){
    this.session.action = "insert"; 
    this.http.post("http://localhost/economyhealth/login.php", this.session).subscribe(data=>{
    console.log(data); 
    let result = JSON.stringify(data["_body"]);
    if(data['status'] == "success")
    {
      this.successAlert();
      this.router.navigate(['/tabs']);
      this.globals.username = data['username'];
      console.log(this.globals.username);
    }
    else
    {
      this.errorAlert();
      this.router.navigate(['/start-page']);
    }
    }, err=>{
    console.log(err); 
    })
    }

  async successAlert() {
      const alert = await this.alertController.create({
        header: '¡Bienvenido!',
        message: 'Identificado correctamente.',
        buttons: ['OK']
      });
      await alert.present();
    }

    async errorAlert() {
      const alert = await this.alertController.create({
        header: '¡Hey!',
        message: 'Los datos introducidos no son correctos.',
        buttons: ['OK']
      });
      await alert.present();
    }

}
