 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  clienteId?: number;
  clienteNome: string;
  clienteEmail: string;
  clienteSenha: string;
  clienteTelefone: string;
  clienteCpf: string;
  clienteDataCadastro?: string;
  clienteStatus: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl =
    'http://academico3.rj.senac.br/20261prjint3manha-ecommerce/api/clientes';

  constructor(private http: HttpClient) {}

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

}