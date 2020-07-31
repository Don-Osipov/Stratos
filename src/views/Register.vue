<template>
  <div>
    <div class="register">
      <NavBar></NavBar>
      <div class="error" v-if="error">{{ error.message }}</div>
      <form @submit.prevent="pressed">
        <div class="email">
          <input type="email" v-model="email" placeholder="email" />
        </div>
        <div class="password">
          <input type="password" v-model="password" placeholder="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Register',
  components: {},
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
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: 'LogIn' });
        // console.log(user);
      } catch (error) {
        // console.log('error');
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
  font-size: 1.8rem

input
  width: 400px
  padding: 30px
  margin: 20px
  font-size: 2.1rem

button
  width: 400px
  height: 75px
  font-size: 100%
</style>
