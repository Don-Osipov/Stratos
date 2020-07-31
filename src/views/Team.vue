<template>
  <div class="team">
    <NavBar
      bg-color="#ffffff"
      tx-color="#103f4a"
      logo-color="#46c894"
      transparent="not"
    ></NavBar>
    <main>
      <MeetTheTeam></MeetTheTeam>
      <Creators></Creators>
      <TeamGrid></TeamGrid>
      <TalkToTeam></TalkToTeam>
      <Partners></Partners>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import MeetTheTeam from '../components/Team/MeetTheTeam';
import Creators from '../components/Team/Creators';
import TeamGrid from '../components/Team/TeamGrid';
import TalkToTeam from '../components/Team/TalkToTeam';
import Partners from '../components/Team/Partners';
export default {
  name: 'Team',
  components: {
    MeetTheTeam,
    Creators,
    TeamGrid,
    TalkToTeam,
    Partners
  },
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>

<style lang="sass" scoped>

.team
  display: grid
  grid-template-rows: auto 1fr auto
// main
//   padding: 0 12.5vw
</style>
