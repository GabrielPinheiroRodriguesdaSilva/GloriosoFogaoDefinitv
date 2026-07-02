import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nome = '';
  email = '';
  senha = '';
  telefone = '';
  cpf = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  registrar() {

    const novoCliente = {
      clienteNome: this.nome,
      clienteEmail: this.email,
      clienteSenha: this.senha,
      clienteTelefone: this.telefone,
      clienteCpf: this.cpf,
      clienteStatus: 1
    };

    this.loginService.cadastrar(novoCliente).subscribe({

      next: () => {

        alert('Cadastro realizado com sucesso!');

        this.router.navigate(['/login']);

      },

      error: (erro) => {

        console.error('Erro:', erro);

        alert('Erro ao cadastrar usuário!');

      }

    });

  }

}