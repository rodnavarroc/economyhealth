import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from '../Components/main-header/main-header.component'; 

import { IonicModule } from '@ionic/angular';

import { IniciarsesionPageRoutingModule } from './iniciarsesion-routing.module';

import { IniciarsesionPage } from './iniciarsesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarsesionPageRoutingModule
  ],
  declarations: [IniciarsesionPage, MainHeaderComponent]
})
export class IniciarsesionPageModule {}
