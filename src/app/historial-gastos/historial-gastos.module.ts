import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialGastosPageRoutingModule } from './historial-gastos-routing.module';

import { HistorialGastosPage } from './historial-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialGastosPageRoutingModule
  ],
  declarations: [HistorialGastosPage]
})
export class HistorialGastosPageModule {}
