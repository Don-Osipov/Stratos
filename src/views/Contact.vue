<template>
  <div class="contact">
    <NavBar bg-color="#ffffff" tx-color="#103f4a"></NavBar>
    <ContactToday></ContactToday>
    <img
      src="@/assets/ContactRocket.svg"
      alt="Graphic"
      class="rocket-graphic"
    />
    <Footer></Footer>
  </div>
</template>

<script>
import ContactToday from '@/components/ContactUs/ContactToday.vue';
export default {
  name: 'Contact',
  components: {
    ContactToday
  },
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>
<style lang="sass" scoped>
.contact
  display: grid
  grid-template-rows: auto 1fr auto
  // position: relative

.rocket-graphic
  margin-top: -35rem
  // height: 50rem
  // position: absolute
  z-index: -5
  margin-bottom: -7.5rem

  @media screen and (max-width: 83.75em)
    display: none
</style>
