<template>
  <v-app>
    <Nav/>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar> -->

    <v-content>
      <div>
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/add-route">Add Route</router-link> -->
      <!-- <addRoute/> -->
      <!-- <AllRoutes/> -->
      </div>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
// import ApolloExample from './components/ApolloExample';
// import AllRoutes from './components/AllRoutes'
// import AddRoute from './components/AddRoute'

export default {
  name: 'App',

  components: {
    Nav
    // AllRoutes,
    // AddRoute,
  },

  data: () => ({
    //
  }),
};
</script>
