<template>
  <v-navigation-drawer light v-model="$store.state.drawer" app>
    <div v-if="$store.state.categoriesLoading">
      <v-skeleton-loader v-for="n in 18" :key="n" height="60" type="list-item-two-line"></v-skeleton-loader>
    </div>
    <v-list v-else>
      <div v-for="(category, index) in $store.state.categories" :key="index">
        <v-list-item link :to="`/api/${category}`">
          <v-list-item-content>
            <v-list-item-title>{{category}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-list-item
        link
        href="https://twitter.com/fayazara"
        style="background-color:#1876d1"
        target="_blank"
      >
        <v-list-item-content>
          <v-list-item-title style="color:white">Made by Fayaz Ahmed</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        href="https://github.com/public-apis/public-apis"
        style="background-color:#4f9a46"
        target="_blank"
      >
        <v-list-item-content>
          <v-list-item-title style="color:white">With Todd Motto's APIs list</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getCategories");
  }
};
</script>

<style>
.v-list-item--active {
  border-left: 4px solid #1c76d2;
}
</style>