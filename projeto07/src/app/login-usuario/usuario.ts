export class Usuario {

  public nome: string|undefined;
  public senha: string|undefined;

  constructor(nome?: string, senha?: string) {
    this.nome = nome
    this.senha = senha
  }

}
