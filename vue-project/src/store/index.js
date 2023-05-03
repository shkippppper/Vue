import { createStore } from "vuex";
import teamGenerator from "./modules/teamGenerator";
import authentication from "./modules/authentication";

const store = createStore({
  modules: {
    teamGenerator: teamGenerator,
    authentication: authentication,
  },

   state: {

  },

  mutations: {

  }
});

export default store;
