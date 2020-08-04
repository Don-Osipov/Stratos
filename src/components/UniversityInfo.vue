<template>
  <div>
    <section class="info">
      <div class="top-row" id="top-row">
        <div class="fastFacts">
          <h4>Fast Facts</h4>
          <p class="fastfact">{{ fastFacts[0] }}</p>
          <p class="fastfact">{{ fastFacts[1] }}</p>
          <p class="fastfact">{{ fastFacts[2] }}</p>
          <p class="fastfact">{{ fastFacts[3] }}</p>
        </div>
        <img
          :src="logoImageUrl"
          alt="University of Illinois Logo"
          class="UIUCLogo"
        />
      </div>
      <div class="bot-row">
        <img
          :src="uniImageUrl"
          alt="University of Illinois Image"
          class="UIUCImage"
        />
        <div class="opportunities">
          <h4>Opportunities for VCs</h4>
          <!-- <h4>Opportunities for VCs</h4> -->
          <p class="opportunity">{{ opportunitiesText[0] }}</p>
          <p class="opportunity">{{ opportunitiesText[1] }}</p>
        </div>
      </div>
    </section>
    <section class="info-phone">
      <div class="fastFacts">
        <h4>Fast Facts</h4>
        <p class="fastfact">{{ fastFacts[0] }}</p>
        <p class="fastfact">{{ fastFacts[1] }}</p>
        <p class="fastfact">{{ fastFacts[2] }}</p>
        <p class="fastfact">{{ fastFacts[3] }}</p>
      </div>
      <img
        :src="logoImageUrl"
        alt="University of Illinois Logo"
        class="UIUCLogo"
      />
      <img
        :src="uniImageUrl"
        alt="University of Illinois Image"
        class="UIUCImage"
      />
      <div class="opportunities">
        <h4>Opportunities for VCs</h4>
        <p class="opportunity">{{ opportunitiesText[0] }}</p>
        <p class="opportunity">{{ opportunitiesText[1] }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    fastFacts() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'fastFacts'
      });
    },
    opportunitiesText() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'opportunitiesForVC'
      });
    },
    fullUniversityName() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'fullUniName'
      });
    },
    logoImageUrl() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'logoImgUrl'
      });
    },
    uniImageUrl() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'uniImgUrl'
      });
    }
  },
  props: {
    uniName: {
      type: String,
      default: ''
    }
  }
  // mounted() {
  //   console.log(this.logoImageUrl);
  //   console.log(this.uniImageUrl);
  //   console.log('TESTING');
  //   console.log(
  //     this.$store.getters.getSpecificContent({
  //       uniName: this.uniName,
  //       contentName: 'logoImgUrl'
  //     })
  //   );
  // },
  // data() {
  //   return {
  //     fastFacts: this.$store.getters.getSpecificContent({
  //       uniName: 'UIUC',
  //       contentName: 'fastFacts'
  //     })
  //   };
  // created() {
  // console.log(
  //   this.$store.getters.getSpecificContent({
  //     uniName: 'UIUC',
  //     contentName: 'fastFacts'
  //   })
  // );
  // console.log(this.$store.state.universities);
  // console.log(this.$store.state.universities.UIUC.fastFacts);
  // console.log(this.$store.state.universities);
  // console.log(this.$store.state.universities['UIUC']);
  // console.log(this.$store.getters.test);
  // console.log(this.funFacts);
  // }

  // created() {
  //   // console.log(this.$store.getters.getUniversity('UIUC'));
  //   console.log(this.$store.getters.getUniversities);
  // }
  // methods: {
  //   test() {
  //     // console.log(this.fastFacts);
  //     // console.log(this.opportunitiesText);
  //   }
  // }
  // mounted() {
  //   // this.limitFunc();
  //   console.log(this.fastFacts);
  // }
  // data() {
  //   return {
  //     botRowNode,
  //     topRowNode
  //   }
  // },
  // methods: {
  //   limitFunc() {
  //     window.addEventListener('resize', this.limitFunc);
  //     window.addEventListener('onload', this.limitFunc);
  //     if (window.innerWidth < 1048) {
  //       let botRow = document.querySelector('.bot-row');
  //       let topRow = document.querySelector('.top-row');
  //       this.botRowNode = botRow
  //       this.topRowNode = topRow
  //       this.unwrap(botRow);
  //       this.unwrap(topRow);
  //     }
  //   },
  //   unwrap(node) {
  //     if (node) node.replaceWith(...node.childNodes);
  //   },
  //   bringBack(parentNode, nodes) {
  //     if (nodes && parentNode) {
  //       removeAllChildNodes(parentNode)
  //       nodes.forEach(element => {
  //         parentNode.appendChild(element)
  //       });
  //     }
  //   },
  //   removeAllChildNodes(parent) {
  //     while (parent.firstChild) {
  //       parent.removeChild(parent.firstChild);
  //     }
  //   }
  // }
};
</script>

<style lang="sass" scoped>

.info-phone
  display: none

  @media screen and (max-width: 65.5em)
    display: grid
    // grid-template-columns: repeat(12, 1fr)
    font-weight: 500
    text-align: left
    justify-content: center
    justify-items: center
    padding: 5rem 0
    font-size: 1.8rem
    grid-template-column: 1fr
    grid-template-rows: repeat(4, auto)
    text-align: start
    margin: 0 5vw
    width: 90vw

  & .fastFacts
    max-width: 65ch


  & .UIUCLogo
    width: 80vw
    padding: 3rem 0
    margin-top: -1rem

  & .UIUCImage
    justify-self: center
    grid-row: 4 / 5

  & .opportunities
    max-width: 65ch
    grid-row: 3 / 4


  & h4
    color: $c-UIUCOrange
    font-size: 4rem
    line-height: 5rem
    margin-bottom: 1.5rem

  & p
    margin-bottom: 2rem
    font-size: 1.8rem
    color: black


.info
  display: grid
  grid-template-columns: 2fr 3fr
  grid-template-rows: 1fr 2fr
  // grid-template-columns: repeat(12, 1fr)
  font-weight: 500
  text-align: left
  justify-items: center
  padding: 5rem 0
  margin: 0 5vw
  font-size: 1.8rem
  // width: 100rem
  // row-gap: 2rem

  @media screen and (max-width: 65.5em)
    display: none

.fastFacts
  max-width: 55ch


.UIUCLogo
  width: 40vw

.UIUCImage


.opportunities
  max-width: 70ch


h4
  color: $c-UIUCOrange
  font-size: 5rem

p
  margin-bottom: 1.5rem
  font-size: 1.8rem
  color: black



.bot-row
  grid-column: 1 / 3
  grid-row: 2 / 3
  display: grid
  grid-template-columns: auto 1fr
  grid-gap: 4rem
  align-items: center

.top-row
  grid-column: 1 / 3
  grid-row: 1 / 2
  display: grid
  grid-template-columns: 1fr auto
  grid-gap: 4rem
  align-items: center




.UIUCImage
  max-height: 50rem
  justify-self: start

.UIUCLogo
  max-width: 50rem
  height: auto
</style>
