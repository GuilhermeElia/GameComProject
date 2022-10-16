import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { InicioListaJogosComponent } from '../inicio-lista-jogos/inicio-lista-jogos.component';
import { IJogoDetalhe } from './types';

@Component({
  selector: 'app-jogo-detalhe',
  templateUrl: './jogo-detalhe.component.html',
  styleUrls: ['./jogo-detalhe.component.css']
})
export class JogoDetalheComponent implements OnInit {

  constructor(private rotaAtiva: ActivatedRoute, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {

    const idParametro: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.jogoDetalhe = this.filtrarJogo(idParametro);

  }

  public jogoDetalhe: IJogoDetalhe = {
    id: 0,
    nome: '',
    preco: 0,
    estrelas: 0,
    diretorioImagem: '',
    desconto: 0,
    descricao: '',
    urlVideoDemonstracao: ''
  }

  getUrlSafe(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  filtrarJogo(id: number): IJogoDetalhe {

    const inicioListaJogosComponent = new InicioListaJogosComponent()

    const jogoDetalheFiltrado = inicioListaJogosComponent.jogos.filter((jogo) => {
        return jogo.id === id;
    });

    return jogoDetalheFiltrado[0]

  }

}
