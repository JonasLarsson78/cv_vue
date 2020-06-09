<template>
  <span>
    <span v-if="!this.next">
      <div class="cvContainer">
        <Personal />
        <div class="item">
          <Education />
          <Experience />
        </div>
        <div @click="nextPage(true)" class="next">
          Nästa sida
          <span
            ><img class="arrowImgNext" src="../assets/svg/arrow.svg" alt="logo"
          /></span>
        </div>
        <div class="footerLink">
          Koden till CV på
          <a
            class="footerLinkText"
            href="https://github.com/JonasLarsson78/cv_vue"
            target="_blank"
            >Github</a
          >
        </div>
        <div class="footerText">© 2020 Jonas Larsson All Rights Reserved</div>
      </div>
    </span>
    <span v-else>
      <div :class="next ? 'cvContainer2' : 'cvContainer'">
        <Personal />
        <div class="item">
          <Language />
          <AllSkills />
          <Hobby />
        </div>

        <div @click="nextPage(false)" class="next">
          <img
            class="arrowImgPrev"
            src="../assets/svg/arrow.svg"
            alt="logo"
          />Tillbaka
          <span></span>
        </div>
        <div class="footerLink">
          Koden till CV på
          <a
            class="footerLinkText"
            href="https://github.com/JonasLarsson78/cv_vue"
            target="_blank"
            >Github</a
          >
        </div>
        <div class="footerText">© 2020 Jonas Larsson All Rights Reserved</div>
      </div>
    </span>
  </span>
</template>

<script>
import Personal from './personal';
import Education from './education';
import Experience from './experience';
import Language from './language';
import AllSkills from './all_skills';
import Hobby from './hobby';
export default {
  name: 'Cv',
  components: {
    Personal,
    Education,
    Experience,
    Language,
    AllSkills,
    Hobby,
  },
  data() {
    return {
      next: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    nextPage(bool) {
      this.next = bool;
      this.scrollToTop();
    },
  },
};
</script>

<style scoped>
.cvContainer {
  display: flex;
  position: relative;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  width: 920px;
  min-height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px #000000bf;
  padding: 10px;
  padding-bottom: 180px;
  margin-bottom: 40px;
}
.cvContainer2 {
  display: flex;
  position: relative;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  width: 920px;
  min-height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px #000000bf;
  padding: 10px;
  padding-bottom: 180px;
  margin-bottom: 40px;
}
.item {
  width: 100%;
}
.footerText {
  position: absolute;
  font-size: 12px;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  color: #115e75;
  z-index: 100;
}
.footerLink {
  position: absolute;
  font-size: 12px;
  bottom: 23px;
  left: 50%;
  transform: translate(-50%);
  color: #115e75;
  z-index: 100;
}
.footerLinkText {
  text-decoration: none;
  color: #115e75;
  font-weight: bold;
}
.next {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  color: #115e75;
  cursor: pointer;
}
.next:hover {
  font-weight: bold;
}
.arrowImgNext {
  position: relative;
  top: 5px;
  left: 10px;
  width: 20px;
  transform: rotate(180deg);
  filter: #115e75;
}
.arrowImgPrev {
  position: relative;
  top: 5px;
  left: -10px;
  width: 20px;
  filter: #115e75;
}
@media only screen and (max-device-width: 901px) {
  .cvContainer {
    width: 360px;
    flex-direction: column;
    height: 2250px;
  }
  .cvContainer2 {
    width: 360px;
    flex-direction: column;
    height: 1150px;
  }
  .footerLink {
    bottom: 35px;
  }
}
</style>
