import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';





@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions, // Observable que esta escuchando las acciones
        private usuariosService: UsuarioService
    ){}

    // Primer efecto creado. Recordar incluir el simbolo $
    cargarUsuario$ = createEffect(
        (): any => this.actions$.pipe( // .pipe> aplica filtro en el Observable
            ofType( usuarioActions.cargarUsuario ), // con el ofType especificamos la acción que deseamos escuchar
            mergeMap(
                ( action ) => this.usuariosService.getUserById( action.id ) // El action tiene todos los valores
                .pipe( // tap( data => console.log('getUsers efffect', data ) )
                    map( (user: any) => usuarioActions.cargarUsuarioSuccess({ usuario: user }) ),
                    catchError( err => of(usuarioActions.cargarUsuarioError({ payload: err })) )
                )
            ) // Se dispara un nuevo observable y se une
        )
    );

}
