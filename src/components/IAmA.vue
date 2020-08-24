<template>
  <div class="radioButton-wrap">
    <p>I'm a</p>
    <input type="radio" id="student" class="student" name="same" />
    <label for="student">Student</label>

    <input type="radio" id="vc" class="vc" name="same" />
    <label for="vc">VC</label>

    <input type="radio" id="other" class="other" name="same" />
    <label for="other">Other</label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.radioButton-wrap
  display: grid
  align-items: center
  grid-template-columns: 7.5rem 1fr 1fr 1fr
  margin-bottom: 2rem


  & input
    opacity: 0
    position: fixed
    width: 0

    &:checked + label
      background-color: $c-primarygreen
      border-color: darken($c-primarygreen, 10)
      color: white

    &:focus + label
      border: 3px solid darken($c-primarygreen, 15)

  & label
    display: inline-block
    background-color: white
    padding: 1rem 2rem
    font-family: 'Montserrat'
    border: 3px solid $c-primarygreen
    border-radius: 3rem
    transition: all .3s ease 0s
    cursor: pointer
    margin: 0 1rem

    &:hover
      border-color: darken($c-primarygreen, 5)
      background-color: lighten($c-primarygreen, 10)
      color: white


@media screen and (max-width: 26.25em)
  h4
    padding-bottom: 1rem !important
    font-size: 4.5rem !important
    line-height: 5rem !important

  .radioButton-wrap
    grid-template-rows: 1fr 1fr
    grid-template-columns: 1fr 1fr 1fr !important

    & p
      grid-row: 1 / 2
      grid-column: 1/ 4
      font-size: 2rem

    & input, label
      grid-row: 2 / 3

    & label
      margin: 0 .5rem !important
</style>
