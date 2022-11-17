import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { InicioListaJogosComponent } from './inicio-lista-jogos/inicio-lista-jogos.component';
import { JogoDetalheComponent } from './jogo-detalhe/jogo-detalhe.component';
import { JogosCRUDComponent } from './jogos-crud/jogos-crud.component';
import { AuthService } from './login-usuario/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroComponent,
    InicioComponent,
    LoginUsuarioComponent,
    InicioListaJogosComponent,
    JogoDetalheComponent,
    JogosCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
