import { Usuario } from './../../models/usuario.model';
import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';


export interface UsuarioState {
    id: string;
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const UsuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,
};

// tslint:disable-next-line:variable-name
const _usersReducer = createReducer(UsuarioInitialState,

    on( cargarUsuario , (state, { id }) => ({
        ...state,
        loading: true,
        id
    })),
    on( cargarUsuarioSuccess , (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        user:  { ...usuario },
    })),
    on( cargarUsuarioError , (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        },
    })),

);

export function userReducer(state, action): any {
    return _usersReducer(state, action);
}
