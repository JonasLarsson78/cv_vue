<template>
  <div class="skillContainer">
    <div class="skillText">{{ this.str }}</div>
    <div class="skill"><div :class="`skillFill ${this.pros}`"></div></div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    str: String,
    pros: String,
  },
};
</script>

<style scoped>
.skillContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: 10px;
}
.skill {
  position: relative;
  top: 2px;
  width: 100px;
  height: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin-left: 10px;
}
.skillText {
  font-size: 14px;
}
.skillFill {
  height: 100%;
  width: 0%;
  background-color: white;
  border-radius: 5px;
  border: none;
}
/*------------------ Skills --------------*/
.html {
  width: 98%;
}
.css {
  width: 95%;
}
.javascript {
  width: 90%;
}
.react {
  width: 95%;
}
.node {
  width: 80%;
}
.vue {
  width: 78%;
}
.git {
  width: 70%;
}
.cms {
  width: 60%;
}
.mongodb {
  width: 70%;
}
/* --------------------------------------- */
</style>
