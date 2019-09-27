import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: 'formulario', loadChildren: './formulario/formulario.module#FormularioModule',
  },
  {
    path: 'principal', loadChildren: './principal/principal.module#PrincipalModule',
    // canActivate: [AuthGuard]
  },  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
