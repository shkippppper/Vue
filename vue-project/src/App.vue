<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import token from './api/token'
import { authAjax, apiUrls } from './api/urls'


export default {
  components: {
    RouterView,
    HeaderDefault: Header,
    FooterDefault: Footer
  },
  data() {
    return {
      userData: {}
    }
  },
  mounted() {
    if (token.getToken() && this.$route.name !== 'logout') {
      this.getUser()
    }
  },
  methods: {
    getUser({
      route
    } = {}) {
      return authAjax()
        .get(apiUrls.userData)
        .then(response => {

          if (token.getToken()) {
            this.userData = response.data
          }

          if (route) {
            this.$router.push(route)
          }
        })
        .catch(e => {
          token.clearToken()
        })
    },
    clearUser({
      route
    } = {}) {
      this.userData = {}
      if (route) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<template>
  <div id="content">
    <HeaderDefault class="headR" />

    <main>
      <RouterView  :userData="userData" @updateUserData="getUser" @clearUserData="clearUser" />
    </main>

    <FooterDefault class="footR"/>
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

}




</style>

<style scoped>

  main{
    min-height: calc(100vh - 230px);
  }

  #content{
    position: relative;
    height: 100%;
    padding: 10px 10px 52px 10px;

  }

</style>