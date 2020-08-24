<template>
  <div class="startup-wrapper" :style="cssHighlightColor">
    <svg viewBox="0 0 1440 195" xmlns="http://www.w3.org/2000/svg" class="wave">
      <path
        d="M1440 91.5604C1440 91.5604 1209.5 -61.047 775.42 90.6738C442 230.492 201.684 225.051 0 102.578V0H1440V91.5604Z"
        :fill="highlightColor"
      />
    </svg>

    <div class="wrapper2">
      <div class="startups-student">
        <div class="startups-student__title">
          <img src="../assets/Student.svg" alt="Student Graphic" />
          <h4>Top Five Startups From UIUC Students</h4>
        </div>
        <Startups :images-arr="startupsStudents"></Startups>
      </div>
      <div class="startups-alums">
        <div class="startups-alums__title">
          <h4>Top Five Startups From UIUC Alums</h4>
          <img src="../assets/Alum.svg" alt="Student Graphic" class="alum" />
        </div>
        <Startups :images-arr="startupsAlums"></Startups>
      </div>
    </div>
    <!-- <Startups></Startups> -->
  </div>
</template>

<script>
import Startups from '@/components/Startups.vue';
export default {
  components: {
    Startups
  },
  props: {
    uniName: {
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log(this.startupsStudents);
    console.log(this.startupsAlums);
    console.log(this.$store.getters.getUniversity('UIUC'));
  },
  computed: {
    highlightColor() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'highlightColor'
      });
    },
    startupsStudents() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'startupsStudents'
      });
    },
    startupsAlums() {
      return this.$store.getters.getSpecificContent({
        uniName: this.uniName,
        contentName: 'startupsAlums'
      });
    },
    cssHighlightColor() {
      return {
        '--highlightColor': this.highlightColor
      };
    }
  }
};
</script>

<style lang="sass" scoped>

.wave
  // background: linear-gradient(var(--highlightColor), var(--highlightColor) 2%, white 1%)
  margin-top: -.5rem

.startup-wrapper
  // margin-top: 10rem
  width: 100vw

.wrapper2
  padding: 0 5%
  margin-top: 8rem

.alum
  margin-left: 1rem

.startups-student, .startups-alums
  margin-bottom: 4.5rem

.startups-student__title, .startups-alums__title
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 3rem

  & h4
    font-size: 4rem
    color: var(--highlightColor)

    & img
      height: 12rem
</style>
