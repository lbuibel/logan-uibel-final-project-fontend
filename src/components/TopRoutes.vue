<template>
    <v-container>
        <h1>Top 10 Routes</h1>
        <hr>

        <section v-if="error">
            <v-alert type="success">
            I'm a success alert.
            </v-alert>
        </section>

        <section v-else>
            <div v-if="loading" class="text-center"> 
                   <v-progress-circular
                indeterminate
                color="primary"
                ></v-progress-circular>
            </div>
          <v-row class="flex-wrap">
              <v-col col="12" xs="12" sm="12"
              v-for="(route) in routes"
               :key="route._id"
               >
                <div class="large-card">
                <iframe
                :src= "route.iframeData" >
                >
                </iframe>
                  <div class="toproute-info">
                    <h2> {{route.name}}</h2>
                    <v-btn
                    text
                    color="primary accent-4"
                    >
                    Expand
                   </v-btn>
 
                  </div>
                </div>
              </v-col>
          </v-row>
        </section>

    </v-container>
</template>

<script>

import axios from "axios"

export default {
data () {
    return {
      routes: null,
      loading: true,
      error: false,
    }
  },
  mounted () {
    axios
      .get('https://bike-routes-api.herokuapp.com/course/getAllCourses')
      .then(response => (this.routes = response.data.slice(0, 10)))
      .catch(error => console.log(error))   
      .finally(() => this.loading = false)
  }

    }
</script>

<style lang="css" scoped>

.large-card {
  display: flex;
  flex-direction: row;
  height: 35vh;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.large-card iframe {
  width: 50%;
}

.toproute-info {
  padding: 1rem;
}
</style>