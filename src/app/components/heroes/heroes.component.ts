import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:Heroe [] = [];

  constructor(private _heroesSevice:HeroesService,
              private _router:Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesSevice.getHeroes();

    //console.log(this.heroes);
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }

}
