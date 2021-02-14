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
  loading: boolean;
  error: any;

  constructor( /* private usuarioServices: UsuarioService */
               private store: Store<AppState>) {
    this.usuarios = [];
    this.loading = false;
  }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
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
