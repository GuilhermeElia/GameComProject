import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Jogo } from '../models/jogo.model';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-jogos-crud',
  templateUrl: './jogos-crud.component.html',
  styleUrls: ['./jogos-crud.component.css']
})
export class JogosCRUDComponent implements OnInit {

  public jogo = new Jogo()

  constructor(private rota: Router, private jogoService: JogoService) { }

  ngOnInit(): void {
  }

  public cadastrar() {
    this.jogoService.cadastrar(this.jogo).subscribe((response) => {
      console.log(response)
      this.rota.navigate(['/todos-os-jogos'])
    })
  }

}
