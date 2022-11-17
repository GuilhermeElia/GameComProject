import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado : boolean = false

  public loginError = false

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'gamecom' && usuario.senha === '123') {
      this.usuarioAutenticado = true
      this.router.navigate(['/home'])
    } else {
      this.usuarioAutenticado = false
      this.loginError = true
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }

  getLoginError() {
    return this.loginError
  }

}
