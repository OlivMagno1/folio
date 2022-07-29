<template>
  <div class="MenuBarDesktop">
    <button class="emptyButton">
      <i class="fa-solid fa-mug-saucer"></i>
    </button>
    <MenuNav />
    <button>
      <router-link to="/aboutcafe/">Sobre este projeto</router-link>
    </button>
  </div>
  <div class="MenuBarMobile">
    <button class="emptyButton">
      <i class="fa-solid fa-mug-saucer"></i>
    </button>
    <button v-on:click="show = show + 1" class="emptyButton">
      <p>{{ show }}</p>
    </button>
    <CollapsableMenuNav v-if="show" />
  </div>
</template>

<script>
import MenuNav from "./MenuNav.vue";
import CollapsableMenuNav from "./CollapsableMenuNav.vue";

export default {
  name: "MenuStructure",
  components: {
    MenuNav,
    CollapsableMenuNav,
  },
  setup() {
    const show = 0;
    return {
      show,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .MenuBarDesktop {
    visibility: hidden;
  }

  .MenuBarMobile {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    visibility: visible;

    position: fixed;
    width: 100vw;
    height: 8.5vh;

    backdrop-filter: blur(50px) grayscale(30%);
  }
}

@media screen and (min-width: 801px) {
  .MenuBarDesktop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    visibility: visible;

    position: fixed;
    width: 90vw;
    height: 8.5vh;
    margin-left: 5vw;
    margin-right: 5vw;

    backdrop-filter: blur(50px) grayscale(30%);
  }

  .MenuBarMobile {
    visibility: hidden;
  }
}

button {
  width: 10rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: 0;

  background-color: #916047;

  transition: 0.2s;
}

.emptyButton {
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fafafa;
  border: 0;
  margin: 0 1.25rem;

  cursor: pointer;
}

button a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

button:hover {
  transform: scale(1.1);
}
</style>
