<template>
  <div class="buttonContainer">
    <button>
      <a
        href="mailto:olivmagno1@gmail.com"
        target="_blank"
        title="E-mail"
        alt="Contato por e-mail"
      >
        <box-icon type="solid" name="envelope" color="#f4f4f4"></box-icon>
      </a>
    </button>
    <button>
      <a
        href="https://www.linkedin.com/in/olivmagno1/"
        target="_blank"
        title="Linkedin"
        alt="Acessar linkedin"
      >
        <box-icon type="logo" name="linkedin" color="#f4f4f4"></box-icon>
      </a>
    </button>
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

button {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0px;

  background-color: #c2b97f;

  transition: 0.2s;
}

button:hover {
  transform: scale(1.1);
}
</style>
