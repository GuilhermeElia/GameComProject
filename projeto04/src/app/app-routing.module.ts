import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { JogoDetalheComponent } from './jogo-detalhe/jogo-detalhe.component';
import { InicioListaJogosComponent } from './inicio-lista-jogos/inicio-lista-jogos.component';
import { JogosCRUDComponent } from './jogos-crud/jogos-crud.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: InicioComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'jogo-detalhe/:id', component: JogoDetalheComponent },
  { path: 'todos-os-jogos', component: InicioListaJogosComponent},
  { path: 'cadastro-novo-jogo', component: JogosCRUDComponent},
  

  { path: '**', component: LoginUsuarioComponent }, // Rota Page not Found, Adicionar rotas acima dessa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
