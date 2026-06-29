import { Component, inject, Input } from '@angular/core';
import { ProdutosService, Produto } from '../../service/produtos.service';
import { CardComponent } from '../../menu-footer-card/card/card';

@Component({
  selector: 'app-mais-vendidos',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './mais-vendidas.html',
  styleUrls: ['./mais-vendidas.css']
})
export class MaisVendidas {

  @Input() limite?: number;

  private service = inject(ProdutosService);

  produtos: Produto[] = [];

  ngOnInit() {

    this.service.listar().subscribe(resposta => {

      // Embaralha os produtos
      let lista = [...resposta].sort(() => Math.random() - 0.5);

      // Aplica o limite, se existir
      if (this.limite) {
        lista = lista.slice(0, this.limite);
      }

      this.produtos = lista;

    });

  }

}