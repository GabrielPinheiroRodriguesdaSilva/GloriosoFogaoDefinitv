import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho implements OnInit {

  produtos: any[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho(): void {
    this.produtos = this.carrinhoService.listar();
  }

  remover(index: number): void {
    this.carrinhoService.remover(index);
    this.carregarCarrinho();
  }

  get total(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }

}