<template>
  <div class="partners-wrap">
    <div class="partners">
      <h4 class="partners--heading">Our Partners</h4>
      <Startups></Startups>
    </div>
    <svg
      viewBox="0 0 1440 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="wave"
    >
      <path
        d="M1440 0C1440 0 1129.5 60.8631 771 26.1824C412.5 -8.49835 201.684 -12.3628 0 37.8173V57H1440V0Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
import Startups from '@/components/Startups.vue';
export default {
  components: {
    Startups
  }
};
</script>

<style lang="sass" scoped>

.wave
  margin-bottom: -1rem

.partners-wrap
  width: 100vw
  background-color: $c-primarygreen
  margin-bottom: 5rem
  // margin-bottom: -1rem

.partners
  padding: 4rem 5%
  margin-bottom: 2rem

  &--heading
    color: white
    font-size: 4rem
    margin-bottom: 4rem

  &--img
    width: 70%
</style>
