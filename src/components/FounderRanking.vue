<template>
  <section class="wrapper" :style="cssHighlightColor">
    <svg viewBox="0 0 1442 226" class="wave" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 114.316C0 114.316 230.5 282.899 664.58 115.296C998 -39.1586 1238.32 -33.1486 1440 102.145L1441.55 225.5H0V114.316Z"
        :fill="highlightColor"
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
          <div class="wrapper">
            <div class="cards">
              <div class="card [ is-collapsed ]">
                <div class="card__inner [ js-expander ]">
                  <img
                    src="../assets/rankingCard1.svg"
                    alt="Incubators and Accelerators Graphic"
                  />
                  <h5>Incubators and Accelerators</h5>
                  <a>Read More</a>
                </div>
                <div class="card__expander">
                  <i class="fa fa-close [ js-collapser ]"></i>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquid, libero sequi. Nam voluptatem expedita sequi cum
                    ratione quisquam iusto qui velit similique reprehenderit sit
                    nihil temporibus, molestiae quasi atque corrupti
                    voluptatibus adipisci, consequatur, repellat iste optio
                    neque aliquam dolorum? Ipsam mollitia nostrum enim quo
                    exercitationem sint, odio nesciunt, et alias nobis nihil
                    corporis. Eligendi, vero ducimus repellat quod soluta
                    provident laudantium labore aliquid maxime? Odit velit,
                    explicabo harum iste, perspiciatis delectus in accusamus
                    placeat quidem accusantium molestiae illum, enim voluptatum
                    ex neque quos ratione ipsam cum. Odio perferendis possimus
                    quam, nisi fugiat dolorum saepe, laborum illum similique
                    nemo enim nam.
                  </p>
                </div>
              </div>

              <div class="card [ is-collapsed ]">
                <div class="card__inner [ js-expander ]">
                  <img
                    src="../assets/rankingCard2.svg"
                    alt="Incubators and Accelerators Graphic"
                  />
                  <h5>Competitions</h5>
                  <a>Read More</a>
                </div>
                <div class="card__expander">
                  <i class="fa fa-close [ js-collapser ]"></i>
                  Expander
                </div>
              </div>

              <div class="card [ is-collapsed ]">
                <div class="card__inner [ js-expander ]">
                  <img
                    src="../assets/rankingCard3.svg"
                    alt="Incubators and Accelerators Graphic"
                  />
                  <h5>Programs</h5>
                  <a>Read More</a>
                </div>
                <div class="card__expander">
                  <i class="fa fa-close [ js-collapser ]"></i>
                  Expander
                </div>
              </div>

              <div class="card [ is-collapsed ]">
                <div class="card__inner [ js-expander ]">
                  <img
                    src="../assets/rankingCard4.svg"
                    alt="Incubators and Accelerators Graphic"
                  />
                  <h5>Extracurriculars</h5>
                  <a>Read More</a>
                </div>
                <div class="card__expander">
                  <i class="fa fa-close [ js-collapser ]"></i>
                  Expander
                </div>
              </div>

              <div class="card [ is-collapsed ]">
                <div class="card__inner [ js-expander ]">
                  <img
                    src="../assets/rankingCard5.svg"
                    alt="Incubators and Accelerators Graphic"
                  />
                  <h5>Academics</h5>
                  <a>Read More</a>
                </div>
                <div class="card__expander">
                  <i class="fa fa-close [ js-collapser ]"></i>
                  Expander
                </div>
              </div>

              <div class="card [ is-collapsed ]">
                <div class="card__inner [ js-expander ]">
                  <img
                    src="../assets/rankingCard6.svg"
                    alt="Incubators and Accelerators Graphic"
                  />
                  <h5>Funds</h5>
                  <a>Read More</a>
                </div>
                <div class="card__expander">
                  <i class="fa fa-close [ js-collapser ]"></i>
                  Expander
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="ranking--card2">
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
          <div class="ranking--card2" id="temp" @click="test()">
            <img
              src="../assets/rankingCard6.svg"
              alt="Incubators and Accelerators Graphic"
            />
            <h5>Funds</h5>
            <a href="#">Read More</a>
          </div>-->
          <!-- <div
            class="ranking--card2"
            style="height: auto; transition: all .3s ease"
          >
            Research Park is an early-stage tech environment with lab
            facilities, innovation spaces, workshops, center for design, and
            maker labs. From this, the Accelerating Women and underRepresented
            Entrepreneurs funds women and minorities in entrepreneurship.
            Additionally, CEO Roundtable helps startups grow as it is a
            networking event to expand customers, and UIUC’s chapter of NSF
            I-corps startups receive up to $2,000 to participate in the customer
            discovery process of their innovation. Other miscellaneous items
            include tech transfer, legal, and accounting services that the
            university provides. The Intellectual Property Clinic helps student
            founders with patents and trademarks. Meanwhile, the Office of
            Technology Management Licensing also assists students to evaluate,
            patent, and license university’s IP. In support of the previous two
            resources, Alan Singleton Legal Firm students with IP or licensing
            university technology and technology transfer paperwork. This
            startup law firm gives a free first meeting for all students. On the
            accounting side, the College of Engineering is dedicated to helping
            student founders with taxes.
          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
window.$ = require('jquery');

export default {
  props: {
    uniName: {
      type: String,
      default: ''
    }
  },
  methods: {
    test() {
      document.querySelector('#temp').classList.toggle('testclass');
      // console.log('toggle');
    }
  },
  computed: {
    founderCards() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'founderCards'
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
  mounted() {
    var $cell = $('.card');
    // console.log($cell.find('.js-expander'));

    //open and close card when clicked on card
    $cell.find('.js-expander').click(function() {
      var $thisCell = $(this).closest('.card');

      if ($thisCell.hasClass('is-collapsed')) {
        $cell
          .not($thisCell)
          .removeClass('is-expanded')
          .addClass('is-collapsed')
          .addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');

        if ($cell.not($thisCell).hasClass('is-inactive')) {
          //do nothing
        } else {
          $cell.not($thisCell).addClass('is-inactive');
        }
      } else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
      }
    });

    //close card when click on cross
    $cell.find('.js-collapser').click(function() {
      var $thisCell = $(this).closest('.card');

      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');
    });
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
  //  // console.log(typeof this.founderCards);
  // }
  //   // opportunitiesText: {
  //   //   type: Array,
  //   //   default() {
  //   //     return [];
  //   //   }
  //   // }
  // },
  // beforeCreate() {
  //  // console.log(this.founderCards);
  // },
};
</script>

<style lang="sass" scoped>



.wave
  background: linear-gradient(white, white 99%, var(--highlightColor) 99%)
  margin-bottom: 0

.wrapper
  // padding-bottom: 8%

.info
  background-color: var(--highlightColor)
  padding: 5rem 12.5vw
  margin-top: -1.5rem

  @media screen and (max-width: 90em)
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
    // display: grid
    // grid-template-columns: repeat(auto-fit, minmax(20rem, 42rem))
    display: flex
    flex-flow: row wrap
    // align-items: stretch
    justify-content: center
    justify-items: center
    margin-bottom: 10rem


  &--card-1
    display: flex
    align-items: center
    max-width: 35rem
    min-height: 40rem

    flex-direction: column
    align-items: center
    padding: 2rem 2vw

    // &--2
    //   @media screen and (max-width: 105em) and (min-width: 52.5em)
    //     grid-column: 1 / 3
    //     max-width: 43rem


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
        color: var(--highlightColor)
        text-decoration: underline
        font-size: 3rem
        margin-bottom: 1.5rem

      & p
        font-weight: 500

.ranking

  &Card-wrapper
    // display: grid
    // // grid-template-columns: repeat(3, 1fr)
    // // grid-template-columns: repeat(3, auto-fit)
    // grid-template-columns: repeat(auto-fill, minmax(25rem, 42rem))
    // justify-content: center
    // height: 100%



  // &--card2
  //   margin: 4% 2vw
  //   background-color: white
  //   border-radius: 2rem
  //   padding: 4.5rem 2.5rem
  //   // width: 90%
  //   display: grid
  //   // grid-template-rows: 1fr min-content auto
  //   grid-template-rows: 1fr 10rem auto
  //   // flex-direction: column
  //   align-items: center
  //   // row-gap: 1.5rem
  //   justify-content: space-around
  //   min-width: 24rem
  //   height: 45rem
  //   transition: all .3s ease-in

  //   & h5
  //     color: var(--highlightColor)
  //     font-size: 3.3rem
  //     line-height: 1.3
  //     padding: 1rem 0
  //     // align-self: start
  //     // margin-bottom: auto

  //   & a
  //     color: black
  //     font-size: 2rem
  //     font-weight: 500

  //   & img
  //     width: 100%

.testclass
  height: 50rem !important
  position: fixed
  top: 30%
  right: 50%

// .wrapper
//   margin: 5em 12.5vw
//   // max-width: 1000px

//   background-color: #fff
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06)


//Grid Container
.cards
  // padding: 15px
  display: flex
  flex-flow: row wrap
  justify-content: center


//Cards
.card
  margin: 15px
  width: calc((100% / 3) - 30px)
  transition: all 0.2s ease-in-out
  max-width: 50rem
  min-width: 35rem

  //media queries for stacking cards
  @media screen and (max-width: 991px)
    width: calc((100% / 2) - 30px)


  @media screen and (max-width: 767px)
    width: 100%


  &:hover
    .card__inner
      // background-color: $turquoise
      transform: scale(1.05)



  &__inner
    margin: 2% 1vw
    background-color: white
    border-radius: 2rem
    padding: 4.5rem 2.5rem
    // width: 90%
    display: grid
    // grid-template-rows: 1fr min-content auto
    grid-template-rows: 1fr 10rem auto
    // flex-direction: column
    align-items: center
    // row-gap: 1.5rem
    justify-content: space-around
    min-width: 24rem
    height: 45rem
    transition: all .3s ease-in
    cursor: pointer

    & h5
      color: var(--highlightColor)
      font-size: 3.3rem
      line-height: 1.3
      padding: 1rem 0
      // align-self: start
      // margin-bottom: auto

    & a
      color: black
      font-size: 2rem
      font-weight: 500
      text-decoration: underline

    & img
      width: 100%
      max-width: 30rem
      justify-self: center
    // width: 100%
    // // margin: 4% 2vw
    // border-radius: 2rem
    // padding: 4.5rem 2.5rem
    // // width: 90%
    // display: grid
    // grid-template-rows: 1fr 12rem auto
    // align-items: center
    // justify-content: space-around
    // justify-items: center
    // min-width: 24rem
    // height: 45rem
    // cursor: pointer

    // background-color: white
    // color: $light-gray
    // font-size: 1.5em
    // text-align: center

    // transition: all 0.2s ease-in-out

    // & h5
    //   // color: var(--highlightColor)
    //   color: $c-UIUCOrange
    //   font-size: 3.3rem
    //   line-height: 3.4rem
    //   padding: 1rem 0

    // & a
    //   color: black
    //   font-size: 2rem
    //   font-weight: 500

    // & img
    //   width: 90%

    &:after
      transition: all 0.3s ease-in-out
      // background-color: red


    .fa
      width: 100%
      margin-top: 0.25em



  //Expander
  &__expander
    transition: all 0.2s ease-in-out
    background-color: $slate
    width: 100%
    position: relative
    border-radius: 2rem

    display: flex
    justify-content: center
    align-items: center

    text-transform: uppercase
    color: $light-gray
    font-size: 1.5em

    .fa
      font-size: 0.75em
      position: absolute
      top: 10px
      right: 10px
      cursor: pointer

      &:hover
        opacity: 0.9




  &.is-collapsed
    .card__inner
      &:after
        content: ''
        opacity: 0


    .card__expander
      max-height: 0
      min-height: 0
      overflow: hidden
      margin-top: 0
      opacity: 0


      & p
        max-width: 70ch
        text-transform: none
        font-size: 1.9rem


  &.is-expanded
    .card__inner
      // background-color: $turquoise

      &:after
        content: ''
        opacity: 1
        display: block
        height: 0
        width: 0
        position: absolute
        bottom: -30px
        left: calc(50% - 15px)
        border-left: 15px solid transparent
        border-right: 15px solid transparent
        border-bottom: 15px solid #333a45


      //folder open icon
      .fa:before
        content: '\f115'



    .card__expander
      max-height: 1000px
      min-height: 200px
      overflow: visible
      margin-top: 30px
      opacity: 1
      padding: 2rem
      text-align: center

      & p
        max-width: 70ch
        text-transform: none
        font-size: 1.9rem


    &:hover
      .card__inner
        transform: scale(1)




  &.is-inactive
    .card__inner
      pointer-events: none
      opacity: 0.5


    &:hover
      .card__inner
        background-color: $gray
        transform: scale(1)





//Expander Widths

//when 3 cards in a row
@media screen and (min-width: 992px)
  .card:nth-of-type(3n + 2) .card__expander
    margin-left: calc(-100% - 30px)

  .card:nth-of-type(3n + 3) .card__expander
    margin-left: calc(-200% - 60px)

  .card:nth-of-type(3n + 4)
    clear: left

  .card__expander
    width: calc(300% + 60px)



//when 2 cards in a row
@media screen and (min-width: 768px) and (max-width: 991px)
  .card:nth-of-type(2n + 2) .card__expander
    margin-left: calc(-100% - 30px)

  .card:nth-of-type(2n + 3)
    clear: left

  .card__expander
    width: calc(200% + 30px)
</style>
