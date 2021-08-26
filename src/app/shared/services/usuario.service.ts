import { USUARIOS } from './../model/USUARIOS';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private httpCliente: HttpClient) {

  }

  listar(): Observable<Array<Usuario>> {
    return this.httpCliente.get<Usuario[]>(this.URL_USUARIOS)
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  remover(id: number): Observable<object> {
    return this.httpCliente.delete<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Usuario> {
    return this.httpCliente.get<Usuario>(`${this.URL_USUARIOS}/${id}`)
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }
}
