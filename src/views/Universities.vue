<template>
  <div class="universities">
    <NavBar bg-color="#ffffff" tx-color="#103f4a" logo-color="#46c894"></NavBar>
    <main>
      <TheUniversities></TheUniversities>
      <Northeast></Northeast>
      <West></West>
      <Midwest></Midwest>
      <South></South>
      <DontSee></DontSee>
      <svg
        viewBox="0 0 1440 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bot-wave"
      >
        <path
          d="M1440 0C1440 0 1129.5 60.8631 771 26.1824C412.5 -8.49835 201.684 -12.3628 0 37.8173V152.5H1440V0Z"
          fill="#46C894"
        />
      </svg>
    </main>

    <Footer bg-color="#46c894" tx-color="#000000" logo-color="#ffffff"></Footer>
  </div>
</template>

<script>
import TheUniversities from '@/components/Universities/TheUniversities.vue';
import Northeast from '@/components/Universities/Northeast.vue';
import West from '@/components/Universities/West.vue';
import Midwest from '@/components/Universities/Midwest.vue';
import South from '@/components/Universities/South.vue';
import DontSee from '@/components/Universities/DontSee.vue';
export default {
  name: 'Universities',
  components: {
    TheUniversities,
    Northeast,
    West,
    Midwest,
    South,
    DontSee
  },
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>

<style lang="sass" scoped>
.universities
  display: grid
  grid-template-rows: auto 1fr auto

.bot-wave
  margin-bottom: -1rem
</style>

<style lang="sass">
.university-location
  max-height: 45rem
</style>
