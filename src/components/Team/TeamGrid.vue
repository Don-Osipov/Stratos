<template>
  <div class="TG-wrap">
    <svg
      viewBox="0 0 1440 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="wave"
    >
      <path
        d="M0 99.7422C0 99.7422 230.5 246.895 664.58 100.597C998 -34.223 1238.32 -28.977 1440 89.1182V183.5H0V99.7422Z"
        fill="#46C894"
      />
    </svg>

    <div class="TG">
      <div class="TG--card" v-for="(item, i) in teamList" :key="i">
        <div class="TG--card__head">
          <p class="name">{{ item.name }}</p>
          <img
            :src="item.picture"
            alt="Picture of Team Member"
            class="picture"
          />
        </div>
        <div class="TG--card__info">
          <h5 class="title">{{ item.position }}</h5>
          <p class="info">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      arr: new Array(12)
    };
  },
  computed: {
    teamList() {
      return this.$store.getters.getTeamList;
    }
  }
};
</script>

<style lang="sass" scoped>

.wave
  background: linear-gradient(white, white 99%, $c-primarygreen 99%)
  margin-top: -.3rem

.TG-wrap
  background-color: $c-primarygreen
  width: 100vw


.TG
  padding: 0 12.5vw
  padding-bottom: 3rem

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(25rem, 40rem))
  align-items: start
  justify-content: center

  @media screen and (max-width: 62.5em)
    padding: 0 5vw
    padding-bottom: 3rem



  &--card
    padding: 4rem 2.5vw


    &__head
      margin-bottom: 1rem
      position: relative

    &__info

// .name
//   // transform-origin: 0 100%
//   position: absolute
//   bottom: 30%
//   left: 0
//   // left: -5rem
//   transform: rotate(-90deg)
//   height: 5rem
//   width: 6rem
//   color: white
//   font-weight: 600
//   font-size: 3rem

//   display: grid
//   grid-template-columns: 1fr 1fr
//   grid-gap: 1.5rem
.name
  font-weight: 600
  font-size: 3rem
  color: white



.picture
  width: 100%


.title
  font-size: 1.7rem
  margin-bottom: 1rem

.info
  font-weight: 500
</style>
