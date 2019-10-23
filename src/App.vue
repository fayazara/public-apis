<template>
  <v-app dark>
    <Sidebar />
    <Navbar />
    <Main />
  </v-app>
</template>

<script>
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";
import Main from "./components/Layout/Main";
export default {
  components: {
    Sidebar,
    Navbar,
    Main
  },
  mounted(){
    this.$store.dispatch("getAllApis");
  }
};
</script>

<style>
.v-btn-toggle > .v-btn.v-size--default {
  height: 56px !important;
}

.v-btn-toggle {
  border-radius: 4px !important;  
}

.v-list {
  padding: 8px 0 0 0 !important;
}
</style>