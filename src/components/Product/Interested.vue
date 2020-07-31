<template>
  <div class="wrapper">
    <svg
      viewBox="0 0 1440 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="wave1"
    >
      <path d="M0 84C0 84 643 -105 1440 84V101H0V84Z" fill="#46C894" />
    </svg>

    <div class="interior">
      <h4>Interested in Stratos?</h4>
      <router-link to="/contact">
        <button>Contact Us!</button>
      </router-link>
    </div>
    <svg
      viewBox="0 0 1441 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="wave2"
    >
      <path
        d="M1440.5 0.182617C1440.5 0.182617 1130 61.0458 771.5 26.365C413 -8.31573 202.184 -12.1802 0.5 37.9999V63H1440.5V0.182617Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.wave1
  background: linear-gradient($c-darkblue, $c-darkblue 97%, $c-primarygreen 97%)
  margin-bottom: -5rem
  margin-top: -.3rem

  @media  (max-width: 65.5em)
    margin-bottom: -2rem

  @media screen and (max-width: 40em)
    margin-bottom: 0

.wave2
  margin-bottom: -1rem

.wrapper
  background-color: $c-primarygreen
  color: white
  width: 100vw
  margin-bottom: 5rem

.interior
  padding: 0 12.5vw
  display: flex
  // justify-content: space-around
  justify-content: center
  align-items: center
  padding-bottom: 3rem

  @include respond(phone)
    padding: 0 7.5vw
    padding-bottom: 2rem


  & h4
    font-size: 3rem
    padding-right: 3vw

    @include respond(phone)
      font-size: 2.5rem

  & a
    & button
      border-radius: 3rem
      background-color: white
      color: $c-primarygreen
      font-family: 'Montserrat'
      border: none
      font-size: 2.5rem
      padding: 1.5rem 2rem
      cursor: pointer
      margin-right: 3vw


      @include respond(phone)
        font-size: 2rem
</style>
