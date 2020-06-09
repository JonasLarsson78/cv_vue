<template>
  <div id="app">
    <Cv />
  </div>
</template>

<script>
import Cv from './components/cvContainer';
export default {
  name: 'App',
  components: { Cv },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
  --procenthtml: 50%;
  --procentcss: 0%;
  --procentjavascript: 0%;
  --procentreact: 0%;
  --procentnode: 0%;
  --procentvue: 0%;
  --procentgit: 0%;
  --procentcms: 0%;
  --procentvue: 0%;
  --procentmongodb: 0%;
}

* {
  margin: 0px;
  font-family: 'Roboto', sans-serif;
}
body {
  background-color: black;
  background-image: url(./assets/bright-squares.png);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.mobil {
  display: block;
}
@media only screen and (max-device-width: 901px) {
  .mobil {
    display: none;
  }
}
</style>
