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
.buttonContainer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 8vw;
}

a {
  text-decoration: none;
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #c2b97f;
  color: #fafafa;
  transition: 0.2s;
}

i:hover {
  transform: scale(1.1);
  background-color: #fafafa;
  color: #c2b97f;
}
</style>
