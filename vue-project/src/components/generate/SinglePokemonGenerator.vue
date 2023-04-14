<template>
    <div class="pokemon-generator">
      <div class="generator-header">
        <button class="create" @click="createPokemon">Generate Team</button>
      </div>
      <div class="generator-content">
        <div class="team">
          <div v-for="(pokemon, index) in pokemonTeam" :key="index" class="card">
            <div class="id">#{{pokemon.id}}</div>
            <div class="image" :style="{ backgroundImage: 'url(' + pokemon.spriteURL + ')', backgroundColor: '#' + pokemonTypes[pokemon.type], backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } "></div>
            <div class="name">{{pokemon.name}}</div>
            <div class="type">Type - {{pokemon.type}}</div>
            <div class="power">PP - {{pokemon.power}}</div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pokemonTypes: {
        normal: 'b7b7a9',
        fire: 'eb6e4b',
        water: '72a6fc',
        electric: 'f6d660',
        grass: '9ed275',
        ice: '97d1fd',
        fighting: 'b57260',
        poison: 'ac72a7',
        ground: 'dcc775',
        flying: '9fa6fc',
        psychic: 'ec79a7',
        bug: 'baaf71',
        rock: 'bfb57b',
        dragon: '7e7cc3',
        ghost: '8a7cee',
        dark: '836d5d',
        steel: 'acacbc',
        fairy: 'e5abef',
      },
      pokemonTeam: [],
      showTotalPower: false,
      totalPower: 0,
      totalPokemon: 1010,
    }
  },
  methods: {
    createPokemon() {
      this.showTotalPower = false
      this.totalPower = 0
      this.pokemonTeam = []
    //   const pokemonRequests =
      for (let index = 0; index < 6; index++) {
        const randomNum = Math.floor(Math.random() * this.totalPokemon) + 1
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
          .then((response) => {
            const data = response.data
            const pokemonId = data.id
            const pokemonName = data.name
            const pokemonType = data.types[0].type.name
            const pokemonSprite = data.sprites.front_default
            const pokemonPower = data.stats[0].base_stat
            this.createCard(pokemonId, pokemonName, pokemonType, pokemonSprite, pokemonPower)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    createCard(id, name, type, spriteURL, power) {
      const pokemon = { id, name, type, spriteURL, power }
      this.pokemonTeam.push(pokemon)
      this.totalPower += power
      this.showTotalPower = true
    },
  },
}
</script>


<style scoped>*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body{
    background-image: linear-gradient(to right, #caffd3, #f9ffc9);

}

.team{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex-direction: row;
    flex-wrap: wrap;
}


.card{
    text-align: center;
    width: 200px;
    height: 300px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: 50px;
    border-radius: 20px;
    background-color: white;
}

.card .image{
    margin: 10px 25px;
    border-radius: 20px;
    background-color: rgba(215, 215, 215, 0.832);
    width: 150px;
    height: 150px;
}

.card .id{
    margin: 15px;
    font-weight: bolder;
}

.card .id-pre{
    width: 120px;
    height: 19px;
    margin: 15px 40px;
    background-color: rgba(215, 215, 215, 0.5);
    border-radius: 5px;

}

.card .name{
    margin: 10px;
    font-weight: bold;
}

.card .name-pre{
    
    width: 140px;
    height: 19px;
    margin: 10px 30px;
    background-color: rgba(215, 215, 215, 0.5);
    border-radius: 5px;

}

.card .type{
    margin: 10px;
    text-transform: capitalize;
}

.card .type-pre{
    
    width: 120px;
    height: 19px;
    margin: 10px 40px;
    background-color: rgba(215, 215, 215, 0.5);
    border-radius: 5px;

}


.card .power{
    margin: 10px;
    text-transform: capitalize;
}

.card .power-pre{
    
    width: 100px;
    height: 19px;
    margin: 10px 50px;
    background-color: rgba(215, 215, 215, 0.5);
    border-radius: 5px;

}


button {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    padding: 8px;
}

.total-power {
    position: fixed;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    padding: 8px;
}

.invisible{
    display: none;
}
</style>
