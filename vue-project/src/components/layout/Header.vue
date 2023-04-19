<template>
  <header>
    <div class="logo">
      <router-link :to="{ name: 'trueRandom' }">
        <img
          src="../../assets/Pokeball.png"
          alt="Random Pokemon Team Generator Logo"
        />
      </router-link>
    </div>
    <h1>RPTG</h1>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'generator' }">Generate</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'authentication' }">Login</router-link></li>
      </ul>
    </nav>

  </header>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style></style>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e94b3c;
  color: #ffffff;
  padding: 1rem;
  border-radius: 20px;
}

.logo img {
  display: inline-block;
  height: 4rem;
  margin-right: 1rem;
  transform: rotate(-45deg);
}

.logo h1 {
  font-size: 2rem;
  margin-right: auto;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 1rem;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  background-color: #ffffff;
  color: #e94b3c;
}



</style>
