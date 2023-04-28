import axios from "axios";

export default {
  namespaced: true,
  state: {
    pokemonTeam: [],
    totalPower: 0,
    showTotalPower: false,
  },
  mutations: {
    setPokemonTeam(state, pokemonTeam) {
      state.pokemonTeam = pokemonTeam;
    },
    addPokemon(state, pokemon) {
      state.pokemonTeam.push(pokemon);
    },
    setTotalPower(state, totalPower) {
      state.totalPower = totalPower;
    },
    setShowTotalPower(state, showTotalPower) {
      state.showTotalPower = showTotalPower;
    },
  },
  actions: {
    createPokemonTeam({ commit, state }) {
      const totalPokemon = 1010;
      const pokemonTeam = [];

      for (let index = 0; index < 6; index++) {
        const randomNum = Math.floor(Math.random() * totalPokemon) + 1;

        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
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

            commit("addPokemon", pokemon);
            commit("setTotalPower", state.totalPower + pokemonPower);
            commit("setShowTotalPower", true);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      commit("setPokemonTeam", pokemonTeam);
    },
  }
};
