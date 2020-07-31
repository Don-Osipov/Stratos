<template>
  <div class="WII-wrapper" id="WII-wrapper">
    <!-- <img src="@/assets/GreenWave1.png" alt="wave" class="wave" /> -->
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      class="curve-container__curve curve-three"
      viewBox="0 0 1440 68"
      enable-background="new 0 0 1440 68"
    >
      <path
        d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8"
        transform="translate(0-1977)"
      ></path>
    </svg>-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="curve-container__curve"
      viewBox="0 0 1440 179"
      enable-background="new 0 0 1440 179"
    >
      <path
        d="M0 99.7422C0 99.7422 230.5 246.895 664.58 100.597C998 -34.223 1238.32 -28.977 1440 89.1182V179H0L0 99.7422Z"
        fill="#46C894"
      />
    </svg>

    <div class="content-wrapper">
      <img src="@/assets/LargeIcon.svg" alt="Large Stratos Icon" />
      <div class="WII-info">
        <h3>
          What is
          <span>Stratos?</span>
        </h3>
        <p>
          Stratos enables you to tap into the goldmine of innovation that is
          college entrepreneurship. By providing unique insight into the
          entrepreneurial landscapes of 30 top universities, we help you develop
          your investment pipeline faster, better, and stronger.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.WII-wrapper
  background: linear-gradient($c-darkblue, $c-primarygreen 1%) // fixes random line at bottom of element
  color: $c-darkblue
  width: 100vw
  margin-bottom: -.1rem

.content-wrapper
  display: grid
  grid-template-columns: auto 1fr
  justify-items: center
  align-items: center
  padding: 0 12.5vw
  padding-bottom: 4rem

  @media screen and (max-width: 60em)
    padding: 0 5vw
    padding-bottom: 4rem

  @media screen and (max-width: 50em)
    grid-template-columns: 1fr
    grid-template-rows: 1fr auto

.curve-container__curve
  // height: 12.4vw
  background: linear-gradient($c-darkblue 0%, $c-darkblue 95%, $c-primarygreen 95%)

.WII-info
  display: flex
  flex-direction: column
  width: 100%
  max-width: 60rem
  // justify-self: start
  padding-left: 4rem
  @media screen and (max-width: 50em)
    padding-left: 0
    padding-top: 3rem

  & h3
    font-size: 7rem
    line-height: 1
    margin-bottom: 3.5rem

  & p
    font-weight: 500
    font-size: 1.8rem

img
  max-height: 50rem
  @media screen and (max-width: 50em)
    grid-row: 2 / 3
    width: 100%

span
  color: white

.wave
  position: absolute
  z-index: -5
  width: 100%
  top: -7.5rem
  // height: 100%
</style>
