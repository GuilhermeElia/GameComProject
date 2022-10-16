import { Component, OnInit } from '@angular/core';

import { IJogo, IJogoDetalhe } from '../jogo-detalhe/types';

@Component({
  selector: 'app-inicio-lista-jogos',
  templateUrl: './inicio-lista-jogos.component.html',
  styleUrls: ['./inicio-lista-jogos.component.css']
})
export class InicioListaJogosComponent implements OnInit {

  jogos: IJogoDetalhe[] = [
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
  ];

  getEstrelas(jogo: IJogo): any[] {
    return Array(jogo.estrelas);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
