<template>
  <div class="pokemon-generator">
    <div class="generator-content">
      <div class="team">
        <div class="card">
          <div class="id">#{{ pokemon.pokemonId }}</div>
          <div
            class="image"
            :style="{
              backgroundImage: 'url(' + pokemon.pokemonSprite + ')',
              backgroundColor: '#' + pokemonTypes[pokemon.pokemonType],
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="name">{{ pokemon.pokemonName }}</div>
          <div class="type">Type - {{ pokemon.pokemonType }}</div>
          <div class="power">PP - {{ pokemon.pokemonPower }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      pokemonTypes: {
        normal: "b7b7a9",
        fire: "eb6e4b",
        water: "72a6fc",
        electric: "f6d660",
        grass: "9ed275",
        ice: "97d1fd",
        fighting: "b57260",
        poison: "ac72a7",
        ground: "dcc775",
        flying: "9fa6fc",
        psychic: "ec79a7",
        bug: "baaf71",
        rock: "bfb57b",
        dragon: "7e7cc3",
        ghost: "8a7cee",
        dark: "836d5d",
        steel: "acacbc",
        fairy: "e5abef",
      },
    };
  },
  computed: {
    ...mapState("singlePokemonGenerator", ['pokemon']),
  },
  methods: {
    ...mapActions("singlePokemonGenerator", ["createPokemon"]),
  },
  mounted() {
    this.createPokemon()
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

body {
  background-image: linear-gradient(to right, #caffd3, #f9ffc9);
}


.card {
  text-align: center;
  width: 200px;
  height: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  border-radius: 20px;
  background-color: white;
  padding: 1px;
}

.card .image {
  margin: 10px 25px;
  border-radius: 20px;
  background-color: rgba(215, 215, 215, 0.832);
  width: 150px;
  height: 150px;
}

.card .id {
  margin: 15px;
  font-weight: bolder;
}

.card .id-pre {
  width: 120px;
  height: 19px;
  margin: 15px 40px;
  background-color: rgba(215, 215, 215, 0.5);
  border-radius: 5px;
}

.card .name {
  margin: 10px;
  font-weight: bold;
}

.card .name-pre {
  width: 140px;
  height: 19px;
  margin: 10px 30px;
  background-color: rgba(215, 215, 215, 0.5);
  border-radius: 5px;
}

.card .type {
  margin: 10px;
  text-transform: capitalize;
}

.card .type-pre {
  width: 120px;
  height: 19px;
  margin: 10px 40px;
  background-color: rgba(215, 215, 215, 0.5);
  border-radius: 5px;
}

.card .power {
  margin: 10px;
  text-transform: capitalize;
}

.card .power-pre {
  width: 100px;
  height: 19px;
  margin: 10px 50px;
  background-color: rgba(215, 215, 215, 0.5);
  border-radius: 5px;
}

.total-power {
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  padding: 8px;
}

.invisible {
  display: none;
}
</style>
