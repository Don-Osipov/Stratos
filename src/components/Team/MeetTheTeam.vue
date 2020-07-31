<template>
  <div class="MTT">
    <h3 class="MTT--title">
      Meet The
      <span class="primary-highlight">Team</span>
    </h3>
    <h5 class="MTT--text">
      We’re super excited to introduce you to the team behind Stratos! Our team
      of researchers, developers, and designers have drawn on broad industry
      experience, as well as our own grit and vision to put this platform
      together.
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.MTT
  margin-bottom: 7rem
  color: $c-darkblue
  padding: 0 12.5vw
  width: 100vw

  @media screen and (max-width: 50em)
    padding: 0 5vw


  &--title
    font-size: 8rem
    line-height: 8.5rem
    margin-bottom: 3rem

  &--text
    font-size: 1.9rem
    font-weight: 500
</style>
