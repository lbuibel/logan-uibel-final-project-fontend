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
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d97145.8544357055!2d-111.76778713327369!3d40.45738741384057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e1!4m4!2zNDDCsDI1JzU2LjYiTiAxMTHCsDQ0JzU1LjMiVw!3m2!1d40.4323889!2d-111.74869439999999!4m4!2zNDDCsDI4JzU2LjgiTiAxMTHCsDM4JzQ5LjciVw!3m2!1d40.4824444!2d-111.6471389!5e0!3m2!1sen!2sus!4v1583960279563!5m2!1sen!2sus" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
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
