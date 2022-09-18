import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css',
              './css/main.css',
              './css/util.css',
              './fonts/font-awesome-4.7.0/css/font-awesome.min.css',
              './vendor/animate/animate.css',
              './vendor/bootstrap/css/bootstrap.min.css',
              './vendor/css-hamburgers/hamburgers.min.css',
              './vendor/select2/select2.min.css',
            ]
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  pathImgLogin: string = 'assets/img-01.png'

  ngOnInit(): void {
  }

  onSubmit(data: NgForm): void {
    const values = data.value
    if (values.login === 'gamecom' && values.pass === '123') {
      this.router.navigate(['/home'])
    } else {
      alert('Login ou senha Incorreto')
    }

  }

}
