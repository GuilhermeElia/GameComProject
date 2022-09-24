export interface IJogo {
  id: number,
  nome: string,
  preco: number,
  estrelas: number,
  diretorioImagem: string,
  vendido: boolean,
}

export interface IJogoDetalhe extends IJogo {
  descricao: string,
  urlVideoDemonstracao: string,
}
