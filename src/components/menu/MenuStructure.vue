<template>
  <div class="container">
    <router-link to="/"><span>Magno</span> Oliveira</router-link>
    <MenuNav />
  </div>
</template>

<script>
import "boxicons";
import MenuNav from "@/components/menu/MenuNav.vue";

export default {
  name: "MenuStructure",
  components: {
    MenuNav,
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  a {
    font-size: 1rem;
    position: relative;
    left: 1rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  a {
    font-size: 1.5rem;
    position: relative;
    left: 12vw;
  }
}

@media screen and (min-width: 801px) {
  a {
    font-size: 2rem;
    position: relative;
    left: 12vw;
  }
}

a {
  text-decoration: none;
  color: #a85710;
}

.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: calc(var(--doc-vh) * 6);
  width: 100vw;
  position: fixed;

  background-color: #51011d;
  z-index: 999;
}

span {
  font-weight: 100;
  color: #f7dfb2;
}
</style>
