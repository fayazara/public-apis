<template>
  <div :key="category">
    <p class="title" v-if="apis">{{apis.count}} apis on {{category}}</p>
    <v-row v-if="apis">
      <v-col cols="12" sm="6" v-for="(api, index) in apis.entries" :key="index">
        <Apicard v-if="apis" :api="api" />
      </v-col>
    </v-row>
    <div v-else>
      <v-skeleton-loader v-for="n in 6" :key="n" height="94" type="list-item-two-line"></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
import { API } from "../api";
import Apicard from './Apicard'
export default {
  props: ["category"],
  data() {
    return {
      apis: null
    };
  },
  components: {
    Apicard
  },
  methods: {
    getApiList() {
      this.apis = null;
      API.get("entries", {
        params: {
          category: this.category.toLowerCase()
        }
      }).then(response => {
        this.apis = response.data;
      });
    }
  },
  watch: {
    $route() {
      this.getApiList();
    }
  },
  mounted() {
    this.getApiList();
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>