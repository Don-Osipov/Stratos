<template>
  <div class="learnMore">
    <div class="wrapper">
      <h4>Learn more about Stratos:</h4>
      <router-link to="/product" class="temp">
        <span>Our Product</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>


.learnMore
  width: 100vw
  align-content: center
  line-height: 1.2
  // align-items: space-around
  // justify-content: space-around
  font-size: 4rem
  background-color: $c-primarygreen
  margin-top: 6rem

.wrapper
  padding: 00 12.5vw
  padding-top: 4.5rem
  padding-bottom: 2rem
  display: flex
  flex-wrap: wrap
  text-align: center
  justify-content: center

  & h4
    color: white
    margin-right: 5rem
    margin-bottom: 1.5rem

    @media screen and (max-width: 68em)
      margin-right: 0



  & a
    margin-bottom: 1.5rem
    padding: .25rem 3.5rem
    border-radius: 3.5rem
    background-color: white
    transition: all .3s ease 0s
    align-self: flex-start
    font-family: inherit
    text-decoration: none

    // &:hover
    //   background-color: lighten($c-primarygreen, 10%)

    & span
      color: $c-primarygreen
      font-size: 4rem

      @include respond(phone)
        font-size: 3.5rem
</style>
