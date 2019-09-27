import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentesContentComponent } from './componentes-content/componentes-content.component';


const routes: Routes = [
  {
    path: '', component: ComponentesContentComponent, children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
