import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponentesContentComponent } from './componentes-content/componentes-content.component';
import { HomePageComponent } from './componentes-content/home-page/home-page.component';
import { EmployeePageComponent } from './componentes-content/employee-page/employee-page.component';
import { HeaderComponent } from './componentes-content/header/header.component';
import { SearchBarComponent } from './componentes-content/home-page/search-bar/search-bar.component';
import { EmployeeListComponent } from './componentes-content/home-page/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './componentes-content/home-page/employee-list/employee-list-item/employee-list-item.component';


@NgModule({
  declarations: [
    ComponentesContentComponent, 
      EmployeePageComponent, 
      HeaderComponent, 
      HomePageComponent, 
        SearchBarComponent, 
        EmployeeListComponent, 
          EmployeeListItemComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
