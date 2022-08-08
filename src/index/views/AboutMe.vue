<template>
  <div class="container">
    <div class="textbox">
      <Transition name="fade" appear id="el1">
        <h1>Olá,</h1>
      </Transition>
      <Transition name="fade" appear id="el2">
        <p>
          meu nome é <span>Magno</span>, sou desenvolvedor Front-end. Sou
          formado em Ciência da Computação pela Universidade Federal de São
          Paulo (UNIFESP). Estou reunindo aqui os meus projetos pessoais, com
          foco em trazer modernidade e responsividade em interfaces agradáveis
          de usar.
        </p>
      </Transition>
      <Transition name="fade" appear id="el3">
        <h2 class="right">Este é o meu cantinho <span>:)</span></h2>
      </Transition>
    </div>
    <SkillsBody />
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
@media screen and (max-width: 600px) {
  .container {
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: space-between;
  }

  .textbox {
    height: calc(var(--doc-vh) * 64);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .container {
    flex-flow: column nowrap;
  }

  .textbox {
    height: calc(var(--doc-vh) * 64);
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
}

@media screen and (min-width: 801px) {
  .container {
    flex-flow: row nowrap;
  }

  .textbox {
    height: calc(var(--doc-vh) * 94);
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 2.2rem;
    line-height: 3.25rem;
  }
}

.textbox {
  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: flex-start;

  margin-top: calc(var(--doc-vh) * 6);
  width: 70vw;
  padding-left: 13vw;
  padding-right: 5vw;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: #f7dfb2;
}

h1 {
  color: #28000e;
  cursor: default;
}

h2 {
  color: #28000e;
  margin: 0.5em;
  cursor: default;
}

p {
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
