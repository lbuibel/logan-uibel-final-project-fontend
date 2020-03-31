<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <addRoute/>
      <!-- <AllRoutes/> -->
    </v-content>
  </v-app>
</template>

<script>
// import ApolloExample from './components/ApolloExample';
// import AllRoutes from './components/AllRoutes'
import AddRoute from './components/AddRoute'

export default {
  name: 'App',

  components: {
    // AllRoutes,
    AddRoute,
  },

  data: () => ({
    //
  }),
};
</script>
