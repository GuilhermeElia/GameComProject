import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private jogoService: JogoService,
              private rota: Router) { }

  ngOnInit(): void {
    const idParametro: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'))
    this.jogoService.buscar(idParametro).subscribe((jogo: Jogo) => {
      this.jogoDetalhe = jogo
    })
  }

  public getUrlSafe(): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.jogoDetalhe.urlVideoDemonstracao)
  }

  public excluir() {
    this.jogoService.deletar(this.jogoDetalhe.id).subscribe((resposta)=>{
      console.log(resposta);
      this.rota.navigate(['/todos-os-jogos']);
    });
  }
}
