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
            <v-divider></v-divider>
        <v-expand-transition>
        <v-list v-if="searchString" class="red lighten-3">

            <ApolloQuery
            :query="require('../graphql/SearchRoutes.gql')"
            :variables="{ searchString }"
            >
            <template v-slot="{ result: { loading, error, data } }">

                <div v-if="loading" class="loading apollo">
                    <v-list-item>
                        <v-list-item-content>Loading...</v-list-item-content>
                    </v-list-item>
                </div>

                <div v-else-if="error" class="error apollo">
                    <v-list-item>
                        <v-list-item-content>An Error Occured...</v-list-item-content>
                    </v-list-item>
                </div>

                <div v-else-if="data" class="result apollo">
                    <v-list-item
                    v-for="(route, i) in data.Routes" 
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title> {{  route.name }}</v-list-item-title>
                        <v-list-item-subtitle> {{  route.miles }}</v-list-item-subtitle>
                        <v-list-item-subtitle> {{  route.id }}</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    <!-- <v-col col="12" xs="12" sm="12" md="6" v-for="(route, i) in data.Routes" :key="i">
                        <v-list-item-content>

                        </v-list-item-content>
                     </v-col> -->
                </div>

                    <div v-else class="no-result apollo">
                    <v-list-item>
                        <v-list-item-content>No Results...</v-list-item-content>
                    </v-list-item>
                    </div>
                    </template>
                </ApolloQuery>

        </v-list>
            <v-expand-transition>
            </v-expand-transition>

    </v-expand-transition>
        <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!searchString"
        color="grey darken-3"
        @click="searchString = null"
      >
        Clear
        <v-icon right>mdi-close-circle</v-icon>
      </v-btn>
    </v-card-actions>
        </v-card>




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
      computed: {
      fields () {
        if (!this.searchString) return []

        return Object.keys(this.searchString).map(key => {
          return {
            key,
            value: this.searchString[key] || 'n/a',
          }
        })
      },
      items () {
          return this.entries.map(entry => entry.name)
      }
      },
      watch: {
          search () {
          if (this.items.length > 0) return

          // Items have already been requested
          if (this.isLoading) return

          this.isLoading = true

        axios
        .get('https://bike-routes-api.herokuapp.com/course/getAllCourses')
        .then(response => (this.entries = response.data))
        .catch(error => console.log(error))
        .finally(() => (this.isLoading = false))
          }
      }
  }
</script>