import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private _heroesService:HeroesService) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(dato =>{
      this.termino = dato['termino'];
      this.heroes = this._heroesService.buscarHeroes(dato['termino']);
      console.log(this.heroes);
    });
  }

  /*verHeroe(idx:string){
    this.router.navigate(['/heroe',idx]);
  }*/

}
