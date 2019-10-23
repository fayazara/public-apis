<template>
  <div>
    <v-card>
      <v-card-text>
        <div class="d-flex justify-space-between align-center">
          <span class="title text--primary">{{api.API}}</span>
          <v-btn v-if="!bookmarks" text icon @click="bookmark" :color="bookmarkColor">
            <v-icon>{{icon}}</v-icon>
          </v-btn>
        </div>
        <p>{{api.Description}}</p>
        <div>
          <v-chip-group multiple column active-class="primary--text">
            <v-chip label>
              <span class="caption font-weight-bold mr-1">Auth</span>
              <span class="caption" v-if="api.Auth">{{api.Auth}}</span>
              <span class="caption" v-else>unknown</span>
            </v-chip>
            <v-chip label>
              <span class="caption font-weight-bold mr-1">HTTPS:</span>
              <span>
                <v-icon size="medium" v-if="api.HTTPS">mdi-check</v-icon>
                <v-icon size="medium" v-else>mdi-close</v-icon>
              </span>
            </v-chip>
            <v-chip label>
              <span class="caption font-weight-bold mr-1">CORS</span>
              <span class="caption">{{api.Cors}}</span>
            </v-chip>
          </v-chip-group>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn :href="api.Link" target="_blank" text color="deep-purple accent-4">Go to api</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar">{{ api.API }} bookmarked</v-snackbar>
  </div>
</template>

<script>
export default {
  props: ["api", "bookmarks"],
  data() {
    return {
      bookmarkColor: null,
      icon: "mdi-heart-outline",
      snackbar: false
    };
  },
  methods: {
    bookmark() {
      this.bookmarkColor = "red";
      this.icon = "mdi-heart";
      this.$store.dispatch("addBookmark", this.api);
      this.snackbar = true;
    }
  }
};
</script>

<style>
</style>