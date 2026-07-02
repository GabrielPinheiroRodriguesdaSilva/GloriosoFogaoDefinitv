import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { CamisasComponent } from './home/camisas/camisas';
import { AcessoriosComponent } from './home/acessorios/acessorios';
import { Login } from './menu-footer-card/menu/login/login';
import { Registro } from './menu-footer-card/menu/registro/registro';
import { Carrinho } from './menu-footer-card/carrinho/carrinho';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'camisas',
    component: CamisasComponent
  },
  {
    path: 'acessorios',
    component: AcessoriosComponent
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'registro',
    component: Registro
  },
  {
    path: 'carrinho',
    component: Carrinho
  }
];