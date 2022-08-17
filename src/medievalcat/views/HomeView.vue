<template>
  <div class="bg-image"></div>
  <div class="home">
    <MenuStructure />
    <BodyHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuStructure from "@/components/menu/MenuStructure.vue";
import BodyHeader from "@/components/body/BodyHeader.vue";

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
    url("@/assets/images/tempero-bg.jpg");
  filter: blur(4px);
  -webkit-filter: blur(4px);
  background-size: 100vw;
  height: 100vh;
}
</style>
