<template>
  <div class="container">
    <router-link to="/index"><span>Magno</span> Oliveira</router-link>
    <MenuNav />
  </div>
</template>

<script>
import "boxicons";
import MenuNav from "@/index/components/menu/MenuNav.vue";

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
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  a {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 801px) {
  a {
    font-size: 2rem;
  }
}

a {
  text-decoration: none;
  color: #a85710;
  margin: 0 1rem;
}

.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  width: 100vw;
  position: fixed;

  background-color: #51011d;
}

span {
  font-weight: 100;
  color: #f7dfb2;
}
</style>
