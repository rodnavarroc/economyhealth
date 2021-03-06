import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'start-page',
    loadChildren: () => import('./start-page/start-page.module').then( m => m.StartPagePageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciarsesion/iniciarsesion.module').then( m => m.IniciarsesionPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'slides-inicio',
    loadChildren: () => import('./slidesinicio/slidesinicio.module').then( m => m.SlidesinicioPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosPageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },
  {
    path: 'historial-gastos',
    loadChildren: () => import('./historial-gastos/historial-gastos.module').then( m => m.HistorialGastosPageModule)
  },
  {
    path: 'historial-ingresos',
    loadChildren: () => import('./historial-ingresos/historial-ingresos.module').then( m => m.HistorialIngresosPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
