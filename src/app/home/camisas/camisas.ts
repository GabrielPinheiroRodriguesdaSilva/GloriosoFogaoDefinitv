import { Component, inject, Input } from '@angular/core';
import { ProdutosService, Produto } from '../../service/produtos.service';
import { CardComponent } from '../../menu-footer-card/card/card';

@Component({
  selector: 'app-camisas',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './camisas.html',
  styleUrls: ['./camisas.css']
})
export class CamisasComponent {

  @Input() limite?: number;

  private service = inject(ProdutosService);

  produtos: Produto[] = [];

  ngOnInit() {

    this.service.listar().subscribe(resposta => {

      let lista = resposta.filter(
        p => p.categoria.categoriaNome === 'Camisa'
      );

      if (this.limite) {
        lista = lista.slice(0, this.limite);
      }

      this.produtos = lista;

    });

  }

}