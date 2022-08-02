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
@media screen and (max-width: 960px) {
  .buttonContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    margin-right: 2vw;
    width: 30vw;
  }

  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #f7dfb2;
    color: #a85710;
    transition: 0.2s;
  }
}

@media screen and (min-width: 961px) {
  .buttonContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 10vw;
  }

  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #f7dfb2;
    color: #a85710;
    transition: 0.2s;
  }
}

a {
  text-decoration: none;
}

i:hover {
  transform: scale(1.1);
  background-color: #a85710;
  color: #f7dfb2;
}
</style>
