import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

let CheckCB = 0;

@Component({
  selector: 'app-slidesinicio',
  templateUrl: './slidesinicio.page.html',
  styleUrls: ['./slidesinicio.page.scss'],
})
export class SlidesinicioPage implements OnInit {
  public form = [
    { val: 'Acuerdo', isChecked: false }
  ];

  constructor(public router : Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  revisarCheckbox()
  {
    if(CheckCB == 0)
    {
      CheckCB = 1;
    }
  }

  btnCrearCuenta()
  {
    if(CheckCB == 1)
    {
      this.router.navigate(['/crear-cuenta']);
    }
    else{
      this.errorAlert();
    }
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: '¡Hey!',
      message: 'Debes aceptar los términos y condiciones para registrarte.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
