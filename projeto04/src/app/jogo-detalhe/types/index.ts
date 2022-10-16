export interface IJogo {
  id: number,
  nome: string,
  preco: number,
  estrelas: number,
  diretorioImagem: string,
  desconto: number,
}

export interface IJogoDetalhe extends IJogo {
  descricao: string,
  urlVideoDemonstracao: string,
}
