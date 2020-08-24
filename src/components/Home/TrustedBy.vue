<template>
  <div class="trusted-wrapper">
    <svg
      viewBox="0 0 1440 62"
      enable-background="new 0 0 1440 62"
      xmlns="http://www.w3.org/2000/svg"
      class="curve-container__curve"
    >
      <path
        d="M1440 0C1440 0 1129.5 72.5178 771 31.196C412.5 -10.1257 201.684 -14.7302 0 45.0589V61.5H1440V0Z"
        fill="white"
      />
    </svg>

    <h4>Trusted by...</h4>
    <!-- <img src="@/assets/Startups.png" alt="Startups Graphic" /> -->
    <Startups :images-arr="images"></Startups>
  </div>
</template>

<script>
import Startups from '@/components/Startups.vue';
export default {
  components: {
    Startups
  },
  computed: {
    images() {
      return this.$store.getters.getFromOther('homeStartups');
    }
  }
};
</script>

<style lang="sass" scoped>
.trusted-wrapper
  // padding: 3%
  width: 100vw
  margin-bottom: 5rem
  background: linear-gradient($c-primarygreen, $c-primarygreen 1%, white 1%)

.curve-container__curve
  background: linear-gradient($c-primarygreen, $c-primarygreen 95%, white 95%)

h4
  font-size: 5rem
  color: $c-primarygreen
  margin: 2rem 0
  margin-bottom: 4rem
  padding: 0 5vw
  line-height: 5.5rem

img
  width: 70%
</style>
