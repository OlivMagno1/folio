<template>
  <h1>Portfolio</h1>
  <div v-for="(slide, index) in carouselSlides" :key="index">
    <a :href="getPage(index)" target="_blank">
      <img :src="require(`@/index/assets/images/${slide}.png`)" />
    </a>
  </div>
</template>

<script>
export default {
  name: "PortfolioMobile",

  setup() {
    const carouselSlides = ["plataforma", "cafe"];
    const pageList = ["/plataforma", "/cafe"];

    const getPage = (index) => {
      return pageList.at(index);
    };
    return { carouselSlides, getPage };
  },
};
</script>

<style scoped>
img {
  width: 80vw;
}

h1 {
  margin-top: 10vh;
  font-size: 6em;
  width: 90vw;
  text-align: left;
  font-weight: 700;

  color: #a85710;
}
</style>
