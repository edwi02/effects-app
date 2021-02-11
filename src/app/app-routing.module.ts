import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'home', component: ListaComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ]
})
export class AppRoutingModule { }
