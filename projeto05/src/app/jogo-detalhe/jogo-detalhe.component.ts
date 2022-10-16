import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { JogoService } from '../services/jogo.service';
import { Jogo } from '../models/jogo.model';

@Component({
  selector: 'app-jogo-detalhe',
  templateUrl: './jogo-detalhe.component.html',
  styleUrls: ['./jogo-detalhe.component.css']
})
export class JogoDetalheComponent implements OnInit {

  public jogoDetalhe = new Jogo()

  constructor(private rotaAtiva: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private jogoService: JogoService) { }

  ngOnInit(): void {
    const idParametro: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.jogoDetalhe = this.jogoService.buscar(idParametro);
  }


  getUrlSafe(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
