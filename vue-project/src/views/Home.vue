<template>
  <BaseWrapper>
    <div class="home">
      <main>
        <h1 ref="welcomeMessage">
          Welcome to the Random Pokemon Team Generator!
        </h1>
        <p>
          Generate a random team of six Pokemon for your next playthrough with
          just one click!
        </p>
        <router-link to="/random-team-generator"
          ><button>Generate Now</button></router-link
        >
      </main>
    </div>
  </BaseWrapper>
</template>

<script>
import BaseWrapper from "../components/layout/BaseWrapper.vue";
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #333;
  color: #fff;
  padding: 0 50px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
}

.nav-links a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

/* main content styles */
main {
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 365px);
  padding: 50px;
  background-color: #f2f2f2;
  border-radius: 20px;
}

h1 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 30px;
}

button {
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #fff;
  color: #333;
}

/* footer styles */
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #333;
  color: #fff;
}
</style>
