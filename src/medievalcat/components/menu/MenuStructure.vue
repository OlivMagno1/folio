<template>
  <div class="MenuContainer">
    <p>Botão 1</p>
    <p>Botão 2</p>
    <p>Botão 3</p>
    <p>Botão 4</p>
    <p>Botão 5</p>
  </div>
</template>

<script>
export default {
  name: "MenuContainer",
};
</script>

<style scoped>
.MenuContainer {
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  right: 12vw;
  top: 5vh;

  width: 58px;
}

p {
  color: white;
  margin: 8px;
}
</style>
