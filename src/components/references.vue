<template>
  <div class="referenceContanier">
    <img class="referenceImg" src="../assets/svg/reference.svg" alt="logo" />
    <div class="referenceHeader">Referenser</div>
    <hr class="hr" />
    <div
      class="refContainer"
      v-for="(ref, index) in references.groups"
      :key="index"
    >
      <div class="refHeader"><b>Företag:</b> {{ ref.sectionHeader }}</div>
      <div><b>Vad:</b> {{ ref.description }}</div>
      <div v-for="(person, i) in ref.items" :key="index + i">
        <div><b>Namn:</b> {{ person.name }}</div>
        <div><b>Titel:</b> {{ person.title }}</div>
        <div class="refOm" v-if="person.text">
          <b>Om Jonas:</b>
          {{ person.text }}
        </div>
        <div>
          <img class="icons" src="../assets/svg/mail2.svg" /><a
            class="refLinks"
            :href="`mailto:${person.email}`"
            >{{ person.email }}</a
          >
        </div>
        <div>
          <img class="icons" src="../assets/svg/linkedin2.svg" /><a
            class="refLinks"
            :href="`${person.linkedin}`"
            target="_blank"
            >{{ person.linkedin }}</a
          >
        </div>
        <div class="end">
          <img class="icons" src="../assets/svg/home.svg" /><a
            class="refLinks"
            :href="`${person.url}`"
            target="_blank"
            >{{ person.url }}</a
          >
        </div>
        <hr class="hr" />
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../data/data';
export default {
  name: 'References',
  data() {
    return {
      references: {},
    };
  },
  created: function() {
    const find = data.sections.find((x) => x.title === 'Referenser');
    this.references = find;
  },
};
</script>

<style scoped>
.icons {
  position: relative;
  top: 7px;
  width: 25px;
  margin-top: 5px;
  margin-right: 5px;
}
.referenceContanier {
  position: relative;
  height: 100px;
  width: calc(100% - 25px);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
  color: black;
}
.referenceHeader {
  position: relative;
  top: -17px;
  left: 50px;
  color: #115e75;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.referenceImg {
  position: relative;
  top: 10px;
  left: -320px;
  width: 25px;
  filter: #115e75;
}
.hr {
  margin-bottom: 10px;
}
.refContainer {
  text-align: left;
}
.refHeader {
  font-size: 20px;
}
.refOm {
  margin-top: 10px;
}
.refLinks {
  text-decoration: none;
  color: #115e75;
}
.refLinks:hover {
  font-weight: bold;
}
.end {
  margin-bottom: 20px;
}
</style>
