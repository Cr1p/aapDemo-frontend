import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioContentComponent } from './formulario-content/formulario-content.component';


@NgModule({
  declarations: [FormularioContentComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
