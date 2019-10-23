<template>
  <v-content>
    <div class="mx">
      <transition name="scroll-y-transition" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      source: "/"
    };
  }
};
</script>
<style scoped>
.mx {
  padding-top: 2rem;
}
@media (min-width: 1281px) and (max-width: 600px) {
  .mx {
    max-width: 75%;
    margin: auto;
  }
}

@media (min-width: 1281px) {
  .mx {
    max-width: 75%;
    margin: auto;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .mx {
    max-width: 90%;
    margin: auto;
  }
}
</style>