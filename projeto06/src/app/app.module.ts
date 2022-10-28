import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
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
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
