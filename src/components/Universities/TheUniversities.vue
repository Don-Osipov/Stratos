<template>
  <div class="wrap">
    <h3>
      The
      <span>Universities</span>
    </h3>
    <p>
      Our Universities are
      <span>diverse</span>, with a mix of public and private universities across
      the United States (and 1 in Canada). Some Universities will be familiar;
      many well-known founders come from there and
      <span>their entrepreneurial programs are unparalleled</span>. Others are
      less known, but we believe we have equally strong programs that
      <span>remain yet undiscovered</span>. We started with a list of hundreds
      of universities, and gradually narrowed our list down to what we believe
      are 30 universities that <span>should be on your investment radar</span>.
    </p>
    <img src="@/assets/USAUniversities.svg" alt="USA Region Map" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.wrap
  color: $c-darkblue
  font-weight: 600
  width: 100vw
  padding: 3rem 12.5vw
  @media screen and (max-width: 37.5em)
    padding: 3rem 8vw
    padding-top: .5rem
  @media screen and (max-width: 30em)
    padding: 3rem 5vw
    padding-top: .5rem

  & h3
    font-size: 8rem
    line-height: 8.5rem
    margin-bottom: 3rem

    @media screen and (max-width: 37.5em)
      font-size: 6.5rem
      line-height: 7rem
    @media screen and (max-width: 28.75em)
      font-size: 5.5rem
      line-height: 6rem
    @media screen and (max-width: 23em)
      font-size: 4.75rem
      line-height: 5.25rem

  & p
    font-size: 1.8rem
    margin-bottom: 3rem

img
  max-width: 70rem

span
  color: $c-primarygreen
</style>
