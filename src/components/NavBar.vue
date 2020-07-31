<template>
  <nav :style="cssProps">
    <ul class="nav__links">
      <router-link to="/" class="logo-link">
        <!-- <img src="../assets/SmallIcon.svg" alt="Stratos" class="logo" /> -->
        <svg
          viewBox="0 0 79 120"
          xmlns="http://www.w3.org/2000/svg"
          class="logo"
        >
          <path
            d="M71.7859 23.9286L46.6238 49.0906L23.9286 71.7858C10.7132 58.5704 10.7132 37.144 23.9286 23.9286C37.144 10.7131 58.5705 10.7131 71.7859 23.9286Z"
            :fill="logoColor"
          />
          <path
            d="M6.23916 95.6698L31.4012 70.5078L54.0964 47.8126C67.3118 61.028 67.3118 82.4544 54.0964 95.6698C40.881 108.885 19.4546 108.885 6.23916 95.6698Z"
            :fill="logoColor"
          />
        </svg>
      </router-link>
      <li>
        <router-link to="/product">Product</router-link>
      </li>
      <li>
        <router-link to="/team">Team</router-link>
      </li>
      <li>
        <router-link to="/universities">Universities</router-link>
      </li>
      <li>
        <router-link to="/universities/uiuc">UIUC</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/login">Log In</router-link>
      </li>
    </ul>
    <div class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      path: this.$router.currentRoute.path,
      routeList: this.$router.options.routes
    };
  },
  props: {
    bgColor: {
      type: String,
      default: '#103f4a'
    },
    txColor: {
      type: String,
      default: '#ffffff'
    },
    logoColor: {
      type: String,
      default: '#46c894'
    },
    transparent: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    cssProps() {
      return {
        '--bgColor': this.bgColor,
        '--txColor': this.txColor,
        '--logoColor': this.logoColor,
        '--bgColorLighten10': this.LightenDarkenColor(this.bgColor, 10),
        '--txColorLighten10': this.LightenDarkenColor(this.txColor, 80),
        '--transparentOrNot': this.transparentOrNot
      };
    },
    transparentOrNot() {
      if (this.transparent === 'transparent') {
        return 'transaprent';
      }
      return this.bgColor;
    },
    nextPage() {
      const path = this.path;
      const routeList = this.routeList;
      console.log(path);
      console.log(routeList);
      let pathIndex;
      for (let i = 0; i < routeList.length; i++) {
        const el = routeList[i].path;
        if (path == el) pathIndex = i;
      }
      console.log(pathIndex);
      if (pathIndex === routeList.length - 1) return 0;
      return pathIndex + 1;
    }
  },
  methods: {
    LightenDarkenColor(col, amt) {
      if (col === 'white' || col === '#fff' || col === '#ffffff')
        return '#ffffff';

      var usePound = false;
      if (col[0] == '#') {
        col = col.slice(1);
        usePound = true;
      }

      var num = parseInt(col, 16);

      var r = (num >> 16) + amt;

      if (r > 255) r = 255;
      else if (r < 0) r = 0;

      var b = ((num >> 8) & 0x00ff) + amt;

      if (b > 255) b = 255;
      else if (b < 0) b = 0;

      var g = (num & 0x0000ff) + amt;

      if (g > 255) g = 255;
      else if (g < 0) g = 0;

      return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
    }
  },
  mounted() {
    const hamburger = document.querySelector('.hamburger');
    const line = document.querySelectorAll('.line');
    const navLinks = document.querySelector('.nav__links');
    // const links = document.querySelectorAll('.nav__links li');
    // console.log(this.$router.currentRoute.path);
    // console.log(this.$router.options.routes);
    console.log(this.nextPage);
    console.log(this.routeList[this.nextPage]);

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      line.forEach(el => {
        el.classList.toggle('open');
      });
      document.body.classList.toggle('open');
      document.documentElement.classList.toggle('open');
    });
  }
};
</script>

<style lang="sass" scoped>
nav
  background-color: var(--bgColor)
  background-color: var(--transparentOrNot)
  margin-bottom: 0
  min-height: 7rem

.nav__links
  display: flex
  justify-content: flex-end
  // justify-content: space-between
  align-items: center

  list-style-type: none
  list-style: none
  padding-left: 3rem

  & li
    display: flex
    align-items: center
    cursor: pointer
    height: 100%
    padding: 0rem 2rem
    border-radius: .5rem

    @media screen and(max-width: 70em)
      padding: 0 1vw

      transition: all .3s ease 0s

    &:hover
      background-color: var(--bgColorLighten10)

      & a
        color: var(--txColorLighten10)

    & a
      transition: all .3s ease 0s
      text-decoration: none
      color: var(--txColor)
      letter-spacing: 1px
      font-weight: bold
      display: block
      padding: 2.2rem 3rem
      font-size: 1.7rem

      @media screen and(max-width: 70em)
        padding: 2.2rem 2vw



.logo-link
  margin-right: auto
  display: flex
  align-items: center
  padding: 1rem
  padding-left: 2rem

  @media screen and(max-width: 70em)
    padding: 1rem 1.8vw

.logo
  height: 5rem
  width: 5rem
  // color: whi

@media screen and (max-width: 55em)

  nav
    position: relative

  .hamburger
    position: absolute
    cursor: pointer
    right: 5%
    top: 50%
    transform: translate(-5%, -50%)
    z-index: 2

    .line
      width: 30px
      height: 3px
      background: $c-primarygreen
      margin: 5px
      transition: all .3s ease-in

    .line.open
      background: white

  .logo-link
    margin: 0
    & path
      fill: white

  .nav__links
    position: fixed
    background: $c-primarygreen
    height: 100vh
    width: 100%
    flex-direction: column
    // display: none
    clip-path: circle(0px at 105% -10%)
    transition: all .3s ease-out
    pointer-events: none
    padding-left: 0
    justify-content: center

    & li
      height: auto
      width: 20rem
      display: flex
      justify-content: center

      &:hover
        background-color: lighten($c-primarygreen, 10)

      & a
        font-size: 2.3rem

  .nav__links.open
    // display: flex
    clip-path: circle(1700px at 105% -10%)
    pointer-events: all
</style>
