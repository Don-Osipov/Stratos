.<template>
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
      <ul class="list">
        <li>
          <router-link to="/universities/babson"
            >Babson University</router-link
          >
        </li>
        <li>Brown University</li>
        <li>Carnegie Mellon University</li>
        <li>
          <router-link to="/universities/columbia"
            >Columbia University</router-link
          >
        </li>
        <li>Cornell University</li>
        <li>Harvard University</li>
        <li>Johns Hopkins University</li>
        <li>MIT</li>
        <li>New York University</li>
        <li>Princeton University</li>
        <li>University of Pennsylvania</li>
      </ul>
      <img
        class="university-location northeast"
        src="@/assets/NorthEastGraphic.svg"
        alt="NorthEast Graphic"
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
  background-color: $c-primarygreen
  color: white
  font-weight: 600

.interior
  padding: 0 12.5vw
  display: grid
  align-items: center
  justify-items: center
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr))
  padding-bottom: 6rem
  margin-top: -5.5rem

  @media screen and (max-width: 65em)
    padding: 0 5vw
    padding-top: 6rem
    padding-bottom: 4rem
    margin-right: 2rem

  @media screen and (max-width: 50em)
    margin-right: 0

  @media screen and (max-width: 25em)
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))


  // @media screen and (max-width: 50em)
  //   min-width: 20rem


    // grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr))


  & ul
    list-style-type: none
    line-height: 5.5rem
    // padding: 4rem 0
    // margin-top: -5rem

    & li
      font-size: 2.2rem

      & a
        color: white
        text-decoration: none

  & img
    width: 110%
    align-self: center
    max-width: 60rem

    @media screen and (max-width: 50em)
      grid-row: 1/ 2
      width: 95%
      margin-bottom: 3rem
      margin-top: 4rem

.wave
  background: linear-gradient(white, white 97%, $c-primarygreen 97%)

  & path
    fill: $c-primarygreen

// .northeast
//   width: 110%
</style>
