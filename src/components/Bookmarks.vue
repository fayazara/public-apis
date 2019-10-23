<template>
  <div :key="'bookmarks'">
    <p class="title">Bookmarks</p>
    <v-row v-if="$store.state.bookmarks">
      <v-col cols="12" sm="6" v-for="(api, index) in $store.state.bookmarks" :key="index">
        <Apicard :api="JSON.parse(api)" :bookmarks="true"/>
      </v-col>
    </v-row>
    <div v-else>
      <p>You have not bookmarked anything yet</p>
    </div>
  </div>
</template>

<script>
import Apicard from "./Apicard";
export default {
    components: {
        Apicard
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