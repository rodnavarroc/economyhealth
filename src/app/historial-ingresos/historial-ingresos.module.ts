import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialIngresosPageRoutingModule } from './historial-ingresos-routing.module';

import { HistorialIngresosPage } from './historial-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialIngresosPageRoutingModule
  ],
  declarations: [HistorialIngresosPage]
})
export class HistorialIngresosPageModule {}
