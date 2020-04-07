<template>
  <div>
    <v-toolbar color="primary">
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="top-routes">Top Routes</v-btn>
        <v-btn text to="add-route">Add Route</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style scoped>
  .v-application a {
    color: white;
    text-decoration: none;
  }
</style>