import { createStore } from "vuex";
import teamGenerator from "./modules/teamGenerator";
import authentication from "./modules/authentication";
import singlePokemonGenerator from "./modules/singlePokemonGenerator";
import category from "./modules/category";

const store = createStore({
  modules: {
    teamGenerator: teamGenerator,
    authentication: authentication,
    singlePokemonGenerator: singlePokemonGenerator,
    category: category,
  },

   state: {

  },

  mutations: {

  }
});

export default store;
