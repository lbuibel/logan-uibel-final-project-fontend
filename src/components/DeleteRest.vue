<template>
    <v-card class="pa-3 mx-auto mb-5">
    <p class="display-1 text--primary mb-0">Delete Route</p> 

    <v-form
    ref="form"
    v-model="valid"
    :lazy-validation="lazy"
    >
    <v-row>
            <v-col cols="12" sm="6">
            <v-text-field
            v-model="id"
            label="Route ID"
            required
            >
            </v-text-field>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Must confirm to continue!']"
            label="Delete Route?"
            required
            >
            </v-checkbox>
        </v-col>
    </v-row>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="updateRoute()"
        >
        Delete Route
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Reset
        </v-btn>
    </v-form>
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
import axios from 'axios'

  export default {
    data: () => ({
        id: '',
        route: [],
        valid: true,
        lazy: false,
        checkbox: false,
        snackbar: false,
        text: 'Route Deleted',
        timeout: 2000,
    }),
    methods: {
        reset () {
        this.$refs.form.reset()
        },
        updateRoute() {
          const url = `https://bike-routes-api.herokuapp.com/course/delete-course/` + this.id;
        axios.post(url)
        .then(response => {
            console.log(response)
            this.route = response.data
            this.snackbar = true
            this.$refs.form.reset()
            console.log(this.route)
        }).catch(error => console.log(error))

        }
    },
}
</script>