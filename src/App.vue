<template>
  <v-app>
    <Navbar/>

    <v-content>

      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>

    </v-content>
    <bottomFooter/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import bottomFooter from './components/footer'


export default {
  name: 'App',

  components: {
    Navbar,
    bottomFooter
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