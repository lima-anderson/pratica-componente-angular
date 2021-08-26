import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from './../../shared/model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Array<Usuario> = [];

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
    usuarioService.listar().subscribe(listaUsuario => this.usuarios = listaUsuario);
   }

  ngOnInit(): void {
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarUsuario', usuario.id])
  }

  remover(usuario: Usuario) {
    this.usuarioService.remover(usuario.id).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf)

        if(indexUsuarioParaRemover > -1) {
          this.usuarios.splice(indexUsuarioParaRemover, 1)
        }
      }
    )

  }

}
