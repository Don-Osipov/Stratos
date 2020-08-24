<template>
  <footer :style="cssProps">
    <ul class="footer-links">
      <router-link to="/" class="logo-link">
        <svg
          class="logos"
          viewBox="0 0 79 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.7859 23.9286L46.6238 49.0906L23.9286 71.7858C10.7132 58.5704 10.7132 37.144 23.9286 23.9286C37.144 10.7131 58.5705 10.7131 71.7859 23.9286Z"
            fill="#46C894"
          />
          <path
            d="M6.23916 95.6698L31.4012 70.5078L54.0964 47.8126C67.3118 61.028 67.3118 82.4544 54.0964 95.6698C40.881 108.885 19.4546 108.885 6.23916 95.6698Z"
            fill="#46C894"
          />
        </svg>
      </router-link>
      <div class="links">
        <li>
          <router-link to="/privacypolicy">Privacy Policy</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact Us</router-link>
        </li>
      </div>
    </ul>
    <!-- <ul class="footer-links-phone">
      <div class="phone-footer-sec">
        <router-link to="/" class="logo-link-footer">
          <svg
            class="logos"
            viewBox="0 0 79 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.7859 23.9286L46.6238 49.0906L23.9286 71.7858C10.7132 58.5704 10.7132 37.144 23.9286 23.9286C37.144 10.7131 58.5705 10.7131 71.7859 23.9286Z"
              fill="#46C894"
            />
            <path
              d="M6.23916 95.6698L31.4012 70.5078L54.0964 47.8126C67.3118 61.028 67.3118 82.4544 54.0964 95.6698C40.881 108.885 19.4546 108.885 6.23916 95.6698Z"
              fill="#46C894"
            />
          </svg>
        </router-link>
        <li>Privacy Policy</li>
        <li>
          <router-link to="/contact">Contact Us</router-link>
        </li>
      </div>
    </ul>-->
  </footer>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    txColor: {
      type: String,
      default: '#000000'
    },
    logoColor: {
      type: String,
      default: '#46c894'
    }
  },
  computed: {
    cssProps() {
      return {
        '--bgColor': this.bgColor,
        '--txColor': this.txColor,
        '--logoColor': this.logoColor
      };
    }
  }
};
</script>

<style lang="sass" scoped>
footer
  // position: absolute
  // bottom: 0
  // position: fixed
  // bottom: 0
  // left: 0
  width: 100vw
  background-color: var(--bgColor)

// .footer-links-phone

//   & .phone-footer-sec

//     display: none
//     justify-content: space-around
//     align-items: center
//     list-style-type: none
//     list-style: none
//     grid-column: 1 / 4
//     grid-row: 1 / 2
//     margin-left: -2rem

//     & a
//       color: black
//       text-decoration: none


//     @media screen and (max-width: 27.25em)
//       display: grid
//       padding: 0 1rem
//       grid-template-columns: 1fr 1fr 1fr
//       grid-template-rows: 1fr 1fr
//       grid-column-gap: .5rem

.footer-links
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 3rem

  @media screen and (max-width: 37.5em)
    padding: 1rem

  // @media screen and (max-width: 27.25em)
  //   display: none
    // display: grid
    // grid-template-columns: 1fr 1fr 1fr
    // grid-template-rows: 1fr 1fr

    // & .logo-link
    //   grid-column: 1 / 2
    //   grid-row: 1 / 2



.links
  display: flex
  justify-content: space-between
  align-items: center
  list-style-type: none
  list-style: none
  grid-column: 2 / 4
  grid-row: 1 / 2



  & li
    padding: 1rem 2rem
    color: var(--txColor)

    // @media screen and (max-width: 27.25em)
    //   padding: 1rem 1.8rem

  & li a
    text-decoration: none
    color: var(--txColor)

.logos
  height: 4.5rem
  width: 4.5rem
  margin: 1rem 1.5rem

  & path
    fill: var(--logoColor)

.social
  grid-column: 1 / 4
  grid-row: 2 / 3
</style>
