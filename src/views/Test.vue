<template>
  <div class="wrapper">
    <div class="cards">
      <div class="card [ is-collapsed ]">
        <div class="card__inner [ js-expander ]">
          <img
            src="../assets/rankingCard1.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Incubators and Accelerators</h5>
          <a href="#">Read More</a>
        </div>
        <div class="card__expander">
          <i class="fa fa-close [ js-collapser ]"></i>
          Expander
        </div>
      </div>

      <div class="card [ is-collapsed ]">
        <div class="card__inner [ js-expander ]">
          <img
            src="../assets/rankingCard2.svg"
            alt="Incubators and Accelerators Graphic"
          />
          <h5>Competitions</h5>
          <a href="#">Read More</a>
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
          <a href="#">Read More</a>
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
          <a href="#">Read More</a>
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
          <a href="#">Read More</a>
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
          <a href="#">Read More</a>
        </div>
        <div class="card__expander">
          <i class="fa fa-close [ js-collapser ]"></i>
          Expander
        </div>
      </div>
    </div>
  </div>
</template>

<script>
window.$ = require('jquery');
// window.jQuery = require('jquery');
export default {
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
};
</script>

<style lang="sass" scoped>
// * {
//   box-sizing: border-box
// }

// body {
//   background: $light-gray
//   font-family: 'Slabo 27px', serif;
//   color: $slate;
// }

.wrapper
  margin: 5em 12.5vw
  // max-width: 1000px

  background-color: #fff
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06)


//Grid Container
.cards
  padding: 15px
  display: flex
  flex-flow: row wrap


//Cards
.card
  margin: 15px
  width: calc((100% / 3) - 30px)
  transition: all 0.2s ease-in-out

  //media queries for stacking cards
  @media screen and (max-width: 991px)
    width: calc((100% / 2) - 30px)


  @media screen and (max-width: 767px)
    width: 100%


  &:hover
    .card__inner
      background-color: $turquoise
      transform: scale(1.05)



  &__inner
    width: 100%
    // margin: 4% 2vw
    border-radius: 2rem
    padding: 4.5rem 2.5rem
    // width: 90%
    display: grid
    grid-template-rows: 1fr 10rem auto
    align-items: center
    justify-content: space-around
    min-width: 24rem
    height: 45rem
    cursor: pointer

    background-color: $gray
    color: $light-gray
    font-size: 1.5em
    text-align: center

    transition: all 0.2s ease-in-out

    & h5
      // color: var(--highlightColor)
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

    &:after
      transition: all 0.3s ease-in-out


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



  &.is-expanded
    .card__inner
      background-color: $turquoise

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
