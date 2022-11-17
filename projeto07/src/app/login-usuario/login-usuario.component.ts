import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  // @ts-ignore
  formCliente: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  public loginError = this.authService.getLoginError();

  pathImgLogin: string = 'assets/img-01.png'

  ngOnInit(): void {
    this.createForm(new Usuario())
  }

  createForm(usuario: Usuario) {
    this.formCliente = new FormGroup({
      nome: new FormControl(usuario.nome),
      senha: new FormControl(usuario.senha)
    })
  }

  onSubmit(): void {
    this.authService.fazerLogin(this.formCliente.value)
    this,this.formCliente.reset(new Usuario())
  }

}
