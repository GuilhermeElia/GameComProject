import { Component, OnInit } from '@angular/core';

import { IJogo } from './types';

@Component({
  selector: 'app-inicio-lista-jogos',
  templateUrl: './inicio-lista-jogos.component.html',
  styleUrls: ['./inicio-lista-jogos.component.css']
})
export class InicioListaJogosComponent implements OnInit {

  jogos: IJogo[] = [
    {
      id: 1,
      nome: 'Counter-Strike: Global Ofensive',
      preco: 24.99,
      estrelas: 5,
      diretorioImagem: 'assets/images/counter-strike-global-offensive.png',
      vendido: false,
    },
    {
      id: 2,
      nome: 'Valorant',
      preco: 10.99,
      estrelas: 3,
      diretorioImagem: 'assets/images/valorant.png',
      vendido: true,
    },
    {
      id: 3,
      nome: 'Rocket League',
      preco: 15.0,
      estrelas: 4,
      diretorioImagem: 'assets/images/rocket-league.png',
      vendido: false,
    },
  ];

  getEstrelas(jogo: IJogo) {
    return Array(jogo.estrelas);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
