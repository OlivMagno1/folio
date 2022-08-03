<template>
  <div class="container">
    <router-link to="/index"><span>Magno</span> Oliveira</router-link>
    <div class="showPages">
      <MenuNav />
    </div>
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
@media screen and (max-width: 960px) {
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .showPages {
    display: none;
  }

  a {
    text-decoration: none;
    color: #a85710;
    font-size: 1.2rem;
    margin-left: 2vw;
  }
}

@media screen and (min-width: 961px) {
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .showPages {
    display: block;
  }

  a {
    text-decoration: none;
    color: #a85710;
    font-size: 2rem;
    margin: 0 1rem;
  }
}

.container {
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
