import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {

  @Input() nome!: string;

  @Input() descricao!: string;

  @Input() preco!: number;

  @Input() imagem!: string;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  comprar(): void {

  const produto = {
    nome: this.nome,
    descricao: this.descricao,
    preco: this.preco,
    imagem: this.imagem
  };

  this.carrinhoService.adicionar(produto);

  alert('Produto adicionado ao carrinho!');

}

}