<template>
  <nav>
    <router-link to="/index/">About me</router-link>
    <router-link to="/index/folio">Portfolio</router-link>
    <router-link to="/index/skills">Conhecimentos</router-link>
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
  background-color: #252422;

  gap: 16px;
  width: 30vw;
  padding: 30px;
}

nav a {
  font-size: 1.25em;
  font-weight: 100;
  color: #c2b97f;
  text-decoration: none;
  transition: 0.2s;
}

nav a:hover {
  transform: scale(1.1);
  color: #f4f4f4;
}

nav a.router-link-exact-active {
  color: #f4f4f4;
}
</style>
