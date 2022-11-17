import { Component, OnInit } from '@angular/core';

import { Jogo } from '../models/jogo.model';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-inicio-lista-jogos',
  templateUrl: './inicio-lista-jogos.component.html',
  styleUrls: ['./inicio-lista-jogos.component.css']
})
export class InicioListaJogosComponent implements OnInit {

  public jogos: Jogo[] = [];

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.jogoService.buscarTodos().subscribe((response: Jogo[]) => {
      this.jogos = response
    })
  }

  getEstrelas(jogo: Jogo): any[] {
    return Array(jogo.estrelas);
  }

}
