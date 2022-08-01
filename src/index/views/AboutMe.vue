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
      <SkillsBody />
    </div>
  </div>
</template>

<script>
import SkillsBody from "@/index/components/body/SkillsBody.vue";

export default {
  name: "AboutMe",
  components: {
    SkillsBody,
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

    margin-top: 12vh;
    width: 95vw;
    height: 88vh;
  }
}

@media screen and (min-width: 961px) {
  .textbox {
    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: flex-start;

    margin-top: 12vh;
    width: 50vw;
    height: 88vh;
  }
}
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100vw;

  background-color: #f7dfb2;
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
