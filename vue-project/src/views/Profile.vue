<template>
    <div class="profile-container">
      <div class="profile-header">
        <h1 class="profile-title">{{ username }}</h1>
        <img src='../assets/ash-won-victory-.jpg' :alt="username" class="profile-avatar" style="background-position: center; background-size: cover; background-repeat: no-repeat;">
      </div>
      <div class="profile-content">
        <div class="profile-item">
          <div class="profile-label">Team Size:</div>
          <div class="profile-value">{{ teamSize }}</div>
        </div>
        <div class="profile-item">
          <div class="profile-label">Favorite Type:</div>
          <div class="profile-value">{{ favoriteType }}</div>
        </div>
        <div class="profile-item">
          <div class="profile-label">Favorite Pokemon:</div>
          <div class="profile-value">{{ favoritePokemon }}</div>
        </div>
      </div>
      <router-link :to="{ name: 'logout' }">Log Out</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'Ash Ketchum',
        avatarUrl: '../assets/ash-won-victory-.jpg',
        teamSize: 6,
        favoriteType: 'Electric',
        favoritePokemon: 'Pikachu'
      };
    }
  
  };
  </script>
  
  <style scoped>


  .profile-container {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  
  .profile-title {
    margin: 0;
  }
  
  .profile-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .profile-content {
    display: flex;
    flex-direction: column;
  }
  
  .profile-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .profile-label {
    font-weight: bold;
    margin-right: 1rem;
  }
  
  .profile-value {
    font-weight: normal;
    color: #444;
  }

  a{
    position: absolute;
    right: 30px;
    color: #999999;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  a:hover{
    color: #e94b3c;
  }
  
  </style>