import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUsers(): any {
    return this.http.get(`${ this.url }/users?delay=3&per_page=6`)
            .pipe(
              map( resp => resp['data'] ) // Retornar la data de la respusta
            );
  }

  getUserById( id: string ): any {
    return this.http.get(`${ this.url }/users/${ id }`)
            .pipe(
              map( resp => resp['data'] ) // Retornar la data de la respusta
            );
  }
}
