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
export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    }
  },
  methods: {
    login() {
      // Implement your login logic here
      console.log('Logging in with email:', this.loginEmail, 'and password:', this.loginPassword);
      // After successful login, redirect to dashboard or home page
    },
    register() {
      // Implement your registration logic here
      console.log('Registering with name:', this.registerName, 'email:', this.registerEmail, 'and password:', this.registerPassword);
      // After successful registration, redirect to login page or automatically log in the user
    }
  }
}
</script>
