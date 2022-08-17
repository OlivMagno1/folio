<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "KingHarold";
  src: local("KingHarold"),
    url(@/medievalcat/assets/fonts/kingharold.ttf) format("TrueType");
}

* {
  margin: 0;
}

#app {
  font-family: KingHarold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 200vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
