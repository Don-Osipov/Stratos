<template>
  <div class="UIUC" :style="cssHighlightColor">
    <NavBar
      :bg-color="highlightColor"
      tx-color="white"
      logo-color="#ffffff"
      transparent="not"
      class="navbar"
    ></NavBar>

    <main>
      <svg
        class="topwave"
        viewBox="0 0 1440 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 56.9998C1272.5 81.9998 1164 81.9998 707.5 33.7272C321.667 -7.07277 151.5 -9.22754 0 81.9998V0H1440V56.9998Z"
          fill="#EE5239"
        />
      </svg>

      <h3 class="title">{{ fullUniversityName }}</h3>
      <UniversityInfo :uni-name="uniName"></UniversityInfo>
      <!-- <UniversityInfo
        :fast-facts="fastFacts"
        :opportunities-text="opportunitiesForVC"
      ></UniversityInfo>-->
      <FounderRanking :uni-name="uniName"></FounderRanking>
      <!-- <FounderRanking
        v-if="!(founderCards === undefined) || !(founderCards.length == 0)"
        :founder-cards="founderCards"
      ></FounderRanking>-->
      <Top5Startups :uni-name="uniName"></Top5Startups>
      <svg
        class="wave2"
        viewBox="0 0 1440 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 0C1440 0 1129.5 60.8631 771 26.1824C412.5 -8.49835 201.684 -12.3628 0 37.8173V94.5H1440L1440 0Z"
          :fill="highlightColor"
        />
      </svg>
    </main>

    <Footer :bg-color="highlightColor" logo-color="white"></Footer>
  </div>
</template>

<script>
import UniversityInfo from '@/components/UniversityInfo.vue';
import FounderRanking from '@/components/FounderRanking.vue';
import Top5Startups from '@/components/Top5Startups.vue';
import { store } from '@/store/store.js';
export default {
  name: 'Universities',
  data() {
    return {
      uniName: 'UIUC' // THIS NEEDS TO BE CHANGED
    };
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch('addUniversity', {
      name: 'UIUC', // THIS NEEDS TO BE CHANGED
      contentfulID: '7H5uEmao3VFYiKeeiUtw9D' // THIS NEEDS TO BE CHANGED
    });
    next();
  },
  components: {
    UniversityInfo,
    FounderRanking,
    Top5Startups
  },
  computed: {
    fullUniversityName() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'fullUniName'
      });
    },
    highlightColor() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'highlightColor'
      });
    },
    cssHighlightColor() {
      return {
        '--highlightColor': this.highlightColor
      };
    }
  },
  created() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>

<style lang="sass" scoped>

@media screen and (max-width: 55em)
  // .topwave
  //   display: none
  main
    margin-top: -.1rem

.navbar
  margin-bottom: 0
  // position: absolute
  width: 100vw

main
  width: 100vw
//   z-index: 50

// .wave1
//   z-index: -25

.UIUC
  display: grid
  grid-template-rows: 1fr auto

.orangeWave1
  position: absolute
  top: -3vw
  left: 0
  width: 100vw
  height: auto
  z-index: -1
  // height: 2rem

.title
  font-size: 8rem
  color: var(--highlightColor)

  @media screen and (max-width: 65.5em)
    font-size: 4.8rem
    padding: 0 .5rem


.wave2
  background: linear-gradient(white, white 95%, var(--highlightColor) 95%)
  margin-bottom: -1rem
</style>
