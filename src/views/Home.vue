<template>
  <div class="home">
    <!--  eslint-disable-next-line no-use-before-define -->
    <NavBar bg-color="#103f4a" transparent="not"></NavBar>
    <main>
      <header>
        <div class="wrapper">
          <Welcome></Welcome>
          <img src="@/assets/CloudandRocket.svg" class="test" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="curve-container__curve"
          viewBox="0 0 1440 179"
          enable-background="new 0 0 1440 179"
          id="WII-wave-top"
        >
          <path
            d="M0 99.7422C0 99.7422 230.5 246.895 664.58 100.597C998 -34.223 1238.32 -28.977 1440 89.1182V179H0L0 99.7422Z"
            fill="#46C894"
          />
        </svg>
      </header>
      <WhatIsIt class="test2"></WhatIsIt>
      <HowItWorks></HowItWorks>
      <LearnMoreSec></LearnMoreSec>
      <TrustedBy></TrustedBy>
    </main>
    <Footer></Footer>
    <!-- <img alt="Vue logo" src="../assets/LargeIcon.svg" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HowItWorks from '../components/Home/HowItWorks';
import LearnMoreSec from '../components/Home/LearnMoreSec';
import TrustedBy from '../components/Home/TrustedBy';
import WhatIsIt from '../components/Home/WhatIsIt';
import Welcome from '../components/Home/Welcome';

export default {
  name: 'Home',
  components: {
    HowItWorks,
    LearnMoreSec,
    TrustedBy,
    WhatIsIt,
    Welcome
  },
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
  // mounted() {
  //   const contentful = require('contentful');
  //   const client = contentful.createClient({
  //     // This is the space ID. A space is like a project folder in Contentful terms
  //     space: 'developer_bookshelf',
  //     // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  //     accessToken: '0b7f6x59a0'
  //   });
  //   // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  //   client
  //     .getEntry('5PeGS2SoZGSa4GuiQsigQu')
  //     .then(entry =>// console.log(entry))
  //     .catch(err =>// console.log(err));
  // }
};
</script>

<style lang="sass" scoped>
.test
  width: 85%
  // justify-self: center
  transform: translateY(5rem)
  // z-index:

  @media screen and (max-width: 92.5em)
    transform: translateY(10rem)

  @media screen and (max-width: 71.875em)
    display: none

.test2
  // z-index: 10

.curve-container__curve
  // z-index: 15
  margin-bottom: -2rem
  margin-top: -8rem
  z-index: 20
  position: relative
  // margin-top:

.home
  display: grid
  grid-template-rows: auto 1fr auto

header
  background-color: $c-darkblue
  position: relative
  // z-index: -10
.wrapper
  display: grid
  grid-template-columns: 5fr 4fr
  z-index: -5

  @media screen and (max-width: 71.875em)
    display: inline-block
    width: 100%
</style>
