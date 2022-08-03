<template>
  <div class="section">
    <TransitionGroup name="fade" appear>
      <CardSet
        class="skillCards Desktop"
        v-for="(card, index) in skillCards"
        :id="[`index${index}`]"
        :key="index"
        @mouseover="hover[index] = true"
        @mouseleave="hover[index] = false"
      >
        <Transition name="fade">
          <div class="slide-info">
            <i
              v-if="!hover[index]"
              class="fa-3x"
              :class="getCardLogo(index)"
            ></i>
            <p v-if="hover[index]">{{ card }}</p>
          </div>
        </Transition>
      </CardSet>
    </TransitionGroup>
    <TransitionGroup name="fade" appear>
      <CardSet
        class="skillCards Mobile"
        v-for="(card, index) in skillCards"
        :id="[`index${index}`]"
        :key="index"
        @mouseover="hover[index] = true"
        @mouseleave="hover[index] = false"
      >
        <Transition name="fade">
          <div class="slide-info">
            <i
              v-if="!hover[index]"
              class="fa-1x"
              :class="getCardLogo(index)"
            ></i>
            <p v-if="hover[index]">{{ card }}</p>
          </div>
        </Transition>
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
@media screen and (max-width: 960px) {
  .skillCards {
    min-width: 3rem;
    max-width: 3rem;
    min-height: 3rem;
    max-height: 3rem;

    display: flex;
    flex: 1;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    background-color: #51011d;
    margin: 0.5rem;
    border-radius: 50%;
    transition: 0.2s;
  }

  .Desktop {
    display: none;
  }

  p {
    font-family: Archivo, sans-serif;
    font-size: 0.5rem;
    color: #f7dfb2;
    margin: 1rem;
    cursor: default;
  }
}

@media screen and (min-width: 961px) {
  .skillCards {
    min-width: 10vw;
    max-width: 10vw;
    min-height: 5rem;
    max-height: 5rem;

    display: flex;
    flex: 1;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 10vw;

    background-color: #f7dfb2;
    transition: 0.2s;
  }

  .Mobile {
    display: none;
  }

  p {
    font-family: Archivo, sans-serif;
    font-size: 1rem;
    color: #51011d;
    margin: 1rem;
    cursor: default;
  }
}

.section {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-self: center;

  height: 94vh;
  margin-top: 6vh;
  width: 10vw;
}

i {
  color: #51011d;
  margin: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#title {
  transition-delay: 1.5s;
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
