import { Component, OnInit } from '@angular/core';
import { PokemonServiceResponse } from '../models/pokemons-api-models/pokemon-api-models';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})
export class PokemonHomeComponent implements OnInit {

  pokemonList :PokemonServiceResponse[] =[]

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
        this.pokemonService.getInitialPokemonList().subscribe(pokemonList =>{

            this.pokemonList= pokemonList;
        })
        
  }

}
