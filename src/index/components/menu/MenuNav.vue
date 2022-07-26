<template>
  <nav>
    <router-link to="/index">Sobre</router-link>
    <router-link to="/index/folio">Portfolio</router-link>
  </nav>
</template>

<script>
export default {
  name: "MenuNav",
};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  background-color: #2f3e46;

  gap: 16px;
  width: 30vw;
  padding: 30px;
}

nav a {
  font-size: 1.25em;
  font-weight: 100;
  color: #84a98c;
  text-decoration: none;
  transition: 0.2s;
}

nav a:hover {
  transform: scale(1.1);
  color: #cad2c5;
}

nav a.router-link-exact-active {
  color: #cad2c5;
}
</style>
