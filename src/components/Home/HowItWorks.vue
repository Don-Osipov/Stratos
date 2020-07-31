<template>
  <div class="HIW-wrapper">
    <!-- <img src="@/assets/BlueWave2.png" alt="wave" class="wave" />
    <img src="@/assets/WhiteWave3.png" alt="wave" class="wave2" />-->
    <svg
      viewBox="0 0 1440 270"
      enable-background="new 0 0 1440 270"
      class="curve-container__curve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 99.7422C0 99.7422 230.5 246.895 664.58 100.597C998 -34.223 1238.32 -28.977 1440 89.1182V251.5H0L0 99.7422Z"
        fill="#103F4A"
      />
      <path
        d="M0 182.742C0 182.742 230.5 329.895 664.58 183.597C998 48.777 1238.32 54.023 1440 172.118V270H0L0 182.742Z"
        fill="white"
      />
    </svg>

    <h4>How it works</h4>
    <div class="HIW">
      <div class="HIW-card">
        <img
          src="@/assets/Discover.svg"
          alt="Discover Graphic"
          class="graphic-img"
        />
        <h5>Discover</h5>
        <p>
          Discover the next generation of university startups. With Stratos,
          we’ll help you uncover the programs, accelerators, incubators, and
          competitions that produce the most promising university startups.
        </p>
      </div>
      <div class="HIW-card">
        <img
          src="@/assets/Connect.svg"
          alt="Connect Graphic"
          class="graphic-img"
        />
        <h5>Connect</h5>
        <p>
          Connect with leaders, administrators, and founders from the Stratos
          list of universities! We provide an extensive network across the
          country and help you build lasting relationships.
        </p>
      </div>
      <div class="HIW-card HIW-card--develop">
        <img
          src="@/assets/Develop.svg"
          alt="Develop Graphic"
          class="graphic-img"
        />
        <h5>Develop</h5>
        <p>
          Develop critical relationships with key partners at universities to
          insert yourself into their development pipeline and discover the next
          big startup!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.HIW-wrapper
  // padding: 6rem 0rem
  width: 100vw
  color: $c-darkblue
  background-color: white
  position: relative

.curve-container__curve
  // height: 17vw
  background: linear-gradient($c-primarygreen, $c-primarygreen 97%, white 97%)
  // display: block
  // width: 100vw

.wave
  position: absolute
  left: 0
  width: 100%
  // height: 100%
  z-index: -100
  top: -9.5rem

.wave2
  position: absolute
  width: 100%
  // height: 100%
  z-index: -99
  left: 0
  top: -4rem

.graphic-img
  height: 20rem


h4
  font-size: 6rem
  margin-top: 2.5rem
  margin-bottom: 5rem
  padding: 0 12.5vw
  line-height: 6rem

  @media screen and (max-width: 63.125em)
    padding: 0 5vw
    margin-bottom: 2rem
    font-size: 5.5rem

.HIW
  padding: 0 2vw
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(30rem, 42rem))
  align-items: center
  justify-content: center
  justify-items: center

  @media screen and (max-width: 63.125em)
    padding: 0 5vw
  // grid-gap: 2vw
  // display: flex
  // align-content: space-around
  // flex-wrap: wrap
  // align-content: space-around

    width: 100%

// .test
//   grid-column-start: span 2

.HIW-card
  padding: 2rem 2vw
  width: 100%
  max-width: 42rem

  display: flex
  flex-direction: column
  align-items: center


  & h5
    font-size: 3rem

  & p
    font-weight: 500

  &--develop
    @media screen and (max-width: 82.2em) and (min-width: 52.5em)
      grid-column: 1 / 3
</style>
