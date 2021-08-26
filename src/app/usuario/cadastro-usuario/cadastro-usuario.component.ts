import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { USUARIOS } from './../../shared/model/USUARIOS';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  operacaoCadastro = true;

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.usuario = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if(this.usuario.id) {
      this.usuarioService.atualizar(this.usuario).subscribe(usuario => {
        console.log(usuario);
        this.roteador.navigate(['listarUsuarios']);
      })

    } else {
      this.usuarioService.inserir(this.usuario).subscribe(usuario => {
        console.log(usuario);
        this.roteador.navigate(['listarUsuarios']);
      })
      this.usuario = new Usuario();
    }


   }

}
