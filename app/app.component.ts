import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { HeroesComponent } from './heroes/heroes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'El Genial Gestor de Héroes';
}
