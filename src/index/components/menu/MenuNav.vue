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

  gap: 16px;
  width: 30vw;
  padding: 30px;
}

nav a {
  font-size: 1.25em;
  font-weight: 100;
  color: #f7dfb2;
  text-decoration: none;
  transition: 0.2s;
}

nav a:hover {
  transform: scale(1.1);
  color: #a85710;
}

nav a.router-link-exact-active {
  color: #a85710;
}
</style>
