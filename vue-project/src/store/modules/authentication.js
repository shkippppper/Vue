import { ajax, apiUrls } from "../../api/urls";
import token from "../../api/token";
import router from '../../router';

export default {
  namespaced: true,

  state: {
    accountDetails: {},
  },
  mutations: {
    setAccountDetails(state, details) {
      state.accountDetails = details;
    },
  },
  actions: {
    login({ commit }, {loginData, router}) {
      const { email, password, username } = loginData;
      const loginDetails = { email, password, username};

      return ajax
        .post(apiUrls.login, loginDetails)
        .then((response) => {
          token.setToken(response.data.token);
          router.push('/profile');
        })
        .catch((err) => {
          console.log(err);
        });

    },
    register({ commit }, {registerData, router}) {
      const { registerEmail, registerPassword, registerFirstName, registerSecondName } = registerData;
      const registerDetails = { 
        email: registerEmail, 
        password: registerPassword,
        username: registerEmail,
        first_name: registerFirstName,
        last_name: registerSecondName,
        password2: registerPassword,
        phone: "000000000",
        company_name: "Pok",

      };

      return ajax
        .post(apiUrls.register, registerDetails)
        .then((response) => {
          token.setToken(response.data.token);
          router.push('/profile');
          commit('setAccountDetails', registerDetails);

        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};
