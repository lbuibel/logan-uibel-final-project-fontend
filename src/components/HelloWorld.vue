<template>
  <v-container>
   <h1>Routes</h1>
   <hr>

       <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/HelloWorld.gql')"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">  
          <v-row class="flex-wrap">
            <v-col col="12" sm="6" md="4" v-for="(route, i) in data.Routes" :key="i">
              <v-card
              class="mx-auto"
              max-width="344"
              min-height="300"
              >
              <iframe
              width="100%"
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
    name: 'HelloWorld',

    data: () => ({
      
    }),
  }
</script>
