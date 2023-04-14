<template>
  <footer>
    <p>&copy; 2023 Random Pokemon Generator. All rights reserved.</p>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'trueRandom' }">True Random</router-link></li>
        <li><router-link :to="{ name: 'terms' }">Terms of Use</router-link></li>
        <li><router-link :to="{ name: 'about' }">Contact Us</router-link></li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
* {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
footer {
  background-color: #f2f2f2;
  color: #999999;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
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
  color: #999999;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  color: #e94b3c;
}
</style>
