<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div class="toggle-page left">
      <i @click="prevSlide" class="fas fa-chevron-left"></i>
    </div>
    <div class="toggle-page right">
      <i @click="nextSlide" class="fas fa-chevron-right"></i>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "CarouselComp",
  setup() {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(true);
    const timeOutDuration = ref(30000);

    //next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    //previous slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
      }
      currentSlide.value -= 1;
    };

    //choose slide
    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    //autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeOutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });
    return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide };
  },
};
</script>

<style scoped>
.toggle-page {
  display: flex;
  flex: 1;
}

.left {
  position: absolute;
  top: calc(var(--doc-vh) * 6);
  left: 0;
}

.right {
  position: absolute;
  top: calc(var(--doc-vh) * 6);
  right: 0;
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: calc(var(--doc-vh) * 94);
  color: #f7dfb2;
  transition: 0.2s;
}

.left i:hover {
  background-image: linear-gradient(
    90deg,
    rgb(0% 0% 0% / 0.3) 0%,
    rgb(0% 0% 0% / 0.298828125) 6.25%,
    rgb(0% 0% 0% / 0.2953125) 12.5%,
    rgb(0% 0% 0% / 0.289453125) 18.75%,
    rgb(0% 0% 0% / 0.28125) 25%,
    rgb(0% 0% 0% / 0.270703125) 31.25%,
    rgb(0% 0% 0% / 0.2578125) 37.5%,
    rgb(0% 0% 0% / 0.24257812499999998) 43.75%,
    rgb(0% 0% 0% / 0.22499999999999998) 50%,
    rgb(0% 0% 0% / 0.205078125) 56.25%,
    rgb(0% 0% 0% / 0.1828125) 62.5%,
    rgb(0% 0% 0% / 0.158203125) 68.75%,
    rgb(0% 0% 0% / 0.13125) 75%,
    rgb(0% 0% 0% / 0.101953125) 81.25%,
    rgb(0% 0% 0% / 0.0703125) 87.5%,
    rgb(0% 0% 0% / 0.03632812499999999) 93.75%,
    rgb(0% 0% 0% / 0) 100%
  );
}

.right i:hover {
  background-image: linear-gradient(
    270deg,
    rgb(0% 0% 0% / 0.3) 0%,
    rgb(0% 0% 0% / 0.298828125) 6.25%,
    rgb(0% 0% 0% / 0.2953125) 12.5%,
    rgb(0% 0% 0% / 0.289453125) 18.75%,
    rgb(0% 0% 0% / 0.28125) 25%,
    rgb(0% 0% 0% / 0.270703125) 31.25%,
    rgb(0% 0% 0% / 0.2578125) 37.5%,
    rgb(0% 0% 0% / 0.24257812499999998) 43.75%,
    rgb(0% 0% 0% / 0.22499999999999998) 50%,
    rgb(0% 0% 0% / 0.205078125) 56.25%,
    rgb(0% 0% 0% / 0.1828125) 62.5%,
    rgb(0% 0% 0% / 0.158203125) 68.75%,
    rgb(0% 0% 0% / 0.13125) 75%,
    rgb(0% 0% 0% / 0.101953125) 81.25%,
    rgb(0% 0% 0% / 0.0703125) 87.5%,
    rgb(0% 0% 0% / 0.03632812499999999) 93.75%,
    rgb(0% 0% 0% / 0) 100%
  );
}

.pagination {
  position: absolute;
  bottom: calc(var(--doc-vh) * 5);
  left: 0;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

span {
  cursor: pointer;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: #51011d;
  transition: 0.2s;
}

.active {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
