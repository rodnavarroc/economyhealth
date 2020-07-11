import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesinicioPageRoutingModule } from './slidesinicio-routing.module';

import { SlidesinicioPage } from './slidesinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesinicioPageRoutingModule
  ],
  declarations: [SlidesinicioPage]
})
export class SlidesinicioPageModule {}
