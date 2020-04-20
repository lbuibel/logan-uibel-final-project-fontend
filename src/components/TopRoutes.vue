<template>
  <v-container>

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
          <p>No routes found</p>
        </section>

          <v-row class="flex-wrap">
              <v-col col="12" xs="12" sm="12"
              v-for="route in gradeRoutes"
               :key="route._id"
               >
                <div class="large-card">
                  <div class="toproute-info">
                    <h4> {{route.name}}</h4>
                  </div>
                </div>
              </v-col>
          </v-row>
      </section>

  </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      items: [1,2,3,4,5,6,7,8,9,10],
      grade: null,
      gradeRoutes: null,
      milesRoutes: null,
      dataEmpty: false,
      error: false,

      miles: null,
    }),
    methods: {
        getRoutesByGrade() {
        const url = `https://bike-routes-api.herokuapp.com/course/maxAverageGrade/` + this.grade;
        axios.get(url)
        .then(response => {
            console.log(response.data)
            if(response.data <= 0){
              this.dataEmpty = true
              this.miles = 0
              console.log('data empty')
            } else {
              this.dataEmpty = false
              this.gradeRoutes = response.data
            }
        }).catch(error => console.log(error))
    },
    getRoutesByMiles() {
        const url = `https://bike-routes-api.herokuapp.com/course/maxMiles/` + this.miles;
        axios.get(url)
        .then(response => {
            console.log(response.data)
            if(response.data <= 0){
              this.dataEmpty = true
              this.grade = 0
              console.log('data empty')
            } else {
              this.dataEmpty = false
              this.gradeRoutes = response.data
            }
        }).catch(error => console.log(error))
        }
    }
  }

</script>