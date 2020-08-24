<template>
  <div class="wrapper">
    <img
      src="@/assets/Team/MTTWaveTop.svg"
      alt="Section Divider"
      class="wave-top"
    />

    <div class="creators">
      <h4 class="creators--heading">
        From the creators of
        <span class="white-highlight">TigerLaunch...</span>
      </h4>
      <p class="creators--info">
        TigerLaunch is the world’s largest student-run pitch competition. What
        started as an opportunity for Princeton students to pitch and receive
        funding and feedback quickly expanded, and as of 2020, we’re operating 6
        regional competitions, working with 300+ teams every year, and have a
        presence in 3 continents. Every year, our teams were getting accepted to
        YC, TechStars, and other prestigious programs. We quickly realized that
        we had a system that was able to identify top startups before other VCs
        or institutions could, and it was out of this realization that Stratos
        was born. The Stratos team consists largely of TigerLaunch members,
        working to build an innovative platform that’s redefining startup
        discovery.
      </p>
      <img
        src="../../assets/Team/TigerLaunchLogo.png"
        alt="TigerLaunch Logo"
        class="creators-logo"
      />
    </div>
    <img
      src="@/assets/Team/MTTWaveBot.svg"
      alt="Section Divider"
      class="wave-bot"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.creators
  background-color: $c-primarygreen
  padding: 3rem 12.5vw

  @media screen and (max-width: 50em)
    padding: 3rem 5vw
  // margin-bottom: 12rem
    width: 100vw


  &--heading
    color: $c-darkblue
    font-size: 4.7rem
    margin-bottom: 3rem
    line-height: 5.2rem

  &--info
    color: white
    font-weight: 500
    margin-bottom: 3rem
    font-size: 1.8rem

  &-logo
    height: 7rem
    width: 6.5rem

.wave-top
  margin-bottom: -1rem

.wave-bot
  margin-top: -.5rem
</style>
