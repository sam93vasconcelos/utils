<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/calculadoras">Calculadoras</router-link>
  </div>
</template>

<style scoped>
  #nav {
    width: 100%;
    background-color: rgb(91, 182, 189);
    height: 40px;
    box-shadow: 0 5px 10px gray;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  a {
    color: black;
    margin: 0 10px;
  }
</style>