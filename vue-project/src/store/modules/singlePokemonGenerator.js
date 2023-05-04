import axios from "axios";

export default {
  namespaced: true,
  state: {
    pokemon: {},
  },
  mutations: {
    setPokemon(state, pokemon) {
      state.pokemon = pokemon;
    },
  },
  actions: {
    createPokemon({ commit, state }) {
      const totalPokemon = 1010;
      const today = new Date();
      let randomNumber =
        today.getFullYear() * today.getMonth() * today.getDate();
      randomNumber %= totalPokemon;

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        .then((response) => {
          const data = response.data;
          const pokemonId = data.id;
          const pokemonName = data.name;
          const pokemonType = data.types[0].type.name;
          const pokemonSprite = data.sprites.front_default;
          const pokemonPower = data.stats[0].base_stat;
          const pokemon = {
            pokemonId,
            pokemonName,
            pokemonType,
            pokemonSprite,
            pokemonPower,
          };
          commit("setPokemon", pokemon);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
