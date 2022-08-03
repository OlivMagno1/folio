<template>
  <nav>
    <router-link to="/index">Sobre</router-link>
    <router-link to="/index/folio">Projetos</router-link>
    <MenuButtonBar />
  </nav>
</template>

<script>
import MenuButtonBar from "./MenuButtonBar.vue";
export default {
  name: "MenuNav",
  components: {
    MenuButtonBar,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;

  width: 20vw;
}

nav a {
  height: 6vh;
  font-size: 1.25em;
  font-weight: 100;
  background-color: #51011d;
  color: #a85710;
  text-decoration: none;
  transition: 0.2s;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;
}

nav a:hover {
  background-color: #a85710;
  color: #f7dfb2;
}

nav a.router-link-exact-active {
  color: #f7dfb2;
}

nav a.router-link-exact-active:hover {
  background-color: #a85710;
  color: #51011d;
}
</style>
