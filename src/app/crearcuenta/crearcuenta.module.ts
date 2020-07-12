import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcuentaPageRoutingModule } from './crearcuenta-routing.module';
import { MainHeaderComponent } from '../Components/main-header/main-header.component'; 
import { CrearcuentaPage } from './crearcuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcuentaPageRoutingModule
  ],
  declarations: [CrearcuentaPage, MainHeaderComponent]
})
export class CrearcuentaPageModule {}
