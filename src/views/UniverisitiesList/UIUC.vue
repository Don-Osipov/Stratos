<template>
  <div class="UIUC">
    <NavBar
      bg-color="#EE5239"
      tx-color="white"
      logo-color="#ffffff"
      class="navbar"
    ></NavBar>

    <main>
      <svg
        viewBox="0 0 1440 161"
        xmlns="http://www.w3.org/2000/svg"
        class="topwave"
      >
        <path
          d="M1440 113C1279 163.227 1156 196 707.5 89.7273C329.969 0.270966 151.5 46.7727 0 138V6.10352e-05H1440V113Z"
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
          fill="#EE5239"
        />
      </svg>
    </main>

    <Footer bg-color="#EE5239" logo-color="white"></Footer>
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
    // console.log(to);
    // console.log(from);
    // console.log(next);

    await store.dispatch('addUniversity', {
      name: 'UIUC', // THIS NEEDS TO BE CHANGED
      contentfulID: '7H5uEmao3VFYiKeeiUtw9D' // THIS NEEDS TO BE CHANGED
      // content: {
      //   primaryColor: '',
      //   uniName: '',
      //   fastFacts: [],
      //   logoImgUrl: '',
      //   uniImgUrl: '',
      //   opportunitiesForVC: [],
      //   founderCards: []
      // }
    });
    next();
  },
  // data() {
  //   return {};
  // },
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
    }
  },
  created() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');

    // this.$content.getEntry('7H5uEmao3VFYiKeeiUtw9D').then(entry => {
    //   console.log(entry);
    //   // logs the entry metadata
    //   // console.log(entry.sys);
    //
    //   // logs the field with ID titl
    //   //

    //   // // console.log(this.opportunitiesForVC);
    //   // // console.log(temp);

    // });
  }
  // created() {
  //   console.log(this.$content);
  // this.$content
  //   .getAssets()
  //   .then(function(assets) {
  //     // console.log(assets);
  //     assets.items.forEach((asset, index) => {
  //       let imageURL = 'https:' + asset.fields.file.url;
  //       // console.log(imageURL);
  //     });
  //     // assets.items.map(function(asset) {
  //     //   var imageURL = 'https:' + asset.fields.file.url;
  //     //   console.log(imageURL);
  //     // });
  //   })
  //   .catch(function(e) {
  //     // console.log(e);
  //   });
  //   // console.log(this.founderCards);
  // }
};
</script>

<style lang="sass" scoped>

@media screen and (max-width: 55em)
  .topwave
    display: none
  main
    margin-top: 8rem

.navbar
  margin-bottom: 0
  position: absolute
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
  color: $c-UIUCOrange

  @media screen and (max-width: 65.5em)
    font-size: 4.8rem
    padding: 0 .5rem


.wave2
  background: linear-gradient(white, white 95%, $c-UIUCOrange 95%)
  margin-bottom: -1rem
</style>
