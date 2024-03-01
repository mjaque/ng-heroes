import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Heroe } from './heroe'
import { HEROES } from './heroes-mock'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes(): Observable<Heroe[]>{
	const heroes = of(HEROES)
  	return heroes
  }
}
