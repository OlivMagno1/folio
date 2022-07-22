<template>
  <div class="section">
    <TransitionGroup name="fade" @enter="onEnter" appear>
      <CardSet
        class="skillCards"
        v-for="(card, index) in skillCards"
        :id="[`index${index}`]"
        :key="index"
      >
        <div
          class="slide-info"
          @mouseover="hover[index] = true"
          @mouseleave="hover[index] = false"
        >
          <i
            v-if="!hover[index]"
            class="fa-2xl"
            :class="getCardLogo(index)"
          ></i>
          <p v-if="hover[index]">{{ card }}</p>
        </div>
      </CardSet>
    </TransitionGroup>
  </div>
</template>

<script>
import CardSet from "@/index/components/cards/CardSet.vue";

export default {
  name: "SkillsBody",
  components: {
    CardSet,
  },
  data() {
    return {
      hover: [false, false, false, false, false],
    };
  },
  setup() {
    //Cards
    const cardLogos = [
      "fa-brands fa-vuejs",
      "fa-brands fa-react",
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js-square",
    ];
    const skillCards = ["Vue.js", "React.js", "HTML5", "CSS3", "Javascript"];

    const getCardLogo = (index) => {
      return cardLogos.at(index);
    };

    return {
      skillCards,
      cardLogos,
      getCardLogo,
    };
  },
};
</script>

<style scoped>
.section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  width: 30vw;
  margin-top: 10vh;
}

.skillCards {
  width: 66px;
  height: 66px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  background-color: #252422;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 50%;
  transition: 0.2s;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#index0 {
  transition-delay: 1.5s;
}

#index1 {
  transition-delay: 1.6s;
}

#index2 {
  transition-delay: 1.7s;
}

#index3 {
  transition-delay: 1.8s;
}

#index4 {
  transition-delay: 1.9s;
}
</style>
