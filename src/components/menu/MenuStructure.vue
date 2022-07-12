<template>
  <div class="container">
    <h1><span>Magno</span> Oliveira</h1>
    <MenuNav />
    <MenuButtonBar />
  </div>
</template>

<script>
import "boxicons";
import MenuNav from "@/components/menu/MenuNav.vue";
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

  height: 10vh;
  width: 100vw;
  position: fixed;
  background-color: #252422;
}

span {
  font-weight: 100;
  color: #afc2d5;
}

h1 {
  color: #f4f4f4;
}
</style>
