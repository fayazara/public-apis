<template>
  <v-app-bar app dark flat color="primary">
    <v-app-bar-nav-icon @click.stop="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="font-weight-medium">
      <v-btn text to="/" class="toolbar-title">Public APIs</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/bookmarks">Bookmarks</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.pointer {
  cursor: pointer;
}

.toolbar-title {
  color: white !important;
  text-decoration: none !important;
}
</style>