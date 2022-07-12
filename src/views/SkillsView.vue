<template>
  <div class="container">
    <SkillsBody />
  </div>
</template>

<script>
import SkillsBody from "@/components/body/SkillsBody.vue";

export default {
  name: "SkillsView",
  components: {
    SkillsBody,
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
}
</style>
