<template>
  <div class="section">
    <TransitionGroup name="fade" appear>
      <CardSet
        class="skillCards"
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
              class="fa-4x"
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
@media screen and (max-width: 600px) {
  .skillCards {
    min-width: 25vw;
    max-width: 25vw;
    margin: 0 1rem;
    min-height: 2.5rem;
    max-height: 2.5rem;
  }

  p {
    font-size: 0.8rem;
    margin: 0.5rem;
  }

  .section {
    flex-flow: row wrap;
    width: 100vw;
    height: calc(var(--doc-vh) * 30);
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .skillCards {
    min-width: 20vw;
    max-width: 20vw;
    margin: 0 1rem;
    min-height: 2rem;
    max-height: 2rem;
  }

  p {
    font-size: 1rem;
    margin: 0.8rem;
  }

  .section {
    flex-flow: row wrap;
    width: 100vw;
    height: calc(var(--doc-vh) * 30);
  }
}

@media screen and (min-width: 801px) {
  .skillCards {
    min-width: 20vw;
    max-width: 20vw;
    min-height: 5rem;
    max-height: 5rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 1rem;
  }

  .section {
    flex-flow: column nowrap;
    height: calc(var(--doc-vh) * 94);
    margin-top: 6vh;
    width: 20vw;
  }
}
.skillCards {
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  background-color: #f7dfb2;
  transition: 0.2s;
}

p {
  font-family: Archivo, sans-serif;
  color: #51011d;
  cursor: default;
}

.section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
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
