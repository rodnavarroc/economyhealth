import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { EcoMenuComponent } from '../Components/eco-menu/eco-menu.component';
import { MainHeaderComponent } from '../Components/main-header/main-header.component'; 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, EcoMenuComponent, MainHeaderComponent]
})
export class TabsPageModule {}
