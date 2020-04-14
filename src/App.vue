<template>
  <v-app>
    <Nav/>

    <v-content>

      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>

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

<style scoped>

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-10px);
      opacity: 0;
    }
  }

</style>