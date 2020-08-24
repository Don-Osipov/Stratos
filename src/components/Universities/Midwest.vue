<template>
  <div class="wrapper">
    <!-- <img src="@/assets/UniversityWaves.svg" alt="Wavy Divider" class="wave" /> -->
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
      <ul class="list">
        <li>Michigan State University</li>
        <li>
          <router-link to="/universities/northwestern"
            >University of Chicago</router-link
          >
        </li>
        <li>University of Michigan</li>
        <li>UIUC</li>
        <li>University of Waterloo</li>
        <li>University of Wisconsin, Madison</li>
      </ul>
      <img
        class="university-location"
        src="@/assets/MidWestGraphic.svg"
        alt="Midwest Graphic"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.wrapper
  width: 100vw
  background-color: $c-skyblue
  color: white
  font-weight: 600

.interior
  padding: 2rem 12.5vw
  display: grid
  align-items: center
  justify-items: center
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr))
  // padding-bottom: 5vw
  height: 100%
  // margin-top: -7rem

  @media screen and (min-width: 65em)
    // margin-top: -2rem
    padding-bottom: 6rem

    & .list
      margin-top: -1rem




  @media screen and (max-width: 65em)
    padding: 2rem 5vw
    padding-top: 7rem

  @media screen and (max-width: 50em)
    padding-bottom: 5rem

  @media screen and (max-width: 25em)
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))




  // @media screen and (max-width: 50em)
  //   min-width: 20rem


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
    max-width: 55rem
    // margin-top: -4rem

    @media screen and (max-width: 50em)
      grid-row: 1/ 2
      width: 95%
      margin-bottom: 3.5rem
      margin-top: -2.5rem

      // margin-bottom: 1rem


// .interior
//   display: grid
//   grid-template-columns: 1fr 1fr
//   padding: 0rem 12.5vw

//   & ul
//     list-style-type: none
//     line-height: 4.5rem
//     padding: 4rem 0


//     & li
//       font-size: 2.2rem

//   & svg
//     height: 80%

.wave
  background: linear-gradient($c-darkblue, $c-darkblue 97%, $c-skyblue 97%)

  & path
    fill: $c-skyblue
</style>
