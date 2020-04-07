<template>
    <v-container>
        <h1>Top 10 Routes</h1>
        <hr>
          <v-row class="flex-wrap">
              <v-col col="12" xs="12" sm="12" md="6" lg="4"
              v-for="(route) in routes.slice(0, 10)"
               :key="route._id"
               >
                <p> {{ route.name }} </p>
              </v-col>
          </v-row>


    </v-container>
</template>

<script>

import axios from "axios"

export default {
data () {
    return {
      routes: null
    }
  },
  mounted () {
    axios
      .get('https://bike-routes-api.herokuapp.com/course/getAllCourses')
      .then(response => (this.routes = response.data))
      .catch(error => console.log(error))
  }

    }
</script>