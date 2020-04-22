<template>
  <v-container fluid>

    <ApolloQuery
    :query="require('../graphql/AllRoutes.gql')"
    >
        <!-- Loading -->
        <template v-slot="{result: { loading, error, data } }">
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">
                <v-list-item>
                    <v-icon color="white" class="pr-2">mdi-alert-circle</v-icon>
                        <v-list-item-content>An Error Occured...</v-list-item-content>
                </v-list-item>
            </div>

            <!-- If Data-->
            <div v-else-if="data" class="result apollo"> 
                <v-data-iterator
                :items="data.Routes"
                :v-model="count = data.Routes.length"
                :items-per-page.sync="itemsPerPage"
                :page="page"
                hide-default-footer
                >
                    <template v-slot:default="props">
                        <v-row>
                            <v-col
                            v-for="item in props.items"
                            :key="item.name"
                            cols="12"
                            sm="6"
                            lg="4"
                            >
                            <v-card>
                                <v-card-title class="title font-weight-medium">{{ item.name }}</v-card-title>
                                <v-divider></v-divider>
                                <iframe
                                width="100%"
                                height="350"
                                :src= "item.iframeData" >
                                >
                                </iframe>
                                <v-list dense>
                                    <v-list-item>Distance: {{item.miles}} miles</v-list-item>
                                    <v-list-item>Starting Elevation: {{item.startingElevation}} ft.</v-list-item>
                                    <v-list-item>Final Elevation: {{item.finalElevation}} ft.</v-list-item>
                                    <v-list-item>Elevation Gain: {{item.finalElevation - item.startingElevation}} ft.</v-list-item>
                                    <v-list-item>Average Grade: {{ (((item.finalElevation - item.startingElevation) / (item.miles*5280)) * 100).toFixed(1)  }}%</v-list-item>


                                </v-list>
                            </v-card>
                            </v-col>
                        </v-row>
                    </template>

                    <template v-slot:footer>
                        <v-row class="mt-2" align="center" justify="center">
                        <span class="grey--text">Items per page</span>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                            <v-btn
                                dark
                                text
                                color="primary"
                                class="ml-2"
                                v-on="on"
                            >
                                {{ itemsPerPage }}
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                            </template>
                            <v-list>
                            <v-list-item
                                v-for="(number, index) in itemsPerPageArray"
                                :key="index"
                                @click="updateItemsPerPage(number)"
                            >
                                <v-list-item-title>{{ number }}</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <span
                            class="mr-4
                            grey--text"
                        >
                            Page {{ page }} of {{ numberOfPages }}
                        </span>
                        <v-btn
                            fab
                            dark
                            color="blue darken-2"
                            class="mr-1"
                            @click="formerPage"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            fab
                            dark
                            color="blue darken-2"
                            class="ml-1"
                            @click="nextPage"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                        </v-row>
                    </template>
                </v-data-iterator>
            </div><!-- END OF QUERY -->
        </template> 
    </ApolloQuery>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        count: null,
        itemsPerPageArray: [4, 8, 12, 16],
        search: '',
        page: 1,
        itemsPerPage: 4,
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.count / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>
