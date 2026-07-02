import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  adicionar(produto: any) {

    let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

    carrinho.push(produto);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

  }

  listar() {

    return JSON.parse(localStorage.getItem('carrinho') || '[]');

  }

  remover(index: number) {

    let carrinho = this.listar();

    carrinho.splice(index, 1);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

  }

}