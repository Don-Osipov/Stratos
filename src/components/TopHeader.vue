<template>
  <div>
    Logged In
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button type="submit" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
};
</script>

<style lang="sass" scoped></style>
