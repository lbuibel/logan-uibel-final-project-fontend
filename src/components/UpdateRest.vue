<template>
    <v-card class="pa-3 mx-auto mb-5">
    <p class="display-1 text--primary mb-0">Update Route</p> 

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

            <v-text-field
            v-model="name"
            label="Route Name"
            required
            :rules="nameRules"
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
        </v-col>
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

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="updateRoute()"
        >
        Update Route
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
        name: '',
        type: '',
        miles: '',
        startingElevation: '',
        finalElevation: '',
        iframeData: '',
        iframeInput: false,

        route: [],

        nameRules: [
            v => !!v || 'Name is required',
        ],
        types: ['paved', 'singletrack', 'gravel'],
        valid: true,
        lazy: false,
        checkbox: false,
        snackbar: false,
        text: 'Route Updated',
        timeout: 2000,
    }),
    methods: {
        iframeEdit() {
            this.$refs.form.validate()
            const width = this.iframeData.indexOf('width')
            const height = this.iframeData.indexOf('height')
            return [String(this.iframeData = (this.iframeData.slice(13, width) + this.iframeData.slice(height + 13).slice(0,-10))), this.iframeInput = true]
        },
        reset () {
        this.$refs.form.reset()
        },
        updateRoute() {
          const url = `https://bike-routes-api.herokuapp.com/course/update-course/` + this.id;
          console.log(url)
          const data = {
            name: this.name,
            type: this.type,
            miles: this.miles,
            startingElevation: this.startingElevation,
            finalElevation: this.finalElevation,
            iframeData: this.iframeData
        }
        axios.post(url, data)
        .then(response => {
            console.log(response)
            this.route = response.data
            console.log(this.route)
        }).catch(error => console.log(error))

        }
    },
}
</script>