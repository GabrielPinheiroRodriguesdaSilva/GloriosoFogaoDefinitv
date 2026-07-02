import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carregarUsuario();
  }

  carregarUsuario(): void {

    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
      this.usuario = JSON.parse(usuarioLogado);
    } else {
      this.usuario = null;
    }

  }

  sair(): void {

    localStorage.removeItem('usuarioLogado');

    this.usuario = null;

    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });

  }

}