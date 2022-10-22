import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, concatMap, forkJoin, map, mergeAll, mergeMap, Observable, switchMap, tap } from 'rxjs';
import { PokemonServiceResponse } from 'src/app/models/pokemons-api-models/pokemon-api-models';
import { pokemonApiInternalPokemon, pokemonApiResult } from 'src/app/models/pokemons-api-models/pokemon-list-api-models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  private getPokemon(apiResponse: pokemonApiResult):pokemonApiInternalPokemon[]{
    return apiResponse.results
  }

  getPokemonInfoTest(pokemonList:pokemonApiInternalPokemon[]): any{
    return forkJoin( 
     pokemonList.map(pokemon => {
         return this.httpClient.get(pokemon.url)
      }))
  }

  getPokemonInfo= (pokemonList:pokemonApiInternalPokemon[]): Observable<PokemonServiceResponse[]>=>{
    return forkJoin( 
     pokemonList.map(pokemon => {
         return this.httpClient.get<PokemonServiceResponse>(pokemon.url)
      }))
  }



  getInitialPokemonList():Observable<PokemonServiceResponse[]>{

    return this.httpClient.get<pokemonApiResult>('https://pokeapi.co/api/v2/pokemon').pipe(
          map(this.getPokemon),
         // mergeMap(pokemonList => this.getPokemonInfo(pokemonList))
          mergeMap(this.getPokemonInfo)
    )

  }

}
