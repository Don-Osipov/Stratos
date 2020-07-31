<template>
  <div class="login">
    <NavBar></NavBar>
    <TopHeader></TopHeader>
    <div>
      Login
      <form @submit.prevent="pressed">
        <div class="login">
          <input type="email" placeholder="email" v-model="email" />
        </div>
        <div class="password">
          <input type="password" placeholder="password" v-model="password" />
        </div>
        <button>Login</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
      <span>
        Need an account? Click here to
        <router-link to="/register">register</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import TopHeader from '@/components/TopHeader.vue';
export default {
  name: 'Login',
  components: { TopHeader },
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
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
      } catch (error) {
        console.log(error);
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
.error
  color: red

button
  width: 400px
  height: 75px
  font-size: 100%

input
  width: 400px
  padding: 30px
  margin: 20px
  font-size: 21px
</style>
