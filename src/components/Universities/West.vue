<template>
  <div class="wrapper">
    <svg
      class="wave"
      viewBox="0 0 1440 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 54.0001C1440 54.0001 1130.5 127.298 775.42 46C467.5 -24.5002 297 -10.9996 0 69.0008V90.4722H1440V54.0001Z"
        fill="white"
      />
    </svg>

    <div class="interior">
      <img
        class="university-location"
        src="@/assets/WestGraphic.svg"
        alt="West Graphic"
      />

      <ul class="list">
        <li>Brigham Young University</li>
        <li>California Polytechnic</li>
        <li>UC Berkeley</li>
        <li>UC Los Angeles</li>
        <li>University of Southern California</li>
        <li>University of Washington, Seattle</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.wrapper
  width: 100vw
  background-color: $c-darkblue
  color: white
  font-weight: 600
  display: grid
  // justify-content: start
  grid-template-rows: auto 1fr

.interior
  padding: 0 12.5vw
  // align-self: center
  display: grid
  align-items: center
  justify-items: center
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr))
  margin-bottom: 4vw
  height: 100%
  // margin-top: -7rem
  @media screen and (max-width: 25em)
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))

  @media screen and (max-width: 65em)
    padding: 0 5vw
    padding-top: 6rem
    padding-bottom: 4rem

  // @media screen and (max-width: 50em)
  //   min-width: 20remd


    // grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr))


  & ul
    list-style-type: none
    line-height: 5.5rem
    // margin-bottom: -3rem
    // padding: 4rem 0
    // margin-top: -5rem

    & li
      font-size: 2.2rem

      & a
        color: white
        text-decoration: none

  & img
    width: 90%
    align-self: center
    max-width: 50rem
    margin-top: -10rem
    max-height: 36rem

    @media screen and (max-width: 50em)
      grid-row: 1/ 2
      width: 80%
      margin-bottom: 4.25rem
      margin-top: -2.5rem
      // padding-top: 0rem


// .interior
//   padding: 2rem 12.5vw
//   display: grid
//   grid-template-columns: 1fr 1fr

//   & ul
//     list-style-type: none
//     line-height: 4.5rem
//     padding: 4rem 0


//     & li
//       font-size: 2.2rem

//   & svg
//     height: 80%

.wave
  background: linear-gradient($c-primarygreen, $c-primarygreen 97%, $c-darkblue 97%)

  & path
    fill: $c-darkblue
</style>
