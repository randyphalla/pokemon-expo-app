import { useEffect, useState } from "react";

const usePokemons = (url?: string) => {
  const [pokemons, setPokemons] = useState<any>();

  useEffect(() => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon';
    const offset = 0;
    const limit = 10;
    const url = `${baseURL}?offset=${offset}&limit=${limit}`;

    const fetchPokemons = async () => {
      const data = await fetch(url);
      const json = await data.json();
      let pokemonResults = json.results;
      var pokemonArray: any[] = [];

      for (const pokemon of pokemonResults) {
        const pokemonResultsData = await fetch(pokemon.url);
        const pokemonResultsJson = await pokemonResultsData.json();
        let pokemonData;
        pokemonData = {...pokemon, ...pokemonResultsJson};
        pokemonArray.push(pokemonData);
      };
      setPokemons(pokemonArray);
    };

    fetchPokemons().catch(err => console.error('fetching pokemons ', err));
  }, [pokemons]);

  return {
    pokemons,
  }
};

export default usePokemons;
