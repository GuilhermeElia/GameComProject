import { Injectable } from '@angular/core';

import { Jogo } from '../models/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  jogos: Jogo[] = [
    {
      id: 1,
      nome: 'Counter-Strike: Global Ofensive',
      preco: 24.99,
      estrelas: 4,
      diretorioImagem: '/assets/images/counter-strike-global-offensive.png',
      desconto: 20,
      descricao: 'Um jogo de tiro bem legal',
      urlVideoDemonstracao: 'https://www.youtube.com/embed/edYCtaNueQY',
    },
    {
      id: 2,
      nome: 'Valorant',
      preco: 10.99,
      estrelas: 5,
      diretorioImagem: '/assets/images/valorant.png',
      desconto: 0,
      descricao: 'Outro jogo de tiro bem legal',
      urlVideoDemonstracao: 'https://www.youtube.com/embed/e_E9W2vsRbQ',
    },
    {
      id: 3,
      nome: 'Rocket League',
      preco: 15.0,
      estrelas: 4,
      diretorioImagem: '/assets/images/rocket-league.png',
      desconto: 0,
      descricao: 'Um jogo de carro e futebol',
      urlVideoDemonstracao: 'https://www.youtube.com/embed/OmMF9EDbmQQ',
    },
  ]

  constructor() { }

  buscarTodos(): Jogo[] {
    return this.jogos
  }

  buscar(id: number): Jogo {

    const inicioListaJogosComponent = new JogoService()

    const jogoDetalheFiltrado = inicioListaJogosComponent.jogos.filter((jogo) => {
        return jogo.id === id;
    });

    return jogoDetalheFiltrado[0]

  }

  atualizar(novoJogo: Jogo) {
    let jogoEdit = this.jogos.find(jogo => jogo.id === novoJogo.id)
    jogoEdit = novoJogo
  }

  deletar(id: number) {
    const posicao = this.jogos.findIndex( obj => obj.id === id );

    this.jogos.splice(posicao, 1);
  }

}
