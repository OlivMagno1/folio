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
</template>

<script>
export default {
  name: "MenuButtonBar",
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  i {
    width: 1.5rem;
  }
  .buttonContainer {
    width: 20vw;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  i {
    width: 2.25rem;
  }
  .buttonContainer {
    width: 25vw;
  }
}

@media screen and (min-width: 801px) {
  i {
    width: 3rem;
  }

  .buttonContainer {
    width: 30vw;
  }
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6vh;
  border: 0;

  background-color: #51011d;
  color: #a85710;
  transition: 0.2s;
}

.buttonContainer {
  display: flex;
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
