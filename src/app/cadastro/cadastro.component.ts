import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css',
              '../login-usuario/css/main.css',
              '../login-usuario/css/util.css',
              '../login-usuario/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
              '../login-usuario/vendor/animate/animate.css',
              '../login-usuario/vendor/bootstrap/css/bootstrap.min.css',
              '../login-usuario/vendor/css-hamburgers/hamburgers.min.css',
              '../login-usuario/vendor/select2/select2.min.css',
            ]
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
