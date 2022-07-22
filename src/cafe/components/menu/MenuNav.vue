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
  justify-content: space-between;

  padding: 15px;
  line-height: 3em;
  width: 25vw;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
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
