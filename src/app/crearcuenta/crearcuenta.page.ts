import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {
  
  session:any = {};
  constructor(public http:HttpClient, public alertController: AlertController, public router : Router) { }

  ngOnInit() {
  }

  crearCuenta(){
    this.session.action = "insert"; 
    this.http.post("http://45.15.24.33/economyhealth_server/registro.php", this.session).subscribe(data=>{
    console.log(data); 
    let result = JSON.stringify(data["_body"]);
    if(data['status'] == "success")
    {
      this.successAlert();
      this.router.navigate(['/start-page']);
    }
    if(data['status'] == "existe")
    {
      this.alreadyExistsAlert();
      this.router.navigate(['/start-page']);
    }
    }, err=>{
    console.log(err); 
    })
    }

  async successAlert() {
      const alert = await this.alertController.create({
        header: '¡Listo!',
        message: 'Tu cuenta ha sido creada exitosamente.',
        buttons: ['OK']
      });
      await alert.present();
    }

    async alreadyExistsAlert() {
      const alert = await this.alertController.create({
        header: '¡Hey!',
        message: 'Ya existe una cuenta con el usuario o correo que intentas registrar.',
        buttons: ['OK']
      });
      await alert.present();
    }

}
