import Vue from 'vue';
import Vuex from 'vuex';
const contentful = require('contentful');

Vue.use(Vuex);

const client = contentful.createClient({
  // space: 'wmb72ezukoy3',
  // accessToken: 'VaSh5bPEXLwagwQimdT0TsbF_oF_VYjRUHdX-sldSZM'
  space: 'oz2jemoxzt65',
  accessToken: 'apYDWsVPf0mEhcHncPvoFYm1l1ymgVG_6jo8qB_VjL4'
});

export const store = new Vuex.Store({
  state: {
    universities: {}
  },
  getters: {
    getUniversities: state => {
      return state.universities;
    },
    getUniversity: state => name => {
      return state.universities[name];
    },
    getSpecificContent: state => payload => {
      return state.universities[payload.uniName][payload.contentName];
    },
    test: state => {
      return state.universities.UIUC.fastFacts;
    }
  },
  mutations: {
    addUniversity: (state, payload) => {
      // state.universities[payload.name] = payload.content;
      // console.log(payload);
      state.universities[payload.name] = payload.content;
      // console.log('mutations');
      // console.log(payload);
    },
    changeContent: (state, payload) => {
      const nameOfUni = payload.name;
      const contentToChange = payload.contentName;
      const newContent = payload.content;
      state.universities[nameOfUni][contentToChange] = newContent;
    }
  },
  actions: {
    addUniversity: async (context, payload) => {
      const contentfulData = await client.getEntry(payload.contentfulID); // API CALL

      console.log(contentfulData);
      // state.universities[payload.name]
      const temp = contentfulData.fields;

      let tempContent = {
        primaryColor: '',
        uniName: payload.name,
        fullUniName: '',
        fastFacts: [],
        logoImgUrl: '',
        uniImgUrl: '',
        opportunitiesForVC: [],
        founderCards: []
      };
      tempContent.fullUniName = temp.fullUniversityName;
      temp.funFactsText.split('\n\n').forEach((el, i) => {
        tempContent.fastFacts[i] = el;
        // console.log(el);
      });
      temp.opportunitiesForVCsText.split('\n\n').forEach((el, i) => {
        tempContent.opportunitiesForVC[i] = el;
      });

      for (
        let index = 0;
        index < temp.founderCards.fields.cards.length;
        index++
      ) {
        const el = temp.founderCards.fields.cards[index];
        const entry = await client.getEntry(el.sys.id); // API CALL
        tempContent.founderCards[index] = entry.fields;
        console.log(index + ' founderCard Set');
      }

      console.log(tempContent);

      const assets = await client.getAssets(); // API CALL
      console.log(assets.items);
      assets.items.forEach(asset => {
        let imageURL = 'https:' + asset.fields.file.url;
        console.log(imageURL);
        if (asset.fields.description == 'UIUC Logo Image') {
          tempContent.logoImgUrl = imageURL;
        } else {
          tempContent.uniImgUrl = imageURL;
        }
      });
      // assets.items.map(function(asset) {
      //   var imageURL = 'https:' + asset.fields.file.url;
      //   console.log(imageURL);
      // });

      const content = {
        name: payload.name,
        content: tempContent
      };
      console.log('TEMP');
      console.log(tempContent);
      context.commit('addUniversity', content);
      return contentfulData;
      // state.universities[payload.name] = payload.content;
      // console.log('mutations');
      // console.log(payload);
    }
  }
});
// export const store = new Vuex.Store({
//   state: {
//     counter: 0
//     //  this.$store.state.counter
//   },
//   getters: {
//     doubleCounter: state => {
//       return state.counter * 2;
//       // this.$store.getters.doubleCounter
//     },
//     stringCounter: state => {
//       return state.counter + ' Clicks';
//     }
//   },
//   mutations: {
//     // this.$store.commit('increment')
//     increment: state => {
//       state.counter++;
//     },
//     decrement: state => {
//       state.counter--;
//     },
//     incrementBy: (state, payload) => {
//       state.counter += payload
//     }
//   },
//   actions: {
//     // this.$store.dispatch('increment')
//     // getActions creates parameters for the actions
//     increment: context => {
//       context.commit('increment ')
//     },
//     incrementBy: (context, payload) => {
//       context.commit('increment', payload)
//     },
//     asyncIncrement: context => {
//       setTimeout(() => {
//         commit('increment')
//       }, 1000);
//     }
//   }
// });

// import { mapGetters } from 'vuex';

// computed: {
//   ...mapGetters([
//     'doubleCounter', 'stringCounter'
//   ]),
//   ourOwn() {

//   }
// }

// import { mapMutations } from 'vuex';

// methods: {
//   ...mapMutations([
//     'increment', 'decrement'
//   ]),
//   ourOwn() {

//   }
// }

// import { mapActions } from 'vuex';

// methods: {
//   ...mapActions([
//     'increment', 'decrement'
//   ]),
//   ourOwn() {

//   }
// }
