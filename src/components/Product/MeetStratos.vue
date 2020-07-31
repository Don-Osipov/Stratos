<template>
  <div class="meetStratos-wrapper">
    <div class="content">
      <h2>Meet <span class="primary-highlight">Stratos</span></h2>
      <h3>
        The newest way to connect with
        <span class="primary-highlight">budding, innovative</span> startups from
        universities across the world.
      </h3>
      <a href="#philosophyWrapper" class=".scrollLink" v-smooth-scroll
        ><span class="learn">Learn More</span></a
      >
    </div>
    <div class="graphic">
      <svg
        width="352"
        height="545"
        viewBox="0 0 352 545"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M304.741 145.437L197.924 250.284L101.58 344.852C45.479 289.785 45.479 200.504 101.58 145.437C157.682 90.37 248.64 90.37 304.741 145.437Z"
          fill="white"
        />
        <path
          d="M26.4857 444.374L133.302 339.526L229.646 244.958C285.748 300.025 285.748 389.307 229.646 444.374C173.545 499.441 82.587 499.441 26.4857 444.374Z"
          fill="white"
        />
        <path
          d="M324.57 99.7078L217.754 204.555L121.41 299.123C65.3086 244.056 65.3086 154.775 121.41 99.7078C177.511 44.6408 268.469 44.6408 324.57 99.7078Z"
          fill="#46C894"
        />
        <path
          d="M46.3153 398.645L153.132 293.797L249.476 199.229C305.577 254.296 305.577 343.578 249.476 398.645C193.375 453.712 102.417 453.712 46.3153 398.645Z"
          fill="#46C894"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.meetStratos-wrapper
  // height:  55vh
  display: grid
  justify-items: center
  grid-gap: 5rem
  align-items: center
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr))
  width: 100vw
  margin-bottom: -.1rem // gets rid of random line between the 2 elements
  background-color: $c-darkblue
  padding: 3rem 12.5vw
  margin-top: -.1rem


  & .content
    color: white
    text-align: start
    display: flex
    flex-direction: column

    & h2
      font-size: 8.5rem
      line-height: 7.5rem
      margin-bottom: 3.5rem

    & h3
      font-size: 3rem
      line-height: 3.4rem
      margin-bottom: 5rem


    & a
      padding: .75rem 2.5rem
      border-radius: 3rem
      background-color: $c-primarygreen
      cursor: pointer
      transition: all .3s ease 0s
      align-self: flex-start
      font-family: inherit
      text-decoration: none

      &:hover
        background-color: lighten($c-primarygreen, 10%)

      & span
        color: white
        font-size: 2rem
</style>
