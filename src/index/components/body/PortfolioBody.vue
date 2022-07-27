<template>
  <div>
    <CarouselComp class="carousel" v-slot="{ currentSlide }">
      <SlideComp v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <a :href="getPage(index)" target="_blank">
            <img :src="require(`@/index/assets/images/${slide}.png`)" />
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
.carousel {
  width: 60vw;
  height: 90vh;
  max-height: 90vh;
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
  width: 60vw;
  max-height: 37.5vw;
  object-fit: cover;
  transition: 0.2s;
}

img:hover {
  transform: scale(1.01);
}
</style>
