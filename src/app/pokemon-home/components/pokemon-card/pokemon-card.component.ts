import { Component, Input, OnInit } from '@angular/core';
import { PokemonServiceResponse } from 'src/app/models/pokemons-api-models/pokemon-api-models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }


  @Input()
  pokemon!: PokemonServiceResponse;

  ngOnInit(): void {
  }

}
