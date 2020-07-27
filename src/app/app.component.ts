import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private network: Network,
    public alertController: AlertController
  ) {
    this.initializeApp();
    if(!this.isConnected())
    {
      this.errorAlert();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('start-page');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#3d543a');
    });
  }

  isConnected(): boolean {
    let conntype = this.network.type;
    return conntype && conntype !== 'unknown' && conntype !== 'none';
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: '¡Hey!',
      message: 'Debes estar conectado a internet para usar la aplicación.',
      buttons: ['OK']
    });
    await alert.present();
  }
}