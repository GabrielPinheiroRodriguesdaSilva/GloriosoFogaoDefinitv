import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu-footer-card/menu/menu";
import { Footer } from './menu-footer-card/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Footer, ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('gloriosofogao');
}
