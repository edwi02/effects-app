import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { cargarUsuario } from '../../store/actions';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor( private router: ActivatedRoute,
               private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.router.params.subscribe( ({ id }) => {
      console.log(id);
      this.store.dispatch( cargarUsuario({ id }) );
    } );

  }

}
