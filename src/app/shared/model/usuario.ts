export class Usuario {
  id: number;
  nome: string;
  cpf: string;
  idade: number;

  constructor(id: number = 0, nome: string = '', cpf: string = '', idade: number = 0) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;

  }
}
