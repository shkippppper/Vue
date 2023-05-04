import { createStore } from "vuex";
import teamGenerator from "./modules/teamGenerator";
import authentication from "./modules/authentication";
import singlePokemonGenerator from "./modules/singlePokemonGenerator";

const store = createStore({
  modules: {
    teamGenerator: teamGenerator,
    authentication: authentication,
    singlePokemonGenerator: singlePokemonGenerator,
  },

   state: {

  },

  mutations: {

  }
});

export default store;
