<template>
  <div class="expressoContainer">
    <div class="textTitle">
      <h1>
        Uma dose concentrada de <span class="textHighlight">cafeína</span>
      </h1>
      <p>O punch perfeito para levantar a moral</p>
    </div>
    <div class="imageTitle">
      <img src="@/cafe/assets/images/expresso.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpressoView",
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .expressoContainer {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .textTitle {
    width: 60vw;
  }

  h1 {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1001px) {
  .expressoContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .textTitle {
    width: 25vw;
  }

  h1 {
    font-size: 3rem;
  }
}
.expressoContainer {
  width: 60vw;
  margin-top: 12vh;
  margin-left: 20vw;
  margin-right: 20vw;
}

img {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  border-radius: 2rem;
}

.textHighlight {
  color: #916047;
}
</style>
