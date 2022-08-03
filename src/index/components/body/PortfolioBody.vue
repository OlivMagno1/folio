<template>
  <div>
    <CarouselComp class="carousel" v-slot="{ currentSlide }">
      <SlideComp v-for="(slide, index) in portfolioData" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <a :href="slide.address" target="_blank">
            <img :src="require(`@/index/assets/images/${slide.address}.jpg`)" />
            <div class="descriptionBox">
              <h1 id="projectTitle">{{ slide.projectTitle }}</h1>
              <h2 id="projectDescription">{{ slide.description }}</h2>
            </div>
          </a>
        </div>
      </SlideComp>
    </CarouselComp>
  </div>
</template>

<script>
import CarouselComp from "@/index/components/carousel/CarouselComp.vue";
import SlideComp from "@/index/components/carousel/SlideComp.vue";

export default {
  name: "PortfolioBody",
  components: {
    SlideComp,
    CarouselComp,
  },
  setup() {
    const portfolioData = [
      {
        projectTitle: "Plataforma",
        address: "plataforma",
        description:
          "lorem ipsum si dolor amet descrição do projeto lorem ipsum",
      },
      {
        projectTitle: "Café",
        address: "cafe",
        description:
          "lorem ipsum si dolor amet descrição do projeto lorem ipsum",
      },
    ];
    return { portfolioData };
  },
};
</script>

<style scoped>
.carousel {
  width: 100vw;
  height: 94vh;
  max-height: 94vh;
}

.slide-info {
  height: 90vh;
  max-height: 90vh;
  margin-top: 10vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

img {
  width: 100vw;
  max-height: 94vh;
  object-fit: cover;
  transition: 0.2s;
}

.descriptionBox {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  position: fixed;
  bottom: 20vh;
  left: 12vw;
}

#projectTitle {
  font-family: Archivo;
  font-weight: 100;
  font-size: 8rem;
  text-decoration: none;
  color: #f7dfb2;
  background-color: #51011d;

  padding: 0 1rem;
  margin-bottom: 0.5rem;
}

#projectDescription {
  font-family: Archivo;
  font-weight: 100;
  font-size: 2rem;
  text-decoration: none;
  color: #f7dfb2;
  background-color: #51011d;
  padding: 0 1rem;
}
</style>
