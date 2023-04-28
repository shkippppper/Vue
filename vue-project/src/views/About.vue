<template>
  <main>
    <section>
      <h2>About Us {{ $store.state.akaki }}</h2>
      <p>
        We are a team of Pokemon enthusiasts who love to experiment with
        different teams in the Pokemon games. We created this website to help
        other fans like us who want to quickly generate random teams for their
        playthroughs without having to spend time researching and selecting each
        individual Pokemon.
      </p>
      <p>
        Our team consists of experienced developers who have a passion for
        coding and designing websites that are both functional and visually
        appealing. We used the latest web technologies to create this website,
        and we are constantly updating it to ensure that it remains relevant and
        useful to our users.
      </p>
    </section>
  </main>
</template>

<style scoped>
/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #f2f2f2;
}

h1,
h2 {
  font-weight: bold;
  text-align: center;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  display: inline-block;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #222;
}

/* Header styles */
header {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin-right: 20px;
}

nav li:last-child {
  margin-right: 0;
}

nav a.active {
  color: #f44336;
  border-bottom: 2px solid #f44336;
}

main {
  max-width: 800px;
  margin: 15px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

section {
  margin-bottom: 20px;
}

section h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

section p {
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

textarea {
  resize: vertical;
  min-height: 100px;
  max-height: 400px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #f44336;
}

button[type="submit"] {
  align-self: flex-start;
}
</style>

<script>
  export default {


  }
// import { ajax, apiUrls } from '../api/urls.js'
// export default {
// data() {
//     return {
//         registrationData: {
//             first_name: '',
//             email: '',
//             company_name: '',

//             password: '123',
//             password2: '123',
//             last_name: 'user',
//             phone: '000000000',
//         },
//         errors: {}
//     }
// },
// methods: {
//     inputFirstName(e) {
//         this.registrationData.first_name = e.target.value
//     },
//     inputEmail(e) {
//         this.registrationData.email = e.target.value
//     },
//     inputMessage(e) {
//         this.registrationData.company_name = e.target.value
//     },
//     register() {
//         return ajax
//             .post(apiUrls.register, this.registrationData)
//             .then(response => {
//                 this.$emit('updateUserData', { route: { name: 'home' } })
//                 this.errors = {}
//             })
//             .catch(err => {
//                 this.errors = err.response.data
//             })
//     }
// }
// }
</script>
