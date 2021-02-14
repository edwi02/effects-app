import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';




@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions, // Observable que esta escuchando las acciones
        private usuariosService: UsuarioService
    ){}

    // Primer efecto creado. Recordar incluir el simbolo $
    cargarUsuarios$ = createEffect(
        (): any => this.actions$.pipe( // .pipe> aplica filtro en el Observable
            ofType( usuariosActions.cargarUsuarios ), // con el ofType especificamos la acción que deseamos escuchar
            // tap( data => console.log('effect tap', data ) ), // tap> permite disparar efectos secundarios
            mergeMap( () => this.usuariosService.getUsers()
                .pipe( // tap( data => console.log('getUsers efffect', data ) )
                    map( (users: any) => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) )
                )
            ) // Se dispara un nuevo observable y se une
        )
    );

    /* // Ejemplo del sitio oficial
        loadUsersMovies$ = createEffect((): any => this.actions$.pipe(
        ofType('[Usuarios] Cargar Usuarios'),
        mergeMap(() => this.usuariosService.getUsers()
          .pipe(
            map(movies => ({ type: '[Usuarios] Cargar Usuarios Success', usuarios: movies })),
            catchError(() => EMPTY)
          ))
        )
      ); */
}
