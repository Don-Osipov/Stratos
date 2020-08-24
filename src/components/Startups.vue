<template>
  <div class="startupWrapper">
    <div class="img1-wrap">
      <img :src="images[0]" alt="Accenture" class="img1" />
    </div>
    <div>
      <img :src="images[1]" alt="GSV-Ventures" class="img2" />
    </div>
    <div>
      <img :src="images[2]" alt="DNcap" class="img3" />
    </div>
    <div>
      <img :src="images[3]" alt="Cydan" class="img4" />
    </div>
    <div class="img5-wrap">
      <img :src="images[4]" alt="SRI Capital" class="img5" />
    </div>
    <div>
      <img :src="images[5]" alt="Midway Ventures" class="img6" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uniName: {
      type: String,
      default: ''
    }
  },
  computed: {
    images() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'startupsStudents'
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.startupWrapper
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
  align-items: center
  justify-items: center
  justify-content: center
  // grid-auto-flow: row dense
  padding: 0 12.5vw
  height: auto

  @media screen and (max-width: 101em)
    grid-template-rows: 1fr 1fr
    grid-template-columns: repeat(3, minmax(20rem, 1fr))

  @include respond(tab-point)
    grid-template-rows: 1fr 1fr 1fr
    grid-template-columns: repeat(2, minmax(20rem, 1fr))

  @media screen and (max-width: 37.875em)
    grid-template-rows: repeat(6, 1fr)
    grid-template-columns: 1fr
    padding: 5vw

  & div
    margin-bottom: 2rem




img
  // height: 80%
  width: 100%

.img1-wrap
  position: relative
  width: 18rem
  height: 5rem

.img1
  width: 18rem
  // align-self: start
  position: absolute
  top: -1.55rem
  left: 0

.img2
  height: 4.5rem
  width: 16rem

.img3
  height: 5.4rem
  width: 15rem

.img4
  height: 5.2rem
  width: 16rem

.img5-wrap
  position: relative
  height: 8rem
  width: 8rem


.img5
  position: absolute
  top: -1.5rem
  left: 0
  // align-self: start

.img6
  width: 20rem
</style>
