<template>
  <nav>
    <router-link to="/cafe/">Home</router-link>
    <router-link to="/cafe/expresso">Expresso</router-link>
    <router-link to="/cafe/latte">Latte</router-link>
    <router-link to="/cafe/frappuccino">Frappuccino</router-link>
  </nav>
</template>

<script></script>

<style scoped>
@media screen and (min-width: 601px) and (max-width: 800px) {
  nav a {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 801px) {
  nav a {
    font-size: 1rem;
  }
}

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  width: 50vw;
  height: 8.5vh;
  position: fixed;
  left: 25vw;
  top: 0;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #767676;

  transition: 0.2s;
}

nav a:hover {
  transform: scale(1.1);
  color: #333;
}

nav a.router-link-exact-active {
  color: #333;
}
</style>
