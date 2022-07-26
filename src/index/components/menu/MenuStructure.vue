<template>
  <div class="container">
    <h1><span>Magno</span> Oliveira</h1>
    <MenuNav />
    <MenuButtonBar />
  </div>
</template>

<script>
import "boxicons";
import MenuNav from "@/index/components/menu/MenuNav.vue";
import MenuButtonBar from "./MenuButtonBar.vue";

export default {
  name: "MenuStructure",
  components: {
    MenuNav,
    MenuButtonBar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  height: 12vh;
  width: 100vw;
  position: fixed;

  background-color: #2f3e46;
}

span {
  font-weight: 100;
  color: #cad2c5;
}

h1 {
  color: #84a98c;
  cursor: default;
}
</style>
