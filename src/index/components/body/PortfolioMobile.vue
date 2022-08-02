<template>
  <div class="portfolioCardsContainer">
    <h1>Portfolio</h1>
    <div v-for="(slide, index) in carouselSlides" :key="index">
      <a :href="getPage(index)" target="_blank">
        <img :src="require(`@/index/assets/images/${slide}.png`)" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioMobile",

  setup() {
    const carouselSlides = ["cafeMobile", "cafeMobile"];
    const pageList = ["/plataforma", "/cafe"];

    const getPage = (index) => {
      return pageList.at(index);
    };
    return { carouselSlides, getPage };
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

img {
  width: 30vw;
  margin-bottom: 5vh;
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
</style>
