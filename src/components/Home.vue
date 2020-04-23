<template>
  <div>

  <!-- HOME PAGE HERO IMAGE -->
  <v-parallax
      src="../../public/assets/bike_sign.jpeg"
      class="m-0"
      >
      <v-row
      align="center"
      justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-3 font-weight-thin mb-4">Route Guide</h1>
          <h4 class="subheading">The best cycling routes Utah has to offer</h4>
        </v-col>
      </v-row>
  </v-parallax>
    
    <v-container>
    <section>
      <p class="display-1 text-center mt-10">Getting Started</p>
      <p class="text-center body-1 mb-10">The Route Guide database contains some of the best routes for both cycling and motorcycling in Utah.  Look up some of our favorite routes below.</p>
    </section>
    <!-- SEARCH FOR ROUTE BY NAME - SEARCHES GRAPHQL DATABASE -->
    <!-- SEARCH FUNCTION USES ALLROUTES AND SEARCHROUTES QUERY -->
    <nameSearch class="mt-10"></nameSearch>
    <p class="font-weight-light body-2 primary--text id-link mt-1" @click="idSearch()">Know the id of the route you're looking for?</p>
  
    <!-- IF USER KNOWS THE ROUTE ID FOR THE ROUTE THEY ARE LOOKING FOR -->
    <!-- THE CAN SELECT THE TEXT ABOVE AND SEARCH ONLY FOR THAT ROUTE -->
    <section v-if="searchById">
      <!-- USES GETROUTE QUERY -->
      <idSearch/>
    </section>

    <section>
      <p class="display-1 text-center mt-10">All Routes</p>
      <p class="text-center body-1 mb-10">Route are continually added, so be sure to stay up to date!</p>
    </section>

    <!-- USES AllROUTES QUERY -->
    <allroutes/>



  </v-container>
  </div>
</template>

<script>
import NameSearch from '../components/SearchByNameGQL'
import IdSearch from '../components/SearchByIdGQL'
import allroutes from '../components/AllRoutesGQL'

  export default {
    name: 'AllRoutes',
    data: () => {
      return {
        isActive: false,
        searchById: false
      }
    },
    components: {
      NameSearch,
      IdSearch,
      // gqlroutes,
      allroutes
    },
    methods: {
      idSearch (){
        console.log('test')
        if (this.searchById === false){
          this.searchById = true
        } else {
          this.searchById = false
        }
      }
    }
  }
</script>

<style scoped>
.id-link:hover {
  cursor: pointer;
  text-decoration: underline;
}

</style>

