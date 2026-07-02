import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LoginService, Cliente } from '../../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  senha = '';
  mensagemErro = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  login(): void {

    this.mensagemErro = '';

    this.loginService.listarClientes().subscribe({

      next: (clientes: Cliente[]) => {

        const usuario = clientes.find(cliente =>
          cliente.clienteEmail === this.email &&
          cliente.clienteSenha === this.senha &&
          cliente.clienteStatus === 1
        );

        if (usuario) {

          // Salva o usuário logado
          localStorage.setItem(
            'usuarioLogado',
            JSON.stringify(usuario)
          );

          // Vai para a página inicial
          this.router.navigate(['/']);

        } else {

          this.mensagemErro = 'E-mail ou senha inválidos.';

        }

      },

      error: (erro) => {

        console.error(erro);
        this.mensagemErro = 'Erro ao conectar com o servidor.';

      }

    });

  }

}