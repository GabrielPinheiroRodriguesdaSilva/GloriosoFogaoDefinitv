import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { MaisVendidas } from '../mais-vendidas/mais-vendidas';
import { AcessoriosComponent } from '../acessorios/acessorios';
import { CamisasComponent } from '../camisas/camisas';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Banner,
    MaisVendidas,
    AcessoriosComponent,
    CamisasComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}