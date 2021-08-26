import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastrarUsuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'cadastrarUsuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listarUsuarios',
    component: ListagemUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
