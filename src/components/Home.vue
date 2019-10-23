<template>
  <div class="hero">
    <v-container>
      <h1 class="spinner display-2 grey--text text--darken-1 font-weight-black">
        Apis for
        <v-slide-x-transition leave-absolute>
          <span class="spinner-text" style="color: #4480FF;" :key="api">{{api}}</span>
        </v-slide-x-transition>
      </h1>
      <br />
      <p
        class="headline grey--text text--accent-4"
      >{{$store.state.apilist.count}} Public APIs you can use for your projects</p>
      <RandomApi v-if="randomApi" :randomApi="randomApi" v-on:updateApi="getRandomApi"/>
    </v-container>
  </div>
</template>

<script>
import { setInterval } from "timers";
import { API } from "../api";
import RandomApi from "./RandomApi";
export default {
  data() {
    return {
      count: 1,
      api: "Everything",
      randomApi: null
    };
  },
  components: {
    RandomApi
  },
  methods: {
    startCounter: function() {
      var v = this;
      setInterval(function() {
        v.api =
          v.$store.state.categories[
            Math.floor(Math.random() * v.$store.state.categories.length)
          ];
      }, 3000);
    },
    getRandomApi() {
      API.get("random").then(response => {
        this.randomApi = response.data.entries[0];
      });
    }
  },
  created() {
    this.startCounter();
  },
  mounted() {
    this.getRandomApi();
  }
};
</script>

<style scoped>
/* .hero {
  height: calc(80vh - 56px);
  display: flex;
  align-items: center;
} */
</style>