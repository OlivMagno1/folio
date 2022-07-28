<template>
  <div class="center">
    <nav>
      <router-link to="/cafe/">Home</router-link>
      <router-link to="/cafe/expresso">Expresso</router-link>
      <router-link to="/cafe/capuccino">Capuccino</router-link>
      <router-link to="/cafe/frapuccino">Frapuccino</router-link>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
@media screen and (max-width: 1280px) {
  nav {
    width: 50vw;
  }
}

@media screen and (min-width: 1281px) {
  nav {
    width: 25vw;
  }
}

.center {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  width: 60vw;
  position: fixed;
  left: 15vw;
  top: 0;
}
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  padding: 1rem;
  line-height: 3rem;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
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
