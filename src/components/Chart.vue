<template>
    <v-container>
        <h1>Route Elevation Data</h1>
        <hr>


        <!-- <div class="graph-container">
        <ul class="bargraph">
            <li v-for="(route) in routes"
            :key="route.id"
            :style="{ width: (route.finalElevation/100 - route.startingElevation/100) *2.5 + '%'}"
            >
            {{ route.name }}
            </li>
        </ul>
        </div> -->

        <dl>
        <dt>
            Route Difficulty By Elevation Gained
        </dt>
            <dd v-for="(route) in routes"
            :key="route.id"
            v-bind:class="['percentage', `percentage-${ Math.floor(route.finalElevation/100 - route.startingElevation/100) }`]"
            >
            <span class="text">{{ route.name }}</span>
            </dd>
        </dl>

    </v-container>
</template>

<script>

import axios from "axios"

export default {
data () {
    return {
      routes: null,
    }
  },
  mounted () {
    axios
      .get('https://bike-routes-api.herokuapp.com/course/getAllCourses')
      .then(response => (this.routes = response.data))
      .catch(error => console.log(error))
  },
}
</script>

<style lang="scss" scoped>


dl {
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  position: relative;
  padding: 20px;
}

dt {
  align-self: flex-start;
  width: 100%;
  font-weight: 700;
  display: block;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 130px;
}

.text {
  display: flex;
  align-items: center;
  height: 40px;
  width: 130px;
  background-color: white;
  position: absolute;
  left: 0;
  justify-content: flex-start;
}

.percentage {
  font-size: .8em;
  line-height: 1;
  text-transform: uppercase;
  width: 100%;
  height: 40px;
  margin-left: 130px;
  background: repeating-linear-gradient(
  to right,
  #ddd,
  #ddd 1px,
  #fff 1px,
  #fff 5%
);
  
  &:after {
    content: "";
    display: block;
    background-color: #3b86d8;
    width: 0px;
    margin-bottom: 10px;
    height: 90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

@for $i from 1 through 100 {
  .percentage-#{$i} {
    &:after {
      $value: ($i * 1%);
      width: $value;
    }
  }
}


</style>