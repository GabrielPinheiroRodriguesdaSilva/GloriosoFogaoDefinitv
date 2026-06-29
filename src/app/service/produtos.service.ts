import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categoria {
  categoriaId: number;
  categoriaNome: string;
  categoriaDescricao: string;
  categoriaStatus: number;
}

export interface Produto {
  produtoId: number;
  produtoNome: string;
  produtoDescricao: string;
  produtoPreco: number;
  produtoEstoque: number;
  produtoImagem: string;
  produtoStatus: number;
  categoria: Categoria;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private http = inject(HttpClient);

  private api = 'http://academico3.rj.senac.br/20261prjint3manha-ecommerce/api/produtos';

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.api);
  }
}