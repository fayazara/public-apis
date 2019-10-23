<template>
  <v-card class="mt-8" outlined>
    <v-card-text>
      <span>Here's a random api for you</span>
      <br />
      <br />
      <p class="display-1 text--primary">{{randomApi.API}}</p>
      <div class="text--primary">{{randomApi.Description}}</div>
      <div>
        <v-chip-group multiple column active-class="primary--text">
          <v-chip label>
            <span class="caption font-weight-bold mr-1">Auth</span>
            <span class="caption">{{randomApi.Auth}}</span>
          </v-chip>
          <v-chip label>
            <span class="caption font-weight-bold mr-1">HTTPS:</span>
            <span>
              <v-icon size="medium" v-if="randomApi.HTTPS">mdi-check</v-icon>
              <v-icon size="medium" v-else>mdi-close</v-icon>
            </span>
          </v-chip>
          <v-chip label>
            <span class="caption font-weight-bold mr-1">CORS</span>
            <span class="caption">{{randomApi.Cors}}</span>
          </v-chip>
        </v-chip-group>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn target="_blank" :href="randomApi.Link" text color="deep-purple accent-4">Go to api</v-btn>
      <v-btn text icon color="deep-purple accent-4" @click="$emit('updateApi')">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ["randomApi"]
};
</script>

<style>
</style>