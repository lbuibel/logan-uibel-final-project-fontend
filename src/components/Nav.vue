<template>
  <div>
    <!-- <v-toolbar color="primary">
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="top-routes">Top Routes</v-btn>
        <v-btn text to="elevation">Elevation Data</v-btn>
        <v-btn text to="add-route">Add Route</v-btn>
      </v-toolbar-items>
    </v-toolbar> -->
    <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Utah Bike Routes</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
      >
        <v-list-item-group
          v-model="group"
        >

            <v-btn 
            block
            text
            color="primary"
            large
            to="/">Home
            </v-btn>

          <v-btn 
            block
            text
            color="primary"
            large
            to="top-routes">Top Routes</v-btn>   

            <v-btn 
            block
            text
            color="primary"
            large
            to="elevation">Elevation Data</v-btn>  

            <v-btn 
            block
            text
            color="primary"
            large
            to="add-route">Add Route</v-btn> 

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data: () => {
      return {
        drawer: false,
      }
    }
  }
</script>

<style>
  .v-application a {
    color: white;
    text-decoration: none;
  }

  .v-list--nav {
    padding: 0;
  }

    .v-list--item {
    padding: 0;
  }
</style>