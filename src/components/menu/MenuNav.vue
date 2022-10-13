<template>
  <nav>
    <router-link to="/">Sobre</router-link>
    <router-link to="/folio">Projetos</router-link>
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
@media screen and (max-width: 600px) {
  nav {
    position: relative;
  }

  nav a.router-link-exact-active {
    display: none;
  }

  nav a {
    font-size: 0.8rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  nav {
    position: relative;
    right: 12vw;
  }

  nav a {
    font-size: 1rem;
  }
}

@media screen and (min-width: 801px) {
  nav {
    position: relative;
    right: 12vw;
  }

  nav a {
    font-size: 1.25rem;
  }
}

nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  height: calc(var(--doc-vh) * 6);
  font-weight: 100;

  text-decoration: none;
  color: #a85710;
  background-color: #51011d;
  transition: 0.2s;
}

nav a:hover {
  color: #f7dfb2;
  background-color: #a85710;
}

nav a.router-link-exact-active {
  color: #f7dfb2;
}

nav a.router-link-exact-active:hover {
  color: #51011d;
  background-color: #a85710;
}
</style>
