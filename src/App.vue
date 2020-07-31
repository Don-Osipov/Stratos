<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>
<style lang="sass">
*,
*::before,
*::after
  margin: 0
  padding: 0
  box-sizing: border-box

body
  font-family: 'Montserrat', sans-serif
  // font-weight:
  font-size: 1.6rem
  line-height: 1.7

html
  font-size: 62.5%
  height: 100%

html
  font-size: 62.5%

  // @include respond(big-desktop)
  //   font-size: 75%

  @include respond(tab-land)
    font-size: 56.25%

  @include respond(tab-port)
    font-size: 50%

  // @include respond(phone)
  //   font-size: 45%

body
  height: 100%

body #app
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // min-height: 100vh
  text-align: center
  min-height: 100%
  display: grid
  grid-template-rows: 1fr auto
  overflow: hidden
  // position: relative

.primary-highlight
  color: $c-primarygreen

.white-highlight
  color: white

html.open, body.open
  margin: 0
  height: 100%
  overflow: hidden
</style>
