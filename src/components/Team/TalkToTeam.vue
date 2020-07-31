<template>
  <div class="TTT-wrap">
    <svg
      class="wave wave1"
      viewBox="0 0 1440 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 126H720H0C0 56.4121 322.355 0 720 0C1117.65 0 1440 56.4121 1440 126Z"
        fill="white"
      />
    </svg>

    <div class="TTT">
      <img
        src="@/assets/Team/TalkTeam.svg"
        alt="Graphic"
        class="TTT--graphic"
      />
      <div>
        <h4 class="TTT--heading">Want to talk to the team?</h4>
        <router-link to="/contact"
          ><button class="TTT--button">Contact Us!</button></router-link
        >
      </div>
    </div>
    <svg
      class="wave wave2"
      viewBox="0 0 1440 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 0C1440 69.5879 1117.65 126 720 126C322.355 126 0 69.5879 0 0H720H1440Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.wave
  background-color: $c-primarygreen

  &1
    background: linear-gradient($c-primarygreen, $c-primarygreen 97%, white 97%)
    margin-top: -.3rem
  &2
    background: linear-gradient(white, white 2%, $c-primarygreen 2%)
    margin-bottom: -.3rem

.TTT-wrap
  width: 100vw
  margin-bottom: -1rem

.TTT
  padding: 0rem 12.5vw
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center

  @media screen and(max-width: 50em)
    padding: 0 5vw

  &--heading
    font-size: 4rem
    color: $c-primarygreen
    // margin-bottom: 2rem
    line-height: 4.5rem
    padding: 3rem 0
    @media screen and (min-width: 80em)
      margin-left: 2rem

  &--graphic
    max-width: 55rem
    width: 90%

    @media screen and (max-width: 50em) and (min-width:  37.5em)
      max-width: 50rem

    @media screen and (min-width: 80em)
      margin-right: 2rem

  &--button
    border: none
    cursor: pointer
    padding: 2rem 4rem
    border-radius: 4rem
    color: white
    font-family: inherit
    font-weight: 600
    font-size: 2rem
    background-color: $c-primarygreen
    transition: all .3s ease 0s

    &:hover
      background-color: lighten($c-primarygreen, 10)
</style>
