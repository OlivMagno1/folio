<template>
  <div>
    <CarouselComp class="carousel" v-slot="{ currentSlide }">
      <SlideComp v-for="(slide, index) in portfolioData" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <a :href="slide.address" target="_blank">
            <img :src="require(`@/assets/images/${slide.image}.jpg`)" />
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
import CarouselComp from "@/components/carousel/CarouselComp.vue";
import SlideComp from "@/components/carousel/SlideComp.vue";

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
        address: "../plataforma",
        image: "plataforma",
        description:
          "Single Page Application criada em Vue.js inspirada no layout do Ableton",
      },
      {
        projectTitle: "Café",
        address: "../cafe",
        image: "cafe",
        description:
          "Single Page Application criada em Vue.js inspirada no layout do Lobe",
      },
    ];
    return { portfolioData };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #projectTitle {
    font-size: 3rem;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
  }

  #projectDescription {
    text-align: left;
    max-width: 60vw;
    font-size: 1.2rem;
    padding: 0 0.5rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  #projectTitle {
    font-size: 4rem;
    padding: 0 0.8rem;
    margin-bottom: 0.5rem;
  }

  #projectDescription {
    text-align: left;
    max-width: 60vw;
    font-size: 1.6rem;
    padding: 0 0.8rem;
  }
}

@media screen and (min-width: 801px) {
  #projectTitle {
    font-size: 8rem;
    padding: 0 1rem;
    margin-bottom: 0.5rem;
  }

  #projectDescription {
    text-align: left;
    max-width: 60vw;
    font-size: 2rem;
    padding: 0 1rem;
  }
}

.carousel {
  width: 100vw;
  height: calc(var(--doc-vh) * 94);
}

.slide-info {
  height: calc(var(--doc-vh) * 90);
  margin-top: calc(var(--doc-vh) * 10);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

img {
  min-width: 100vw;
  height: calc(var(--doc-vh) * 94);
  object-fit: cover;
  transition: 0.2s;
}

.descriptionBox {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  position: fixed;
  bottom: calc(var(--doc-vh) * 20);
  left: 12vw;
}

#projectTitle {
  font-family: Archivo;
  font-weight: 100;
  text-decoration: none;

  color: #f7dfb2;
  background-color: #51011d;
  opacity: 0.8;
}

#projectDescription {
  font-family: Archivo;
  font-weight: 100;
  text-decoration: none;

  color: #f7dfb2;
  background-color: #51011d;
  opacity: 0.8;
}
</style>
