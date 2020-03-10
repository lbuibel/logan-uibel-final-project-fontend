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
        <div v-else-if="data" class="result apollo">{{ data.Routes }}
          <v-list>
            <v-list-item v-for="(route, i) in data.Routes" :key="i">
              <p> {{ route.name }}</p>
            </v-list-item>
          </v-list>
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
