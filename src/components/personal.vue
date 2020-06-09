<template>
  <div class="personalContainer">
    <div>
      <img
        v-if="!imgHover"
        class="personalImg"
        :src="`${personal.personalData.image}`"
        @mouseenter="hoverImg(true)"
      />
      <img
        v-else
        class="personalImg"
        src="../assets/profile_img.jpg"
        @mouseleave="hoverImg(false)"
      />
      <div class="personalName">
        {{ personal.personalData.name.toUpperCase() }}
      </div>
      <div class="personalTitle">
        {{ personal.personalData.title }}
      </div>
    </div>
    <hr class="personalHr" />
    <div>
      <div class="personalHeader">KONTAKTA MIG</div>
      <BollHr />
      <div
        v-for="(contact, index) in personal.personalData.contacts"
        :key="index"
      >
        <div class="iconsText">
          <span v-if="contact.type === 'location'">
            <div><img class="icons" src="../assets/location.svg" /></div>
            {{ contact.value }}</span
          >
          <span v-else-if="contact.type === 'phone'"
            ><div><img class="icons" src="../assets/phone.svg" /></div>
            {{ contact.value }}</span
          >

          <span v-else-if="contact.type === 'email'">
            <div><img class="icons" src="../assets/mail.svg" /></div>
            <a
              class="iconTextLink"
              :href="`mailto:${contact.value}`"
              target="_blank"
              >{{ contact.value }}</a
            ></span
          >

          <span v-else-if="contact.type === 'github'">
            <div><img class="icons" src="../assets/github.svg" /></div>
            <a
              class="iconTextLink"
              :href="`http://${contact.value}`"
              target="_blank"
              >{{ contact.value }}</a
            ></span
          >
          <span v-else-if="contact.type === 'webpage'">
            <div><img class="icons" src="../assets/home2.svg" /></div>
            <a
              class="iconTextLink"
              :href="`http://${contact.value}`"
              target="_blank"
              >{{ contact.value }}</a
            ></span
          >
          <span v-else>
            <div><img class="icons" src="../assets/linkedin.svg" /></div>
            <a
              class="iconTextLink"
              :href="`http://${contact.value}`"
              target="_blank"
              >{{ contact.value }}</a
            ></span
          >
        </div>
      </div>
    </div>
    <div>
      <div class="personalHeader">OM MIG</div>
      <BollHr />
      <div @click="hoverTextT" class="omMigText">
        {{ personal.sections[0].content }}
      </div>
      <div v-if="omMig" class="omMigTextLarge">
        {{ personal.sections[0].content }}
        <button class="closeBtn" @click="hoverTextF">Stäng</button>
      </div>
    </div>
    <div class="mobil">
      <div class="personalHeader">FÄRDIGHETER</div>
      <BollHr />
      <!-- Skills -->
      <Skills str="HTML" pros="html" />
      <Skills str="CSS" pros="css" />
      <Skills str="JavaScript" pros="javascript" />
      <Skills str="React.js" pros="react" />
      <Skills str="Node.js" pros="node" />
      <Skills str="Vue.js" pros="vue" />
      <Skills str="Git" pros="git" />
      <Skills str="CMS" pros="cms" />
      <Skills str="Mongo DB" pros="mongodb" />
      <!-- End skills -->
      <hr class="personalHr" />
      <div class="version">Cv_Vue V.2.0.1</div>
      <div class="end"></div>
    </div>
  </div>
</template>

<script>
import { data } from '../data/data';
import BollHr from './bollHr';
import Skills from './skills';
export default {
  name: 'Personal',
  components: { BollHr, Skills },

  data() {
    return {
      personal: data,
      imgHover: false,
      omMig: false,
    };
  },
  methods: {
    hoverImg(bool) {
      this.imgHover = bool;
    },
    hoverTextT() {
      this.omMig = true;
    },
    hoverTextF() {
      this.omMig = false;
    },
  },
};
</script>

<style scoped>
.icons {
  width: 25px;
  filter: invert(1);
}

.iconsText {
  font-size: 10px;
  color: white;
  margin-left: 5px;
  margin-bottom: 10px;
  text-decoration: none;
}
.iconTextLink {
  text-decoration: none;
  color: white;
}
.personalContainer {
  width: 250px;
  min-height: 500px;
  background-color: #115e75;
  border-radius: 5px;
}
.personalImg {
  width: 145px;
  height: 145px;
  border-radius: 70px;
  margin-top: 25px;
}
.personalName {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
}
.personalTitle {
  font-size: 14px;
  color: white;
  margin-top: 2px;
}
.personalHeader {
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
}
.personalHr {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 160px;
}
.omMigText {
  text-align: left;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
}
.omMigTextLarge {
  width: 500px;
  height: 180px;
  position: absolute;
  top: 660px;
  left: 18px;
  background-color: white;
  color: black;
  text-align: left;
  padding: 10px;
  padding-top: 40px;
  z-index: 1000;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px #000000bf;
}
.closeBtn {
  width: 50px;
  height: 25px;
  border-radius: 13px;
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  background-color: #115e75;
  color: white;
  outline: none;
  cursor: pointer;
}
.end {
  padding-bottom: 20px;
}
.version {
  position: relative;
  top: 14px;
  font-size: 12px;
}
@media only screen and (max-device-width: 901px) {
  .personalContainer {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 150px;
    width: 95%;
  }

  .personalImg {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-top: 20px;
  }
  .personalName {
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
  }
  .personalHeader {
    color: white;
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
  .omMigText {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 280px;
  }
}
</style>
