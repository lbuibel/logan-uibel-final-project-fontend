<template>
   <div>
       <v-card>
        <v-card-title class="headline">
            Search By ID
        </v-card-title>
        <v-card-text>

            <v-text-field
            v-model="id"
            color="blue"
            label="Routes"
            placeholder="Start typing to Search"
            prepend-icon="mdi-database-search"
            class="mt-2 mb-0"
            >
            </v-text-field>
        </v-card-text>

        <v-divider></v-divider>

             <!-- SECTION EXPANDS BASED ON "SEARCHSTRING" BEING ENTERED -->    
            <!-- EXPANDED SECTION CONTAINS REMAINING FORM INPUTS FOR ROUTE UPDATE -->
            <v-expand-transition>
            <v-list v-if="id">

             <!-- USES "SEARCHSTRING" TO SEARCH FOR SPECIFIC ROUTE -->
            <!-- ONLY RETURNS NEEDED ROUTE FOR POPULATING ID INTO THE FORM FOR USER -->
                <ApolloQuery
                :query="require('../graphql/GetRoute.gql')"
                :variables="{ id }"
                >
                    <template v-slot="{ result: { loading, error, data } }">

                        <div v-if="loading" class="loading apollo">
                            <v-list-item>
                                <v-icon color="white" class="pr-2">mdi-arrow-down-bold-circle-outline</v-icon>
                                <v-list-item-content>Loading...</v-list-item-content>
                            </v-list-item>
                        </div>

                        <div v-else-if="error" class="error apollo">
                            <v-list-item>
                                <v-icon color="white" class="pr-2">mdi-alert-circle</v-icon>
                                <v-list-item-content>An Error Occured...</v-list-item-content>
                            </v-list-item>
                        </div>

                        <div v-else-if="data" class="result apollo">
                            {{ data.route.name }}
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title> {{  data.route.name }}</v-list-item-title>
                                    <v-list-item-subtitle>Distance: {{  data.route.miles }} miles</v-list-item-subtitle>
                                    <v-list-item-subtitle>Starting Elevation {{  data.route.startingElevation }} ft.</v-list-item-subtitle>
                                    <v-list-item-subtitle>Final Elevation {{  data.route.finalElevation }} ft.</v-list-item-subtitle>
                                    <v-list-item-subtitle>Elevation Gain {{  data.route.finalElevation - data.route.startingElevation }} ft.</v-list-item-subtitle>
                                    <v-list-item-subtitle>Average Grade: {{ (((data.route.finalElevation - data.route.startingElevation) / (data.route.miles*5280)) * 100).toFixed(1)  }}%</v-list-item-subtitle>
                                    <iframe
                                    width="100%"
                                    height="350"
                                    :src= "data.route.iframeData"
                                    class="mt-2"
                                    >
                                    </iframe>
                                </v-list-item-content>
                            </v-list-item>
                        </div>

                        <div v-else class="no-result apollo">
                            <v-list-item>
                                <v-icon color="white" class="pr-2">mdi-clipboard-alert</v-icon>
                                <v-list-item-content>No Results...</v-list-item-content>
                            </v-list-item>
                        </div>

                    </template>

                </ApolloQuery>
            </v-list>

            <v-expand-transition></v-expand-transition>

            </v-expand-transition>
            <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn
                    :disabled="!id"
                    color="#EA4235"
                    outlined
                    @click="id = null"
                    >
                    Clear
                    <v-icon right>mdi-close-circle</v-icon>
                </v-btn>
            </v-card-actions>
       </v-card>
    </div>
</template>

<script>
// import axios from 'axios'

  export default {
    data: () => ({
    id: '',
    isLoading: false,
    model: null,
    search: null,
    })
  }
</script>
