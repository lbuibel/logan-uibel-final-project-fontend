<template>
    <div>
        <!-- <input v-model="searchString" placeholder="Search"><br> -->
        <!-- {{ entries }} -->
        <v-card
            color="red lighten-2"
            dark
            >
            <v-card-title class="headline red lighten-3">
            Search for Routes
            </v-card-title>
            <v-card-text>
            <v-autocomplete
                v-model="searchString"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                color="white"
                hide-no-data
                hide-selected
                item-text="Description"
                label="Routes"
                placeholder="Start typing to Search"
                prepend-icon="mdi-database-search"
                return-object
            ></v-autocomplete>
            </v-card-text>
        </v-card>

        <ApolloQuery
        :query="require('../graphql/SearchRoutes.gql')"
        :variables="{ searchString }"
        >
            <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
                <v-col col="12" xs="12" sm="12" md="6" v-for="(route, i) in data.Routes" :key="i">
                    <p>{{  route.name  }} {{  route.miles  }}</p>
                </v-col>
            </div>
            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
            </template>
        </ApolloQuery>


    </div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      descriptionLimit: 60,
      searchString: '',
      entries: [],
      isLoading: false,
      model: null,
      search: null
    }),
    mounted () {
        axios
        .get('https://bike-routes-api.herokuapp.com/course/getAllCourses')
        .then(response => (this.entries = response.data))
        .catch(error => console.log(error))
        .finally(() => (this.isLoading = false))
  },
      computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
          return this.entries.map(entry => entry.name)
      }
    //   items () {
    //     return this.entries.map(entry => {
    //       const Description = entry.Description.length > this.descriptionLimit
    //         ? entry.Description.slice(0, this.descriptionLimit) + '...'
    //         : entry.Description

    //       return Object.assign({}, entry, { Description })
    //     })
    //   },
    },
//   items () {
//         return this.entries.map(entry => {
//           const Description = entry.name.length > this.name
//             ? entry.name.slice(0, this.name) + '...'
//             : entry.name

//           return Object.assign({}, entry, { Description })
//         })
//     }
  }
</script>