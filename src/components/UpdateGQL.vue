<template>
    <v-card class="pa-3 mx-auto mb-5">
    <p class="display-1 text--primary mb-0">Update Route</p>
    <!-- ENCOMPASING MUTATION TO UPDATE/EDIT ROUTE INFORMATION -->
    <ApolloMutation
    :mutation="require('../graphql/UpdateRoute.gql')"
    :variables="{
        id,
        name,
        type,
        miles,
        startingElevation,
        finalElevation,
        iframeData,
        }"
        @done="onDone"
        class="mt-0"
    >
    <template v-slot="{ mutate, error }">
        <!-- FORM FOR UPDATED ROUTE INFORMATION -->
        <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
            >
            <v-row>
                <v-col cols="12" sm="6">

             <!-- QUERY TO LOAD ROUTE NAMES FOR AUTOSUGGESTION -->
            <!-- NAME IS THEN USED BY ANOTHER QUERY GET SPECIFIC ROUTE ID ETC -->
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
                        <v-autocomplete
                        v-model="searchString"
                        :items= "data.Routes.map(route => route.name)"
                        color="blue"
                        item-text="Description"
                        label="Routes"
                        placeholder="Start typing to Search"
                        class="mt-2 mb-0"
                    ></v-autocomplete>
                </div>
                <!-- No result -->
                <div v-else class="no-result apollo">No result :(</div>
            </template>
            </ApolloQuery>


             <!-- SECTION EXPANDS BASED ON "SEARCHSTRING" BEING ENTERED -->    
            <!-- EXPANDED SECTION CONTAINS REMAINING FORM INPUTS FOR ROUTE UPDATE -->
            <v-expand-transition>
            <v-list v-if="searchString">

             <!-- USES "SEARCHSTRING" TO SEARCH FOR SPECIFIC ROUTE -->
            <!-- ONLY RETURNS NEEDED ROUTE FOR POPULATING ID INTO THE FORM FOR USER -->
                <ApolloQuery
                :query="require('../graphql/SearchRoutes.gql')"
                :variables="{ searchString }"
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
                            <div
                            v-for="(route, i) in data.Routes" 
                            :key="i"
                            >

                            <v-text-field
                            v-model="name" 
                            @input="id = route.id"
                            label="Updated Name" 
                            :rules="[v=> !!v || 'Name is required']"
                            >
                            </v-text-field>
                            <v-select
                            v-model="type"
                            label="Route Type"
                            :items="types"
                            :rules="[v=> !!v || 'Type is required']"
                            required
                            >
                            </v-select>

                            <v-text-field
                            v-model.number="miles"
                            label="Miles"
                            required
                            :rules="[v=> !!v || 'Miles are required']"
                            >
                            </v-text-field>


                            <v-text-field
                            v-model.number="startingElevation"
                            label="Starting Elevation"
                            required
                            :rules="[v=> !!v || 'Starting elevation is required']"
                            >
                            </v-text-field>

                            <v-text-field
                            v-model.number="finalElevation"
                            label="Final Elevation"
                            required
                            :rules="[v=> !!v || 'Final elevation is required']"
                            >
                            </v-text-field>

                            <v-text-field
                            v-model="iframeData"
                            label="iframe"
                            required
                            @change="iframeEdit()"
                            :rules="[v=> !!v || 'iframe is required']"
                            >
                            </v-text-field>

                            <v-checkbox
                                v-model="checkbox"
                                :rules="[v => !!v || 'Map must be correct to continue!']"
                                label="iframe is correct?"
                                required
                                >
                            </v-checkbox>

                            <v-btn
                            :disabled="!valid"
                            outlined
                            color="success"
                            class="mr-4"
                            @click="mutate()"
                            >
                            Update Route
                            </v-btn>

                            <v-btn
                            outlined
                            color="#EA4235"
                            class="mr-4"
                            @click="reset"
                            >
                            Reset
                            </v-btn>

                            </div>
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
            </v-expand-transition>

                </v-col>

             <!-- PREVIEWS IFRAME TO USER AFTER THEY'VE ENTERED IT AND IT'S BEEN EDITED -->
                <v-col cols="12" sm="6">
                    <section v-if="!iframeInput">
                        <iframe
                        height="350"
                        width="100%"
                        >
                        </iframe>
                    </section>
                    <section v-if="iframeInput">
                        <iframe
                        height="350"
                        width="100%"
                        :src= iframeData
                        >
                        </iframe>
                    </section>
                </v-col>            
            </v-row>  

                <section v-if="error">
                    <v-alert type="error">
                        Error Updating Route.
                    </v-alert>        
                </section>

        </v-form>
    </template>
    </ApolloMutation>
        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        >
        {{ text }}
        <v-btn
            color="blue"
            text
            @click="snackbar = false"
        >
            Close
        </v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
// import axios from 'axios'

  export default {
    data: () => ({
    id: '',
    name: '',
    type: '',
    miles: 0,
    startingElevation: 0,
    finalElevation: 0,
    iframeData: '',
    types: ['paved', 'singletrack', 'gravel'],
    iframeInput: false,
    valid: true,
    checkbox: false,
    lazy: false,
    searchString: '',
    snackbar: false,
    text: 'Route Updated',
    timeout: 2000,
    }),
      methods: {
        onDone() {
            this.snackbar = true
            return console.log('Done')
        },
        iframeEdit() {
            this.$refs.form.validate()
            const width = this.iframeData.indexOf('width')
            const height = this.iframeData.indexOf('height')
            return [String(this.iframeData = (this.iframeData.slice(13, width) + this.iframeData.slice(height + 13).slice(0,-10))), this.iframeInput = true]
        },
        reset () {
        this.searchString = null
        this.$refs.form.reset()
      }
      }
  }
</script>
