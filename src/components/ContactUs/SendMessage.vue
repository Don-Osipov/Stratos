<template>
  <div class="wrapper">
    <form @submit="saveContactMessage">
      <h4>Send us a message</h4>
      <div class="radioButton-wrap">
        <p>I'm a</p>
        <input type="radio" id="student" class="student" name="same" />
        <label for="student">Student</label>

        <input type="radio" id="vc" class="vc" name="same" />
        <label for="vc">VC</label>

        <input type="radio" id="other" class="other" name="same" />
        <label for="other">Other</label>
      </div>
      <div class="inputs">
        <input
          v-model="fName"
          name="fName"
          type="text"
          autocomplete="off"
          class="fName"
          placeholder="First Name"
          required
        />
        <input
          v-model="lName"
          name="lName"
          type="text"
          autocomplete="off"
          class="lName"
          placeholder="Last Name"
          required
        />
        <input
          v-model="email"
          type="email"
          autocomplete="off"
          class="email"
          placeholder="Email"
          required
        />
        <textarea
          v-model="message"
          type="text"
          autocomplete="off"
          class="message"
          placeholder="Message"
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fName: null,
      lName: null,
      email: null,
      message: null
    };
  },
  methods: {
    saveContactMessage: function(e) {
      e.preventDefault();
      console.log('SUBMITTED');
      console.log(this.fName);
      console.log(this.lName);
      console.log(this.email);
      console.log(this.message);
      // console.log(this.$firebaseTest.firestore());
      const messagesRef = this.$firebaseTest.firestore.collection('message');
      console.log(messagesRef);
      messagesRef.add({
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        message: this.message,
        time: new Date()
      });
      this.fName = '';
      this.lName = '';
      this.email = '';
      this.message = '';
      this.submitted = true;
      // this.snackbar = false;
    }
  }
};
</script>

<style lang="sass" scoped>

input:-webkit-autofill
  background-color: white !important
  transition: background-color 5000s ease-in-out 0s


.wrapper
  // max-width: 50rem
  padding-left: 4rem

  @media screen and (max-width: 75em)
    padding-left: 0

form

  & h4
    font-size: 4rem
    color: $c-primarygreen

  & .radioButton-wrap
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



  & .inputs
    display: flex
    flex-direction: column


    & input, textarea
      padding: 2rem
      border: 3px solid $c-primarygreen
      border-radius: 3rem
      margin-bottom: 2rem
      outline: none
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
        font-weight: 600
        font-size: 1.8rem
        font-family: 'Montserrat'

    & .message


  & button
    border: none
    padding: 2rem 4rem
    background-color: white
    border-radius: 3rem
    color: $c-primarygreen
    font-size: 2.5rem
    font-family: 'Montserrat'
    font-weight: 600
    cursor: pointer
    transition: all .3s ease 0s

    &:hover
      color: lighten($c-primarygreen, 10)
</style>
