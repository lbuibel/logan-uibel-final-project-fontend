<template>
    <div>
        <section>
          <p class="title mt-10 mb-0">Search by Grade</p>
        </section>

        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="items"
              label="Max Average Gradient"
              v-model="grade"
              @change="getRoutesByGrade()"
            ></v-select>
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
            <p>No routes found under {{ grade}}% grade</p>
            </section>

            <v-row class="flex-wrap">
                <v-col col="12" xs="12" sm="4" lg="3"
                v-for="route in gradeRoutes"
                :key="route._id"
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>{{route.name}}</v-list-item-title>
                            <v-list-item-subtitle>Distance: {{route.miles}} miles</v-list-item-subtitle>
                            <v-list-item-subtitle>Starting Elevation: {{route.startingElevation}} ft.</v-list-item-subtitle>
                            <v-list-item-subtitle>Final Elevation: {{route.finalElevation}} ft.</v-list-item-subtitle>
                            <v-list-item-subtitle>Elevation Gain: {{route.finalElevation - route.startingElevation}} ft.</v-list-item-subtitle>
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
      items: [1,2,3,4,5,6,7,8,9,10],
      gradeRoutes: null,
      grade: null,
      dataEmpty: false,
      error: false,
    }),
    methods: {
        getRoutesByGrade() {
        const url = `https://bike-routes-api.herokuapp.com/course/maxAverageGrade/` + this.grade;
        axios.get(url)
        .then(response => {
            console.log(response.data)
            if(response.data <= 0){
              this.dataEmpty = true
              this.gradeRoutes = null
              console.log('data empty')
            } else {
              this.dataEmpty = false
              this.gradeRoutes = response.data
            }
        }).catch(error => console.log(error))
    },
    }
  }

</script>