<template>
  <div class="landing">
    <!-- <img src="@/assets/CloudandRocket.svg" class="test" /> -->
    <div class="intro">
      <h2>
        Welcome to
        <span class="primary-highlight">Stratos</span>
      </h2>
      <h3>
        Redefining
        <span class="primary-highlight">startup discovery</span>
      </h3>
      <a href="#WII-wave-top" class=".scrollLink" v-smooth-scroll>
        <span class="learn">Learn More</span>
      </a>
    </div>
    <!-- <div class="graphic">
      <img src="@/assets/Cloud.svg" alt="cloud graphic" class="cloud" />
      <img src="@/assets/Rocket.svg" alt="rocket graphic" class="rocket" />
    </div>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.test
  width: 60rem
  bottom: 0%
  left: 0%
  position: absolute

.landing
  // height:  55vh
  // display: grid
  // grid-template-columns: 1fr
  // width: 100vw
  margin-bottom: -.1rem // gets rid of random line between the 2 elements
  max-width: 70rem
  margin-right: auto
  // position: relative



  & .intro
    color: white
    margin: 6rem 0
    // margin-right: auto
    padding-left: 10vw
    text-align: start
    display: flex
    flex-direction: column

    & h2
      font-size: 9.5rem
      line-height: 9rem
      margin-bottom: 3.5rem

      @media screen and (max-width: 31.25em)
        line-height: 6rem

    & h3
      font-size: 3.5rem
      line-height: 4rem
      margin-bottom: 5rem


    & a
      padding: 1.25rem 3.5rem
      border-radius: 10rem
      background-color: $c-primarygreen
      cursor: pointer
      transition: all .3s ease 0s
      align-self: flex-start
      font-family: inherit
      text-decoration: none

      &:hover
        background-color: lighten($c-primarygreen, 10%)

      & span
        color: white
        font-size: 2.5rem

  & .graphic

    & .cloud
      height: 100%
      width: 100%
      // position: relative

      z-index: 5

    & .rocket
      z-index: 10
      position: absolute
      top: 9rem
      right: 9rem

@media screen and (max-width: 31.25em)
  h2
    font-size: 7rem !important
    line-height: 7.5rem

  h3
    font-size: 2.8rem
    line-height: 3.2rem


@media screen and (max-width: 23.75em)
  h2
    font-size: 5.5rem !important
    line-height: 6rem
    margin-bottom: 2.5

  h3
    font-size: 2.6rem
    line-height: 3rem
    margin-bottom: 3.5rem
</style>
