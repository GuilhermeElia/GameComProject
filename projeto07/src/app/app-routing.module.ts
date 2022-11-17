import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { JogoDetalheComponent } from './jogo-detalhe/jogo-detalhe.component';
import { InicioListaJogosComponent } from './inicio-lista-jogos/inicio-lista-jogos.component';
import { JogosCRUDComponent } from './jogos-crud/jogos-crud.component';
import { AuthGuardService } from './guards/auth-guard.service'

const routes: Routes = [
  { path: '', component: LoginUsuarioComponent },
  { path: 'home', component: InicioComponent, canActivate: [AuthGuardService] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuardService] },
  { path: 'jogo-detalhe/:id', component: JogoDetalheComponent, canActivate: [AuthGuardService] },
  { path: 'todos-os-jogos', component: InicioListaJogosComponent, canActivate: [AuthGuardService] },
  { path: 'cadastro-novo-jogo', component: JogosCRUDComponent, canActivate: [AuthGuardService] },


  { path: '**', component: LoginUsuarioComponent }, // Rota Page not Found, Adicionar rotas acima dessa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
