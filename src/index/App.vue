<template>
  <div>
    <div class="menuDesktop">
      <MenuStructure />
    </div>
    <router-view />
  </div>
</template>

<script>
import "boxicons";
import MenuStructure from "./components/menu/MenuStructure.vue";

export default {
  name: "App",
  components: {
    MenuStructure,
  },
};
</script>

<style>
* {
  margin: 0;
}

@media screen and (max-width: 960px) {
  .menuDesktop {
    visibility: hidden;
  }
}

@media screen and (min-width: 961px) {
  .menuDesktop {
    visibility: visible;
  }
}

@font-face {
  font-family: Archivo;
  src: url("@/index/assets/fonts/Archivo-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: Archivo;
  src: url("@/index/assets/fonts/Archivo-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: Archivo;
  src: url("@/index/assets/fonts/Archivo-Light.ttf");
  font-weight: 100;
}

#app {
  font-family: Archivo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #037971;
}
</style>
