import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesinicioPage } from './slidesinicio.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesinicioPageRoutingModule {}
