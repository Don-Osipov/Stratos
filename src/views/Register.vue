<template>
  <div class="register">
    <NavBar bg-color="#ffffff" tx-color="#103f4a"></NavBar>
    <div class="wrapper">
      <h3>Sign Up</h3>
      <span>
        Join Stratos
        <span class="primary-highlight">today</span>!
      </span>
      <div class="error" v-if="error">{{ error.message }}</div>
      <form @submit.prevent="pressed">
        <div class="name">
          <input type="text" placeholder="Full Name" />
        </div>
        <div class="email">
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="password">
          <input type="password" v-model="password" placeholder="Password" />
        </div>
        <div class="password">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <!-- <IAmA></IAmA> -->
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
// import IAmA from '@/components/IAmA.vue';

export default {
  name: 'Register',
  // components: { IAmA },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async pressed() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: 'LogIn' });
        firebase.auth().signOut();

        //// console.log(user);
      } catch (error) {
        //// console.log('error');
      }
    }
  },
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>

<style lang="sass" scoped>

.register
  display: grid
  grid-template-rows: auto 1fr auto

.error
  color: red
  font-size: 1.8rem

.wrapper
  justify-self: center
  width: 100%
  max-width: 60rem
  padding: 0 5vw

  h3
    color: $c-darkblue
    font-size: 7rem
    line-height: 7.8rem
    margin-bottom: 2rem

  span
    font-size: 1.8rem
    font-weight: 500

  form
    padding: 3rem 0
    padding-top: 4rem
    max-width: 45rem

    input
      // width: 400px
      // padding: 30px
      // margin: 20px
      // font-size: 21px
      max-width: 45rem
      width: 100%
      padding: 2rem
      border: 3px solid $c-primarygreen
      border-radius: 3rem
      margin-bottom: 2rem
      outline: none
      color: $c-darkblue
      transition: all .3s ease 0s
      font-size: 1.8rem
      font-family: 'Montserrat'
      font-weight: 500
      background-color: white

      &:focus
        border-color: darken($c-primarygreen,  10)
        background-color: #F8F8F8

      &::placeholder
        color: $c-darkblue
        font-weight: 500
        font-size: 1.8rem
        font-family: 'Montserrat'

    button
      max-width: 35rem
      width: 100%
      padding: 2rem 4rem
      border-radius: 2rem
      background-color: $c-primarygreen
      border: none
      color: white
      font-size: 2.5rem
      font-family: inherit
      font-weight: 600
      margin: 2rem 0
      cursor: pointer

      &:hover
        background-color: lighten( $c-primarygreen, 10)
        transition: all .3s ease 0s
</style>
