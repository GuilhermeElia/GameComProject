import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: CadastroUsuarioComponent },
  { path: 'home', component: InicioComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', component: CadastroUsuarioComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
