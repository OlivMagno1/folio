<template>
  <div class="MenuBarDesktop">
    <router-link to="/cafe/" class="logo">
      <i class="fa-solid fa-mug-saucer"></i>
    </router-link>
    <MenuNav />
    <button>
      <router-link to="/aboutcafe/">Sobre este projeto</router-link>
    </button>
  </div>
  <div class="MenuBarMobile">
    <router-link to="/cafe/" class="logo">
      <i class="fa-solid fa-mug-saucer"></i>
    </router-link>
    <button @click="show = !show" class="emptyButton">
      <Transition name="fade">
        <i v-if="!show" class="fa-solid fa-bars icon"></i>
      </Transition>
      <Transition name="fade">
        <i v-if="show" class="fa-solid fa-plus icon"></i>
      </Transition>
    </button>
    <div v-if="!show" class="glassCollapsed" />
    <div v-if="show" class="glassShown" />
    <Transition name="slide" class="test">
      <CollapsableMenuNav v-if="show" @click="show = false" />
    </Transition>
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
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
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
  }

  .glassCollapsed {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 8.5vh;
    z-index: -1;
    transition: 0.2s;
    backdrop-filter: blur(8px);
  }
  .glassShown {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 46.5vh;
    z-index: -1;
    transition: 0.2s;
    backdrop-filter: blur(8px);
  }

  .slide-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-leave-active {
    transform: translateY(-1em);
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-1em);
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .icon {
    position: absolute;
  }
}

@media screen and (min-width: 961px) {
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
  width: 13rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: 0;

  background-color: #916047;

  transition: 0.2s;
}

.emptyButton {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fafafa;
  border: 0;
  margin: 0 1.25rem;

  cursor: pointer;
}

a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #916047;
  text-decoration: none;
  margin: 0 1.25rem;
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
