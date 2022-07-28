<template>
  <AboutProject />
</template>

<script>
import AboutProject from "../components/aboutpage/AboutProject.vue";
export default {
  name: "AboutCafe",
  components: {
    AboutProject,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 90vw;
  margin-top: 12vh;
  margin-left: 5vw;
  margin-right: 5vw;
}
</style>
