<template>
  <div>
    <MenuStructure />
    <router-view />
  </div>
</template>

<script>
import "boxicons";
import MenuStructure from "./components/menu/MenuStructure.vue";

//vh fix
const documentHeight = () => {
  const doc = document.documentElement;
  var vh = window.innerHeight * 0.01;
  doc.style.setProperty("--doc-vh", `${vh}px`);
};

window.addEventListener("resize", documentHeight);
documentHeight();
//End vh fix

export default {
  name: "App",
  components: {
    MenuStructure,
  },
};
</script>

<style>
:root {
  --doc-vh: 0;
}

* {
  margin: 0;
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
  height: var(--doc-height);
}
</style>
