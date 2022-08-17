<template>
  <div class="bg-image"></div>
  <div class="home">
    <MenuStructure />
    <BodyHeader />
  </div>
</template>

<script>
import MenuStructure from "@/medievalcat/components/menu/MenuStructure.vue";
import BodyHeader from "@/medievalcat/components/body/BodyHeader.vue";

export default {
  name: "HomeView",
  components: {
    MenuStructure,
    BodyHeader,
  },
};
</script>

<style scoped>
.bg-image {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 1)
    ),
    url("@/medievalcat/assets/images/medcat.png");
  filter: blur(4px);
  -webkit-filter: blur(4px);
  background-size: 100vw;
  height: 100vh;
}
</style>
