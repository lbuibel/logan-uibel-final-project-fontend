<template>
    <v-container>
        <h1>Route Elevation Change</h1>
        <hr>
        <dl>
            <dd v-for="(route) in routes"
            :key="route.id"
            v-bind:class="['percentage', `percentage-${ (Math.floor(route.finalElevation/100 - route.startingElevation/100))*2 }`]"
            >
            <span class="elevation-change"> {{ route.finalElevation - route.startingElevation }} ft.</span>
            <span class="text">{{ route.name }}</span>
            </dd>
        </dl>
        <br>
        <br>

        <h1>Route Distance</h1>
        <hr>
        <dl>
            <dd v-for="(route) in routes"
            :key="route.id"
            v-bind:class="['percentage', `percentage-${ (Math.floor(route.miles)*3) }`]"
            >
            <span class="elevation-change"> {{ route.miles }} miles</span>
            <span class="text">{{ route.name }}</span>
            </dd>
        </dl>

        <br>
        <br>

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
h3 {
    margin-left: -20px;
}

dl {
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
  position: relative;
margin-top: 40px;
}



.elevation-change {
    color: white;
    font-size: .75rem;
    text-transform: lowercase;
    padding-left: 1%;
    z-index: 20;
    position: absolute;
    transform: translateY(50%)
}

.text {
  display: flex;
  align-items: center;
  font-size: .75rem;
  height: 30px;
  width: 25%;
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
  margin-left: 30%;
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
    margin-bottom: 10px;
    height: 85%;
    position: relative;
    top: 30%;
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