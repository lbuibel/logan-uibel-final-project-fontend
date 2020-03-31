<template>
  <v-container>
   <h1>Routes</h1>
   <hr>

       <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/AllRoutes.gql')"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">  
          <v-row class="flex-wrap">
            <v-col col="12" xs="12" sm="12" md="6" v-for="(route, i) in data.Routes" :key="i">
              <v-card
              class="mx-auto"
              max-width="500"
              min-height="500"
              >
              <iframe
              width="100%"
              height="350"
              :src= "route.iframeData" >
              >
              </iframe>
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
            </v-col>
          </v-row> 
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

  </v-container>
</template>

<script>
  export default {
    name: 'AllRoutes',

    data: () => ({
      
    }),
  }
</script>
