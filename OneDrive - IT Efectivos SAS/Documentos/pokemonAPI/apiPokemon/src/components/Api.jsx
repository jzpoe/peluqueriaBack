

import { useEffect, useState } from "react";

const Api = () => {
  const [pokemones, setPokemones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemones = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const data = await response.json();

        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            return {
              name: pokemon.name,
              imageUrl: pokemonData.sprites.front_default,
            };
          })
        );

        setPokemones(pokemonData);
      } catch (error) {
        console.error("Error al cargar los pokemones:", error);
      } finally {
        setLoading(false); // Establecer loading en false cuando se complete la carga
      }
    };

    getPokemones(); // Llama a la función getPokemones cuando el componente se monta
  }, []); // El segundo argumento [] indica que useEffect se ejecutará solo una vez al montar el componente

  const filteredPokemons = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="logoPokemon">
        <img src="./src/img/pokemon.png" alt=""></img>
        <h1 className="pokemon-title">Pokémon</h1>
      </div>
      <div>
        <input className="inputSearch"
          type="text"
          placeholder="Buscar Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="loadingPokebola">
        <img src="./src/img/pokebola.png" alt="cargando pokemones" />
        </div>
        
      ) : (
        <div className="pokemon-container">
          {filteredPokemons.map((pokemon, index) => (
            <div key={index} className="pokemon-card">
              <img src={pokemon.imageUrl} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Api;
