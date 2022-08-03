<template>
  <div class="container">
    <h1><span>Magno</span> Oliveira</h1>
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

  h1 {
    color: #a85710;
    cursor: default;
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

  h1 {
    color: #a85710;
    cursor: default;
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
