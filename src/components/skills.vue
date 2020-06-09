<template>
  <div class="skillContainer">
    <div class="skillText">{{ this.str }}</div>
    <div class="skill">
      <div :title="this.procent" :class="`skillFill ${this.name}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    str: String,
    name: String,
    procent: String,
  },
  created: function() {
    let root = document.documentElement;
    root.style.setProperty(`--procent${this.name}`, this.procent);
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
  width: var(--procenthtml);
}
.css {
  width: var(--procentcss);
}
.javascript {
  width: var(--procentjavascript);
}
.react {
  width: var(--procentreact);
}
.node {
  width: var(--procentnode);
}
.vue {
  width: var(--procentvue);
}
.git {
  width: var(--procentgit);
}
.cms {
  width: var(--procentcms);
}
.mongodb {
  width: var(--procentmongodb);
}
/* --------------------------------------- */
</style>
