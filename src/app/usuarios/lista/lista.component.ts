import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  constructor( private usuarioServices: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioServices.getUsers()
    .subscribe( data => {
        console.log(data);
      }
    );
  }

}
