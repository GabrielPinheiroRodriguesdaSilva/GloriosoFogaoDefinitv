import { Component, Input } from '@angular/core';

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

}