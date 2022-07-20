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
  top: 55vh;
  left: 15vw;
}

.right {
  position: absolute;
  top: 55vh;
  right: 15vw;
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #252422;
  color: #c2b97f;
  transition: 0.2s;
}

i:hover {
  transform: scale(1.1);
}

.pagination {
  position: absolute;
  bottom: 10vh;
  left: 0;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

span {
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.2s;
}

.active {
  width: 20px;
  height: 20px;
}
</style>
