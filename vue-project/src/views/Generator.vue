<template>
    <main>
        <SinglePokemonGenerator />
    </main>
</template>

<style scoped>

main{
    height: calc(100vh - 210px);

}

</style>

<script>

import SinglePokemonGenerator from '../components/generate/SinglePokemonGenerator.vue'

export default {
  components: {
    SinglePokemonGenerator
  },
  
}


</script>