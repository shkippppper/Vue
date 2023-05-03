import { ajax, apiUrls } from "../../api/urls";
import token from "../../api/token";

export default {
  namespaced: true,
  state: {
    loginEmail: "",
    loginPassword: "",
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    loginDetails: {
      email: "",
      password: "",
      username: "asd1@asd.com",
    },
    registerDetails: {
      regName: "",
      regEmail: "",
      regPassword: "",
    },
    errors: {},
  },
  mutations: {
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
    setRegisterName(state, name) {
      state.registerName = name;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginDetails(state) {
      state.loginDetails.email = state.loginEmail;
      state.loginDetails.password = state.loginPassword;
    },
    setRegisterDetails(state) {
      state.registerDetails.regName = state.registerName;
      state.registerDetails.regEmail = state.registerEmail;
      state.registerDetails.regPassword = state.registerPassword;
      state.registerDetails.first_name = state.registerDetails.regName;
      state.registerDetails.email = state.registerDetails.regEmail;
      state.registerDetails.password = state.registerDetails.regPassword;
      state.registerDetails.password2 = state.registerDetails.regPassword;
      state.registerDetails.company_name = "Pok";
      state.registerDetails.last_name = "Brawler";
      state.registerDetails.phone = "000000000";
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
  },
  actions: {
    login({ commit, state, route }) {
      commit("setLoginDetails");

      return ajax
        .post(apiUrls.login, state.loginDetails)
        .then((response) => {
          token.setToken(response.data.token);

          commit("setErrors", {});
          //   return route;

        })
        .catch((err) => {
          console.log(err);
        });
    },
    register({ commit, state }) {
      commit("setRegisterDetails");

      return ajax
        .post(apiUrls.register, state.registerDetails)
        .then((response) => {
          token.setToken(response.data.token);

          // return route;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    loginEmail: (state) => state.loginEmail,
    loginPassword: (state) => state.loginPassword,
    registerName: (state) => state.registerName,
    registerEmail: (state) => state.registerEmail,
    registerPassword: (state) => state.registerPassword,
    errors: (state) => state.errors,
  },
};
