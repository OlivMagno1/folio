<template>
  <div class="portfolioCardsContainer">
    <h1>Portfolio</h1>
    <div v-for="(slide, index) in portfolioData" :key="index" class="card">
      <a :href="slide.address" target="_blank">
        <img :src="require(`@/index/assets/images/${slide.address}.jpg`)" />
      </a>
      <div class="descriptionContainer">
        <h2>{{ slide.projectTitle }}</h2>
        <p>
          Inspirado no layout de
          <a :href="slide.originalLink"> {{ slide.originalName }}</a>
        </p>
        <p>{{ slide.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioMobile",

  setup() {
    const portfolioData = [
      {
        projectTitle: "Plataforma",
        imageName: "plataformaMobile",
        address: "plataformaMobile",
        originalName: "Ableton",
        originalLink: "https://www.ableton.com/en/about/",
        description:
          "Single Page Application (SPA) responsiva construída em Vue.js apresentando layout variado e único para cada seção, tipografia especial, menu colapsável em mobile e rodapé com multicolunas",
      },
      {
        projectTitle: "Cafe",
        imageName: "cafeMobile",
        address: "cafeMobile",
        originalName: "Lobe",
        originalLink: "https://www.lobe.ai/tour",
        description:
          "Single Page Application (SPA) responsiva construída em Vue.js, apresentando animações de sobreposição de mouse, menu translúcido em desktop e colapsável em mobile e rodapé com multicolunas",
      },
    ];

    return { portfolioData };
  },
};
</script>

<style scoped>
.portfolioCardsContainer {
  width: 90vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.descriptionContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 50vw;
}

.card {
  width: 90vw;
  background-color: #51011d;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

img {
  width: 30vw;
  margin: 1rem;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

h1 {
  margin-top: 10vh;
  margin-bottom: 5vh;
  font-size: 2em;
  width: 90vw;
  text-align: left;
  font-weight: 700;

  color: #28000e;
}

h2 {
  margin: 1rem 0;
  font-size: 1rem;
  color: #a85710;
}

p {
  font-size: 0.9rem;
  color: #f7dfb2;
  text-align: justify;
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: #a85710;
}
</style>
