export class Jogo {
  public id: number
  public nome: string
  public preco: number
  public estrelas: number
  public diretorioImagem: string
  public desconto: number
  public descricao: string
  public urlVideoDemonstracao: string

  constructor()
  constructor(id?: number, nome?: string, preco?: number, estrelas?: number, diretorioImagem?: string,
  desconto?: number, descricao?: string, urlVideoDemonstracao?: string) {
    this.id = id || 0
    this.nome = nome || ''
    this.preco = preco || 0
    this.estrelas = estrelas || 0
    this.diretorioImagem = diretorioImagem || ''
    this.desconto = desconto || 0
    this.descricao = descricao || ''
    this.urlVideoDemonstracao = urlVideoDemonstracao || ''
  }
}
