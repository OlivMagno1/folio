<template>
  <div class="aboutContainer">
    <div class="textTitle">
      <h1>Sobre este <span class="textHighlight">projeto</span></h1>
      <p>Layout inspirado no site <a href="https://www.lobe.ai">Lobe</a></p>
    </div>
    <div class="imageContainer">
      <img src="@/cafe/assets/images/lobe.png" />
    </div>
    <div class="featureList">
      <p>
        Este projeto é uma Single Page Application desenvolvida em Vue.js, o
        layout apresenta um menu translúcido e animações simples ao passar com o
        cursor em cima dos elementos. A interface é totalmente responsiva, se
        reajustando para todos os tamanhos de tela, mantendo a navegação de
        forma simples e intuitiva.
      </p>
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
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  margin-top: 12vh;
}

.imageContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  width: 30vw;
  height: 17.5vw;
  background-color: #f0ece9;
}

img {
  width: 24vw;
  height: 15vw;

  border-radius: 1rem;
}

.textTitle {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

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
