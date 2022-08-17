<template>
  <div class="HeaderContainer">
    <div class="ImageContainer">
      <img src="@/medievalcat/assets/images/medcat.png" />
    </div>
    <div class="TitleContainer">
      <div>
        <h1>MEDIEVAL DAYS</h1>
      </div>
      <div class="">
        <h2>THY LAIRD</h2>
      </div>
      <div class="ButtonLevel">
        <button class="Filled">LISTEN NOW</button>
        <button class="Hollow">SHARE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyHeader",
};
</script>

<style scoped>
.HeaderContainer {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  width: 60vw;
  position: absolute;
  top: 20vh;
  left: 20vw;
}

.TitleContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-left: 5vw;
}

img {
  width: 500px;
  height: auto;
}

.Hollow {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fdfdfd;
}

.Filled {
  background-color: #50a584;
  border: 1px solid #50a584;
}

button {
  font-size: 1.5em;
  color: #fdfdfd;

  padding: 0.75rem 1.2rem;
  margin-right: 10px;
}

h1 {
  font-size: 3rem;
  color: #fdfdfd;
}

h2 {
  font-size: 2.5rem;
  color: #fdfdfd;
}

.ButtonLevel {
  margin-top: 2rem;
}
</style>
