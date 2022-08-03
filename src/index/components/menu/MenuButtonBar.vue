<template>
  <div class="buttonContainer">
    <a
      href="mailto:olivmagno1@gmail.com"
      target="_blank"
      title="E-mail"
      alt="Contato por e-mail"
    >
      <i class="fa-solid fa-envelope"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/olivmagno1/"
      target="_blank"
      title="Linkedin"
      alt="Acessar linkedin"
    >
      <i class="fa-brands fa-linkedin-in"></i>
    </a>
    <a
      href="https://github.com/OlivMagno1"
      target="_blank"
      title="Github"
      alt="Acessar Github"
    >
      <i class="fa-brands fa-github"></i>
    </a>
  </div>
  <div class="collapsable">
    <button v-if="!show" @click="show = !show" class="dropdown inactive">
      Contato<i class="fa-solid fa-chevron-down"></i>
    </button>
    <button v-if="show" @click="show = !show" class="dropdown active">
      Contato<i class="fa-solid fa-chevron-up"></i>
    </button>
    <Transition name="slide">
      <CollapsableButtonBar v-if="show" />
    </Transition>
    <div v-if="show" class="blankSpace" @click="show = !show"></div>
  </div>
</template>

<script>
import CollapsableButtonBar from "./CollapsableButtonBar.vue";

export default {
  name: "MenuButtonBar",
  components: {
    CollapsableButtonBar,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.blankSpace {
  position: absolute;
  top: calc(var(--doc-vh) * 12);
  left: 0;

  width: 100vw;
  height: calc(var(--doc-vh) * 88);
}

@media screen and (max-width: 600px) {
  i {
    width: 1.5rem;
  }
  .buttonContainer {
    display: none;
  }

  .collapsable {
    display: block;
    z-index: 999;
  }

  .dropdown {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: calc(var(--doc-vh) * 6);
    border: 0;
    cursor: pointer;
    padding-left: 1rem;
    transition: 0.2s;
    font-size: 0.8rem;

    background-color: #51011d;
    color: #a85710;
  }

  .dropdown:hover,
  .dropdown:hover > i {
    background-color: #a85710;
    color: #f7dfb2;
  }

  .inactive {
    background-color: #51011d;
    color: #a85710;
  }

  .active,
  .fa-chevron-up {
    color: #f7dfb2;
    background-color: #51011d;
  }

  .slide-enter-active {
    transition: all 0.1s ease-out;
  }

  .slide-leave-active {
    transition: all 0.1s ease-in;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-1em);
    opacity: 0;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  i {
    width: 2.25rem;
  }
  .buttonContainer {
    display: flex;
  }

  .collapsable {
    display: none;
  }
}

@media screen and (min-width: 801px) {
  i {
    width: 3rem;
  }

  .buttonContainer {
    display: flex;
  }

  .collapsable {
    display: none;
  }
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(var(--doc-vh) * 6);
  border: 0;

  background-color: #51011d;
  color: #a85710;
  transition: 0.2s;
}

.buttonContainer {
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
}

a {
  text-decoration: none;
}

i:hover {
  background-color: #a85710;
  color: #f7dfb2;
}
</style>
