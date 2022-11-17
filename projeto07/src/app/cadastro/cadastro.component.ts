import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  router: any;

  constructor() { }

  pathImgLogin: string = 'assets/img-01.png'

  ngOnInit(): void {
  }

  onSubmit(data: NgForm): void {
    alert('registrado')

  }

}
