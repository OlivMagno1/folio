<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div class="toggle-page left">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="toggle-page right">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CarouselComp",
  setup() {
    const currentSlide = ref(1);
    //const getSlideCount;

    return { currentSlide };
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
</style>
