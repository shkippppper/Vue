<template>
  <div class="all">
    <div class="container">
      <div
        class="form-container"
        :class="{ active: isLoginActive, inactive: !isLoginActive }"
      >
        <h2 class="form-title">Login</h2>
        <form @submit.prevent="submitLoginForm" class="form">
          <label class="form-label">
            Email:
            <input 
              type="email" 
              v-model="email" 
              class="form-input" 
              required 
              />
          </label>
          <label class="form-label">
            Password:
            <input
              type="password"
              v-model="password"
              class="form-input"
              required
            />
          </label>

          <button type="submit" class="form-button">Login</button>
          <p>Not a member? <strong @click="toggleActive">Sign Up</strong></p>
        </form>
      </div>
    </div>

    <div class="container">
      <div
        class="form-container"
        :class="{ active: !isLoginActive, inactive: isLoginActive }"
      >
        <h2 class="form-title">Register</h2>
        <form
          @submit.prevent="submitRegisterForm" class="form">
          <label class="form-label">
            First Name:
            <input
              type="text"
              v-model="registerFirstName"
              class="form-input"
              required
            />
            Second Name:
            <input
              type="text"
              v-model="registerSecondName"
              class="form-input"
              required
            />
          </label>
          <label class="form-label">
            Email:
            <input
              type="email"
              v-model="registerEmail"
              class="form-input"
              required
            />
          </label>
          <label class="form-label">
            Password:
            <input
              type="password"
              v-model="registerPassword"
              class="form-input"
              required
            />
          </label>
          <button type="submit" class="form-button">Register</button>
          <p>
            Already a member? <strong @click="toggleActive">Sign In</strong>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import router from "../router"

export default {
  data() {
    return {
      isLoginActive: true,
      email: "", //username
      password: "",
      registerEmail: "",
      registerPassword: "",
      registerFirstName: "",
      registerSecondName: "",
    };
  },
  methods: {
    toggleActive() {
      if (this.isLoginActive) {
        this.isLoginActive = false;
      } else {
        this.isLoginActive = true;
      }
    },

    ...mapActions("authentication", ["login"]),
    ...mapActions("authentication", ["register"]),

    submitLoginForm() {
      const loginData = {
        email: this.email,
        password: this.password,
        username: this.email,
      };
      this.login({loginData, router: this.$router });
    },

    submitRegisterForm() {
      const registerData = {
        registerEmail: this.registerEmail,
        registerPassword: this.registerPassword,
        registerFirstName: this.registerFirstName,
        registerSecondName: this.registerSecondName,
      };
      this.register({registerData, router: this.$router });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.active {
  position: absolute;
  top: 200px;
  transform: translate(0px);
}

.inactive {
  position: absolute;
  top: 200px;
  transform: translate(-1000px);
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
  transition: transform 0.2s ease-in;
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
  transition: all 0.2s ease-in;
}

.form-button:hover {
  background-color: #a52424;
}

p {
  font-size: 1.2rem;
  color: #e94b3c;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
  margin: 20px;
}

p strong {
  all: unset;
  color: black;
  cursor: pointer;
  transition: color 0.1s ease;
}

p strong:hover {
  color: #e94b3c;
}
</style>
