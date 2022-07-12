<template>
  <div class="visibleArea">
    <h2>Linguagens de programação</h2>
    <div class="section">
      <CardSet
        class="skillCards"
        v-for="(card, index) in skillCardsL"
        :key="index"
      >
        <div class="slide-info">
          <i class="fa-2xl" :class="getCardLogoL(index)"></i>
          <p>{{ card }}</p>
        </div>
      </CardSet>
    </div>
  </div>
  <div class="visibleArea">
    <h2>Frameworks Front-end</h2>
    <div class="section">
      <CardSet
        class="skillCards"
        v-for="(card, index) in skillCardsF"
        :key="index"
      >
        <div class="slide-info">
          <i class="fa-2xl" :class="getCardLogoF(index)"></i>
          <p>{{ card }}</p>
        </div>
      </CardSet>
    </div>
  </div>
</template>

<script>
import CardSet from "@/components/cards/CardSet.vue";

export default {
  name: "SkillsBody",
  components: {
    CardSet,
  },
  setup() {
    //Linguagens
    const cardLogosL = [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js-square",
    ];
    const skillCardsL = ["HTML5", "CSS3", "Javascript"];

    //Frameworks
    const cardLogosF = ["fa-brands fa-vuejs", "fa-brands fa-react"];
    const skillCardsF = ["Vue.js", "React.js"];

    const getCardLogoL = (index) => {
      return cardLogosL.at(index);
    };

    const getCardLogoF = (index) => {
      return cardLogosF.at(index);
    };

    return {
      skillCardsL,
      cardLogosL,
      getCardLogoL,
      skillCardsF,
      cardLogosF,
      getCardLogoF,
    };
  },
};
</script>

<style scoped>
.visibleArea {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  margin-top: 10vh;
  width: 40vw;
}

.section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  width: 40vw;
}

.skillCards {
  width: 8vw;
  height: 9vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;

  background-color: #252422;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 10px;
}

p {
  font-family: Archivo, sans-serif;
  color: #c2b97f;
  margin: 10px;
}

i {
  color: #f4f4f4;
  margin: 15px;
}
</style>
