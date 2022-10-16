import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  loginError = false;

  pathImgLogin: string = 'assets/img-01.png'

  ngOnInit(): void {
  }

  onSubmit(data: NgForm): void {
    const values = data.value
    if (values.login === 'gamecom' && values.pass === '123') {
      this.router.navigate(['/home'])
    } else {
      this.loginError = true;
    }

  }

}
