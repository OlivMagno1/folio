<template>
  <div class="container">
    <div class="titlecard">
      <h2>Incrível <span class="textHighlight">Café</span></h2>
      <h3>
        Nada como uma deliciosa xícara de café para começar o dia. O importante
        é acordar.
      </h3>
    </div>
    <div class="imagecontainer">
      <img src="@/cafe/assets/images/coffee.jpg" />
    </div>
    <div class="titlecard">
      <h2>Faça já o seu café</h2>
      <button>
        <a href="/index">Voltar</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourTitle",
};
</script>

<style scoped>
@media screen and (max-width: 720px) {
  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 90vw;
    margin-top: 12vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  .imagecontainer {
    width: 64vw;
    height: 38vw;
    margin-top: 8vh;
    margin-bottom: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0ece9;

    border-radius: 2rem;
  }

  h2 {
    font-size: 3rem;
    margin: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  .titlecard {
    width: 90vw;
  }
}

@media screen and (min-width: 721px) {
  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 90vw;
    margin-top: 12vh;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  .imagecontainer {
    width: 64vw;
    height: 38vw;
    margin-top: 8vh;
    margin-bottom: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0ece9;

    border-radius: 2rem;
  }

  h2 {
    font-size: 5em;
    margin: 0.5em;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
  }

  .titlecard {
    width: 40vw;
  }
}

img {
  width: 48vw;
  height: 30vw;
  object-fit: cover;
  border-radius: 2rem;
}

.textHighlight {
  color: #916047;
}

button {
  width: 12em;
  height: 4em;
  border-radius: 30px;
  border: 0;
  margin-bottom: 2em;

  background-color: #916047;

  transition: 0.2s;
}

button a {
  font-family: LabGrotesque, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

button:hover {
  transform: scale(1.1);
}
</style>
