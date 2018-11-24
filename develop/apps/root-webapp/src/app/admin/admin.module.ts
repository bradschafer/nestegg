import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

// Ng Prime
import { PanelMenuModule } from 'primeng/panelmenu';
import {TableModule} from 'primeng/table';
import { MultiSelectModule, SliderModule, DropdownModule, ButtonModule,
  InputTextModule, TabViewModule, DialogModule } from 'primeng/primeng';

import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { RolesComponent } from './roles/roles.component';

const components = [
  AdminComponent,
  UsersComponent,
  MenuComponent,
  RolesComponent
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    InputTextModule,
    PanelMenuModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    DropdownModule,
    TabViewModule,
    DialogModule
  ],
  declarations: [...components]
})
export class AdminModule { }
