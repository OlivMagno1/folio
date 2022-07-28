<template>
  <div class="aboutContainer">
    <div class="textTitle">
      <h1>Sobre este <span class="textHighlight">projeto</span></h1>
      <p>Layout inspirado no site <a href="https://www.lobe.ai">Lobe</a></p>
    </div>
    <div class="featureList">
      <h2>Features</h2>
      <p>SPA -- Site carregado em apenas uma página</p>
      <p>Responsivo -- Layout se adequa ao tamanho da tela</p>
      <p>Menu translúcido</p>
      <p>Animações ao sobrepor o mouse</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutProject",
};
</script>

<style scoped>
.aboutContainer {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;

  width: 90vw;
  margin-top: 12vh;
  margin-left: 5vw;
  margin-right: 5vw;
}

.textTitle {
  width: 45vw;
  height: 20vh;
}

.imageTitle {
  width: 45vw;
  height: 20vh;
}

.featureList {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.textHighlight {
  color: #916047;
}
</style>
