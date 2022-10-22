export type pokemonApiResult= {
    count:    number;
    next:     string;
    previous: null;
    results:  pokemonApiInternalPokemon[];
   }
   
   export type pokemonApiInternalPokemon ={
    name: string;
    url:  string;
   }
   