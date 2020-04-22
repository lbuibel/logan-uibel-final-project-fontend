<template>
  <div>

    <!-- HERO IMAGE -->
    <v-parallax
      src="../../public/assets/topo.jpg"
      class="m-0"
      height="350"
      >
      <v-row
      align="center"
      justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-3 font-weight-thin mb-4">Route Deep Dive</h1>
          <!-- <h4 class="subheading">Build your application today!</h4> -->
        </v-col>
      </v-row>
    </v-parallax>

    <!-- PAGE INTRO -->
      <v-container>

        <!-- USES 'maxMiles' ENDPOINT TO RETURN ROUTES UNDER A SPECIFIED DISTANCE  -->
        <searchByMilesRest/>
        <!-- USES 'maxAverageGrade' ENDPOINT TO RETURN ROUTES UNDER A SPECIFIED GRADIENT  -->
        <searchByGradeRest/>
        <!-- USES 'getAllCourses' ENDPOINT TO RETURN ALL ROUTES  -->
        <routeComparison/>

      </v-container>
  </div>
</template>

<script>

import SearchByMilesRest from '../components/SearchByMilesRest'
import SearchByGradeRest from '../components/SearchByGradeRest'
import RouteComparison from '../components/RouteComparisonRest'

export default {
data () {
    return {
      routes: null,
      loading: true,
      error: false,
    }
  },
  components: {
    SearchByMilesRest,
    SearchByGradeRest,
    RouteComparison,
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


  // SLYLING FOR TEXT WITHIN ELEVATION BAR ON GRAPH
  // POSITIONS IT ON THE BAR ITSELF
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
    line-height: 1;
    text-transform: uppercase;
    width: 80%;
    height: 40px;
    margin-left: 30%;
    // CREATES VERTICAL BARS ON GRAPH
    background: repeating-linear-gradient(
    to right,
    #ddd,
    #ddd 1px,
    #fff 1px,
    #fff 5%
  );
    // STYLING FOR THE ELEVATION BARS
    &:after {
      content: "";
      display: block;
      background-color: #607D8B;
      margin-bottom: 10px;
      height: 85%;
      position: relative;
      top: 30%;
      transform: translateY(-50%);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
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