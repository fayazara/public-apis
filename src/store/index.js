import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'public-apis',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    categories: [],
    apilist: {},
    categoriesLoading: false,
    apiLoading: false,
    bookmarks: []
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    },
    setApis(state, data) {
      state.apilist = data;
    },
    setBookmarks(state, data) {
      state.bookmarks.push(JSON.stringify(data));
    },

  },
  actions: {
    getCategories({ commit }) {
      this.state.categoriesLoading = true;
      API.get('categories').then(response => {
        commit('setCategories', response.data)
        this.state.categoriesLoading = false;
      }).catch(err => {
        this.state.categoriesLoading = false;
        alert(`Something went wrong - ${err}. Please reload the page`);
      })
    },
    getAllApis({ commit }) {
      API.get('entries')
        .then(response => {
          commit('setApis', response.data)
        })
    },
    addBookmark({ commit }, data) {      
      commit('setBookmarks', data)
    }
  },
  plugins: [vuexPersist.plugin]
})