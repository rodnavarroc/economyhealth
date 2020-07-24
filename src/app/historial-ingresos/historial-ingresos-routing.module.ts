import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialIngresosPage } from './historial-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialIngresosPageRoutingModule {}
