<template>
  <div class="container">
    <PortfolioBody />
  </div>
</template>

<script>
import PortfolioBody from "@/components/body/PortfolioBody.vue";
export default {
  name: "PortfolioCarousel",
  components: {
    PortfolioBody,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #afc2d5;
  overflow: hidden;
}
</style>
