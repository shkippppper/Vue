<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: {
    RouterView,
    HeaderDefault: Header,
    FooterDefault: Footer
  }
}


</script>

<template>
  <div id="content">
    <HeaderDefault class="headR" />

    <main>
      <RouterView />
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
    padding: 10px;
  }

</style>