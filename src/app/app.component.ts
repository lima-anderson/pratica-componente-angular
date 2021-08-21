import { Usuario } from './shared/model/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Social IFPB';

  usuario: Usuario = new Usuario();
  usuarios: Array<Usuario> = new Array<Usuario>();


  constructor() {
    this.usuario.nome = "Anderson";
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario)
    this.usuario = new Usuario();
   }
}
