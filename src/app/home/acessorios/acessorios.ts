import { Component, inject, Input } from '@angular/core';
import { ProdutosService, Produto } from '../../service/produtos.service';
import { CardComponent } from '../../menu-footer-card/card/card';

@Component({
  selector: 'app-acessorios',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './acessorios.html',
  styleUrls: ['./acessorios.css']
})
export class AcessoriosComponent {

  @Input() limite?: number;

  private service = inject(ProdutosService);

  produtos: Produto[] = [];

  ngOnInit() {

    this.service.listar().subscribe(resposta => {

      let lista = resposta.filter(
        p => p.categoria.categoriaNome === 'Acessorios'
      );

      if (this.limite) {
        lista = lista.slice(0, this.limite);
      }

      this.produtos = lista;

    });

  }

}