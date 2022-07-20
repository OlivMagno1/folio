<template>
  <div class="container">
    <div class="textbox">
      <h1>Olá</h1>
      <h2 class="right">Meu nome é Magno</h2>
      <h2>Sou desenvolvedor Front-end</h2>
      <h2 class="right">Seja bem vindo ao meu cantinho</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #afc2d5;
}

.textbox {
  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: flex-start;

  width: 50vw;
}

h1 {
  font-size: 5em;
  color: #252422;
  margin: 0.5em;
}

h2 {
  font-size: 3em;
  color: #252422;
  margin: 0.5em;
}

.right {
  align-self: flex-end;
}
</style>
