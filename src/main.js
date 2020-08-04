import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import VueSmoothScroll from 'vue2-smooth-scroll';
// import axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/app';
import { store } from './store/store';

// client.getEntry('7H5uEmao3VFYiKeeiUtw9D').then(entry => {
// logs the entry metadata
// console.log(entry.sys);
// logs the field with ID title
// console.log(entry.fields);
// });

// client
//   .getAssets()
//   .then(function(assets) {
//     console.log(assets);
//     assets.items.map(function(asset) {
//       var imageURL = 'https:' + asset.fields.file.url;
//       console.log(imageURL);
//     });
//   })
//   .catch(function(e) {
//     console.log(e);
//   });

// const firebaseConfig = {
//   apiKey: 'AIzaSyAcZcK1_slzUdmOHPxexIQfuqR-ih_kCCs',
//   authDomain: 'stratos-41f8a.firebaseapp.com',
//   databaseURL: 'https://stratos-41f8a.firebaseio.com',
//   projectId: 'stratos-41f8a',
//   storageBucket: 'stratos-41f8a.appspot.com',
//   messagingSenderId: '47716098619',
//   appId: '1:47716098619:web:4267d72bbaaf958f26b21e',
//   measurementId: 'G-15VENHGT5L'
// };

const firebaseConfig = {
  apiKey: 'AIzaSyA52wa4oSROOzR5CBjLetnH_r9wg0KojAk',
  authDomain: 'stratos-1.firebaseapp.com',
  databaseURL: 'https://stratos-1.firebaseio.com',
  projectId: 'stratos-1',
  storageBucket: 'stratos-1.appspot.com',
  messagingSenderId: '126374712680',
  appId: '1:126374712680:web:4f9c91e5ec95b08f8372dd',
  measurementId: 'G-RF4WFYTVMZ'
};

firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebaseTest = firebase;

// Vue.prototype.$universities = store.state.universities
// sm

// Vue.prototype.$axios = axios;

Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false
});

Vue.config.productionTip = false;

Vue.component('NavBar', NavBar);
Vue.component('Footer', Footer);

let app;
firebase.auth().onAuthStateChanged(user => {
  // console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
