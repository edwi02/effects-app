import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];

  constructor( /* private usuarioServices: UsuarioService */
               private store: Store<AppState>) {
    this.usuarios = [];
  }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe( ({ users }) => {
      this.usuarios = users;
    });

    this.store.dispatch( cargarUsuarios() );

    /* this.usuarioServices.getUsers()
    .subscribe( users => {
        console.log(users);
        this.usuarios = users;
      }
    ); */
  }

}
