<template>
  <div class="collapsableButtonContainer">
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
  name: "CollapsableButtonBar",
};
</script>

<style scoped>
.collapsableButtonContainer {
  width: 100vw;
  position: absolute;
  top: calc(var(--doc-vh) * 6);
  right: 0;
  z-index: 500;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #51011d;
}

a {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  text-decoration: none;
  height: calc(var(--doc-vh) * 6);
  width: 33vw;
  color: #f7dfb2;
  transition: 0.2s;
}

a:hover {
  background-color: #a85710;
}
</style>
