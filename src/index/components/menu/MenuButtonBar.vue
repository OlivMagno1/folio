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
      Contato
    </button>
    <button v-if="show" @click="show = !show" class="dropdown active">
      Contato
    </button>
    <CollapsableButtonBar v-if="show" />
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
@media screen and (max-width: 600px) {
  i {
    width: 1.5rem;
  }
  .buttonContainer {
    display: none;
  }

  .dropdown {
    height: calc(var(--doc-vh) * 6);
    border: 0;
    cursor: pointer;

    background-color: #51011d;
    color: #a85710;
  }

  .dropdown:hover {
    background-color: #a85710;
    color: #f7dfb2;
  }

  .inactive {
    background-color: #51011d;
    color: #a85710;
  }

  .active {
    color: #f7dfb2;
    background-color: #a85710;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  i {
    width: 2.25rem;
  }
  .buttonContainer {
    display: flex;
    width: 25vw;
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
    width: 30vw;
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
