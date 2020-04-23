<template>
    <div>
        <section>
          <p class="title mt-10 mb-0">Search by Distance</p>
        </section>

        <v-row align="center">
            <v-col cols="12">
                <v-subheader class="pl-0">Max Miles</v-subheader>
                <v-slider
                v-model="miles"
                thumb-label
                @change="getRoutesByMiles()"
                ></v-slider>
            </v-col>
        </v-row>

        <section v-if="error">
            <v-list-item>
                <v-icon color="white" class="pr-2">mdi-alert-circle</v-icon>
                <v-list-item-content>An Error Occured...</v-list-item-content>
            </v-list-item>      
        </section>

        <section v-else>
            <section v-if="dataEmpty">
            <p>No routes found under {{ miles}} miles</p>
            </section>

                <v-row class="flex-wrap">
                    <v-col col="12" xs="12" sm="4" lg="3"
                    v-for="route in milesRoutes"
                    :key="route._id"
                    >
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{route.name}}</v-list-item-title>
                                <v-list-item-subtitle>Distance: {{route.miles}} miles</v-list-item-subtitle>
                                <v-list-item-subtitle>Starting Elevation: {{route.startingElevation}} ft.</v-list-item-subtitle>
                                <v-list-item-subtitle>Final Elevation: {{route.finalElevation}} ft.</v-list-item-subtitle>
                                <v-list-item-subtitle>Elevation Gain: {{route.finalElevation - route.startingElevation}} ft.</v-list-item-subtitle>
                                <v-list-item-subtitle>Average Grade: {{ (((route.finalElevation - route.startingElevation) / (route.miles*5280)) * 100).toFixed(1)  }}%</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>

        </section>
</div> 
</template>

    

<script>
import axios from 'axios'

  export default {
    data: () => ({
      milesRoutes: null,
      dataEmpty: false,
      error: false,
      miles: null,
    }),
    methods: {
    getRoutesByMiles() {
        const url = `https://bike-routes-api.herokuapp.com/course/maxMiles/` + this.miles;
        axios.get(url)
        .then(response => {
            console.log(response.data)
            if(response.data <= 0){
              this.dataEmpty = true
              this.milesRoutes = null
              console.log('data empty')
            } else {
              this.dataEmpty = false
              this.milesRoutes = response.data
            }
        }).catch(error => console.log(error))
        }
    }
  }

</script>