import { Usuario } from './../../models/usuario.model';
import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';


export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

// tslint:disable-next-line:variable-name
const _usersReducer = createReducer(usuariosInitialState,

    on( cargarUsuarios , state => ({ ...state, loading: true })),
    on( cargarUsuariosSuccess , (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [ ...usuarios ],
    })),
    on( cargarUsuariosError , (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload,
    })),

);

export function usersReducer(state, action): any {
    return _usersReducer(state, action);
}
