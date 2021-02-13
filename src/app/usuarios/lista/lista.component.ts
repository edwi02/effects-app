import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];

  constructor( /* private usuarioServices: UsuarioService */) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    /* this.usuarioServices.getUsers()
    .subscribe( users => {
        console.log(users);
        this.usuarios = users;
      }
    ); */
  }

}
