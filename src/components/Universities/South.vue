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
        src="@/assets/SouthGraphic.svg"
        alt="South Graphic"
      />

      <ul class="list">
        <li>Arizona State University</li>
        <li>Duke University</li>
        <li>Florida State University</li>
        <li>Georgia Institute of Technology</li>
        <li>Johns Hopkins University</li>
        <li>Rice University</li>
        <li>University of Texas Austin</li>
        <li>University of Virginia</li>
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
  background-color: $c-midblue
  color: white
  font-weight: 600


.interior
  padding: 0 12.5vw
  display: grid
  align-items: center
  justify-items: center
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr))
  padding-bottom: 3.5vw
  height: 100%
  // margin-top: -7rem

  @media screen and (max-width: 25em)
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))

  @media screen and (max-width: 65em)
    padding: 0 5vw
    padding-top: 6rem
    padding-bottom: 4rem

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
    max-width: 50rem
    margin-top: -3rem

    @media screen and (max-width: 50em)
      grid-row: 1/ 2
      width: 80%
      margin-bottom: 3rem

      // margin-bottom: 1rem


// .interior
//   padding: 0 12.5vw
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
  background: linear-gradient($c-skyblue, $c-skyblue 97%, $c-midblue 97%)

  & path
    fill: $c-midblue
</style>
