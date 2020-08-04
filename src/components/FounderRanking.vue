<template>
  <section class="wrapper">
    <svg viewBox="0 0 1442 226" class="wave" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 114.316C0 114.316 230.5 282.899 664.58 115.296C998 -39.1586 1238.32 -33.1486 1440 102.145L1441.55 225.5H0V114.316Z"
        fill="#EE5239"
      />
    </svg>
    <div class="info">
      <div class="founder">
        <h4>Where to Find Founders</h4>
        <!-- <h4>{{ this.$store.state.counter }}</h4> -->
        <!-- <h4>{{ founderCards }}</h4> -->
        <div class="founderCard-wrapper">
          <!-- <div>{{ founderCards }}</div> -->
          <!-- <div
            class="founder--card-1"
            v-for="(item, index) in founderCards"
            :key="index"
          >
            <div class="founder--card-1__number">1.</div>
            <div class="founder--card-1__inner">
              <h5>{{ item[index].title }}</h5>
              <p>{{ item[index].info }}</p>
            </div>
          </div>-->
          <div class="founder--card-1">
            <div class="founder--card-1__number">1.</div>
            <div class="founder--card-1__inner">
              <h5>{{ founderCards[0].title }}</h5>
              <p>{{ founderCards[0].info }}</p>
            </div>
          </div>
          <div class="founder--card-1">
            <div class="founder--card-1__number">2.</div>
            <div class="founder--card-1__inner">
              <h5>{{ founderCards[1].title }}</h5>
              <p>{{ founderCards[1].info }}</p>
            </div>
          </div>
          <div class="founder--card-1 founder--card-1--2">
            <div class="founder--card-1__number">3.</div>
            <div class="founder--card-1__inner">
              <h5>{{ founderCards[2].title }}</h5>
              <p>{{ founderCards[2].info }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ranking">
        <h4>Ranking of Entrepreneur&shy;ship at UIUC</h4>
        <div class="rankingCard-wrapper">
          <div class="ranking--card2">
            <img
              src="../assets/rankingCard1.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Incubators and Accelerators</h5>
            <a href="#">Read More</a>
          </div>
          <div class="ranking--card2">
            <img
              src="../assets/rankingCard2.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Competitions</h5>
            <a href="#">Read More</a>
          </div>
          <div class="ranking--card2">
            <img
              src="../assets/rankingCard3.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Programs</h5>
            <a href="#">Read More</a>
          </div>
          <div class="ranking--card2">
            <img
              src="../assets/rankingCard4.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Extracurriculars</h5>
            <a href="#">Read More</a>
          </div>
          <div class="ranking--card2">
            <img
              src="../assets/rankingCard5.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Academics</h5>
            <a href="#">Read More</a>
          </div>
          <div class="ranking--card2">
            <img
              src="../assets/rankingCard6.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Funds</h5>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    uniName: {
      type: String,
      default: ''
    }
  },
  computed: {
    founderCards() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'founderCards'
      });
    }
  },
  mounted() {
    try {
      console.log(this.founderCards[0]);
    } catch (error) {
      console.log('ERROR');
      console.log(error);
    }
  }
  // props: ['founderCards'],
  // props: {
  //   founderCards: {
  //     type: Object,
  //     default() {
  //       return [];
  //     }
  //   }
  // },
  // created() {
  //   console.log(typeof this.founderCards);
  // }
  //   // opportunitiesText: {
  //   //   type: Array,
  //   //   default() {
  //   //     return [];
  //   //   }
  //   // }
  // },
  // beforeCreate() {
  //   console.log(this.founderCards);
  // },
};
</script>

<style lang="sass" scoped>
.wave
  background: linear-gradient(white, white 99%, $c-UIUCOrange 99%)
  margin-bottom: 0

.wrapper
  // padding-bottom: 8%
  width: 100vw

.info
  background-color: $c-UIUCOrange
  padding: 5rem 12.5vw
  margin-top: -1.5rem

  @media screen and (max-width: 65.5em)
    padding: 5rem 5vw
    overflow-wrap: break-word
    hyphens: manual





h4
  color: white
  font-size: 5rem
  margin-bottom: 3rem
  line-height: 6rem

  @include respond(tab-point)
    font-size: 4.25rem

.founder

  &Card-wrapper
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(20rem, 42rem))
    align-items: center
    justify-content: center
    justify-items: center
    margin-bottom: 10rem


  &--card-1
    display: flex
    align-items: center
    height: 100%

    flex-direction: column
    align-items: center
    padding: 2rem 2vw

    &--2
      @media screen and (max-width: 105em) and (min-width: 52.5em)
        grid-column: 1 /3
        max-width: 43rem


    &__number
      color: white
      font-size: 4rem
      font-weight: 600
      width: 100%

    &__inner
      background-color: white
      border-radius: 2rem
      padding: 5rem 4rem
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      justify-content: flex-start

      & h5
        color: $c-UIUCOrange
        text-decoration: underline
        font-size: 3rem
        margin-bottom: 1.5rem

      & p
        font-weight: 500

.ranking

  &Card-wrapper
    display: grid
    // grid-template-columns: repeat(3, 1fr)
    // grid-template-columns: repeat(3, auto-fit)
    grid-template-columns: repeat(auto-fill, minmax(25rem, 42rem))
    justify-content: center
    height: 100%



  &--card2
    margin: 4% 2vw
    background-color: white
    border-radius: 2rem
    padding: 6rem 2.5rem
    // width: 90%
    display: grid
    grid-template-rows: 40% auto auto
    grid-template-rows: auto 1fr auto
    // flex-direction: column
    align-items: center
    // row-gap: 1.5rem
    justify-content: space-around
    min-width: 24rem

    & h5
      color: $c-UIUCOrange
      font-size: 3.3rem
      line-height: 1.3
      padding: 1rem 0

    & a
      color: black
      font-size: 2rem
      font-weight: 500

    & img
      width: 100%
</style>
