import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioContentComponent } from './formulario-content/formulario-content.component';


const routes: Routes = [
  {
    path: '', component: FormularioContentComponent, children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
