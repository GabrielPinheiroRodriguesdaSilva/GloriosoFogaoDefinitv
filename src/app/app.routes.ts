import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { CamisasComponent } from './home/camisas/camisas';
import { AcessoriosComponent } from './home/acessorios/acessorios';

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
  }
];