<template>
  <div class="container">
    <div class="form-container">
      <h2 class="form-title">Login</h2>
      <form @submit.prevent="login" class="form">
        <label class="form-label">
          Email:
          <input type="email" v-model="loginEmail" class="form-input" required>
        </label>
        <label class="form-label">
          Password:
          <input type="password" v-model="loginPassword" class="form-input" required>
        </label>

        <button type="submit" class="form-button">Login</button>
      </form>

      <h2 class="form-title">Register</h2>
      <form @submit.prevent="register" class="form">
        <label class="form-label">
          Name:
          <input type="text" v-model="registerName" class="form-input" required>
        </label>
        <label class="form-label">
          Email:
          <input type="email" v-model="registerEmail" class="form-input" required>
        </label>
        <label class="form-label">
          Password:
          <input type="password" v-model="registerPassword" class="form-input" required>
        </label>
        <!-- <span v-if="Object.keys(errors).length > 0">{{ errors }}</span> -->
        <button type="submit" class="form-button">Register</button>
      </form>
    </div>
  </div>
</template>

<style>
.container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: #e94b3c;
  margin-bottom: 2rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 500px;
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
  color: #e94b3c;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.form-label {
  font-size: 1.2rem;
  color: #e94b3c;
  margin-bottom: 0.5rem;
  text-align: left;
  width: 100%;
}

.form-input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid #e94b3c;
  width: calc(500px - 20px);
  margin-bottom: 1rem;
}

.form-button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #e94b3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in
}

.form-button:hover {
background-color: #a52424;
}


</style>

<script>
import {ajax, apiUrls} from "../api/urls" 
import token from '../api/token'

export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      loginDetails : {
        email : "",
        password : "",
        // username : "asd1@asd.com",
      },
      registerDetails : {
        regName: "",
        regEmail: "",
        regPassword: ""
      },

      errors: {}

    }
    


  },
  methods: {
    
    login() {

      this.loginDetails.email = this.loginEmail;
      this.loginDetails.password = this.loginPassword

      return ajax
      .post(apiUrls.login, this.loginDetails)
      .then(response => {
        token.setToken(response.data.token)

        const route = this.$route.query.nextUrl || { name: 'home' }

        this.$emit('updateUserData', { route: route })

      })

    },
    register() {

      this.registerDetails.regName = this.registerName;
      this.registerDetails.regEmail = this.registerEmail;
      this.registerDetails.regPassword = this.registerPassword;

      this.registerDetails.first_name = this.registerDetails.regName;
      this.registerDetails.email = this.registerDetails.regEmail;
      this.registerDetails.password = this.registerDetails.regPassword;
      this.registerDetails.password2 = this.registerDetails.regPassword;
      this.registerDetails.company_name= 'Pok',
      this.registerDetails.last_name = 'Brawler';
      this.registerDetails.phone = '000000000';


      return ajax
      .post(apiUrls.register, this.registerDetails)
      .then(response => {
        token.setToken(response.data.token)

        const route = this.$route.query.nextUrl || { name: 'home' }

        this.$emit('updateUserData', { route: route })
        this.errors = {}
      })
      .catch(err => {
        this.errors = err.response.data
      })
    }
  }
}
</script>
