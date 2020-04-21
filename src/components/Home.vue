<template>
  <div>
      <v-parallax
    src="../../public/assets/bike_sign.jpeg"
    class="m-0"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-3 font-weight-thin mb-4">Bike Routes</h1>
        <!-- <h4 class="subheading">Build your application today!</h4> -->
      </v-col>
    </v-row>
  </v-parallax>
    
    <v-container>
  <search/>
       <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/AllRoutes.gql')"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
                <div v-else-if="error" class="error apollo">
                        <v-list-item>
                        <v-icon color="white" class="pr-2">mdi-alert-circle</v-icon>
                        <v-list-item-content>An Error Occured...</v-list-item-content>
                    </v-list-item>
                </div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo">  
          <v-row class="flex-wrap">
            <v-col cols="12" xs="12" sm="6" md="6" lg="4" v-for="(route, i) in data.Routes" :key="i">
              <v-lazy
              v-model="isActive"
              :options="{
                threshold: .5
                }"
                >
                <v-card
                class="mx-auto"
                max-width="500"
                min-height="500"
                >
                <!-- <iframe
                width="100%"
                height="350"
                :src= "route.iframeData" >
                >
                </iframe> -->
                  <v-card-title>
                  {{ route.name }}
                </v-card-title>
                <v-card-subtitle class="pb-0">
                  Surface Type: {{ route.type }}
                  </v-card-subtitle>
                  <v-card-subtitle class="pb-0 pt-0">
                  Miles: {{ route.miles }}
                  </v-card-subtitle>
                </v-card>
              </v-lazy>
            </v-col>
          </v-row> 
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

  </v-container>
  </div>
</template>

<script>
import Search from '../components/SearchGQL'
  export default {
    name: 'AllRoutes',
    data: () => {
      return {
        isActive: false,
      }
    },
    components: {
      Search,
    },
  }
</script>

<style scoped>
v-img {
  border: solid red;
}
</style>