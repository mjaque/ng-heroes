import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, NgIf } from '@angular/common';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroe-detalle',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './heroe-detalle.component.html',
  styleUrl: './heroe-detalle.component.css'
})
export class HeroeDetalleComponent {
	@Input() heroe?: Heroe
}
