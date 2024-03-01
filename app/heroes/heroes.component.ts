import { Component } from '@angular/core'
import { NgFor } from '@angular/common'
import { HeroeDetalleComponent  } from '../heroe-detalle/heroe-detalle.component'
import { Heroe } from '../heroe'
import { HeroesService } from '../heroes.service'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, HeroeDetalleComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

	heroes: Heroe[] = [] 
	heroeSeleccionado?: Heroe

	constructor(private servicioHeroes: HeroesService){
	}

	ngOnInit(): void{
		this.servicioHeroes.getHeroes().subscribe ( heroes => this.heroes = heroes)
	}

	onSeleccionar(heroe: Heroe):void{
		this.heroeSeleccionado = heroe
	}
}
