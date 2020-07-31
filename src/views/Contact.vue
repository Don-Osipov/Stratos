<template>
  <div class="contact">
    <NavBar bg-color="#ffffff" tx-color="#103f4a"></NavBar>
    <ContactToday></ContactToday>
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
</style>
