<template>
  <div class="container">
    <div class="textbox">
      <Transition name="fade" appear id="el1">
        <h1>Olá</h1>
      </Transition>
      <Transition name="fade" appear id="el2">
        <p>
          Meu nome é <span>Magno</span>, sou desenvolvedor Front-end. Sou
          formado em Ciência da Computação pela Universidade Federal de São
          Paulo (UNIFESP). Eu desenvolvo interfaces responsivas com base em
          Vue.js, HTML e CSS.
        </p>
      </Transition>
      <Transition name="fade" appear id="el3">
        <h2 class="right">Este é o meu cantinho <span>:)</span></h2>
      </Transition>
    </div>
    <div>
      <SkillsBody />
    </div>
    <div class="portfolioMobileContainer">
      <PortfolioMobile />
    </div>
  </div>
</template>

<script>
import PortfolioMobile from "../components/body/PortfolioMobile.vue";
import SkillsBody from "@/index/components/body/SkillsBody.vue";

export default {
  name: "AboutMe",
  components: {
    SkillsBody,
    PortfolioMobile,
  },
};
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .textbox {
    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: flex-start;

    margin-top: 15vh;
    width: 90vw;
    height: 60vh;
  }

  .portfolioMobileContainer {
    display: block;
  }

  h1 {
    font-size: 2em;
    color: #28000e;
    cursor: default;
  }

  h2 {
    font-size: 1.5em;
    color: #28000e;
    margin: 0.5em;
    cursor: default;
  }

  p {
    font-size: 1.2em;
    color: #28000e;
    margin: 0.5em;
    text-align: justify;
    cursor: default;
  }
}

@media screen and (min-width: 961px) {
  .textbox {
    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: flex-start;

    margin-top: 6vh;
    width: 90vw;
    height: 94vh;
    padding: 0 20vw;
  }

  .portfolioMobileContainer {
    display: none;
  }

  h1 {
    font-size: 5em;
    color: #28000e;
    cursor: default;
  }

  h2 {
    font-size: 3em;
    color: #28000e;
    margin: 0.5em;
    cursor: default;
  }

  p {
    font-size: 2em;
    color: #28000e;
    margin: 0.5em;
    text-align: justify;
    cursor: default;
  }
}

.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  background-color: #f7dfb2;
}

span {
  color: #51011d;
}

.right {
  align-self: flex-end;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#el2 {
  transition-delay: 0.5s;
}

#el3 {
  transition-delay: 1s;
}
</style>
