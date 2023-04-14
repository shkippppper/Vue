const app =  Vue.createApp({
  data(){
    return{
      counter: 0,
      link: "https://vuejs.org/guide/quick-start.html#using-vue-from-cdn"
    };
  },

  methods:{
    addCounter(num){
      this.counter +=num;
    },
    
    reduceCounter(num){
      this.counter -=num;
    },

    charactersCount(event, num){
      this.counter = event.target.value.length+num;
    }
  }



});

app.mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
