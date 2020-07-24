import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialGastosPage } from './historial-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialGastosPageRoutingModule {}
