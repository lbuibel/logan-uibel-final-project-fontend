<template>
    <v-card class="pa-3 mx-auto mb-5">
    <p class="display-1 text--primary mb-0">Add Route</p> 
    <ApolloMutation
    :mutation="require('../graphql/AddRoute.gql')"
    :variables="{
        name,
        type,
        miles,
        startPoint,
        endPoint,
        startingElevation,
        finalElevation,
        iframeData,
        }"
        @done="onDone"
        class="mt-0"
    >
    <template v-slot="{ mutate, error }">
        <!-- Form here -->
        <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
            >
            <v-row align="center">
                <v-col cols="12" sm="6">

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

            <!-- <v-btn large primary :disabled="loading" @click="mutate()">Add Route</v-btn> -->
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
                @click="mutate()"
                >
                Add Route
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset
                </v-btn>

                <section v-if="error">
                    <v-alert type="error">
                        Error loading.
                    </v-alert>        
                </section>

        </v-form>
    </template>
    </ApolloMutation>
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
export default {
        data: () => {
        return {
            name: '',
            type: '',
            miles: 0,
            startPoint: '123',
            endPoint: '456',
            startingElevation: 0,
            finalElevation: 0,
            iframeData: '',
            types: ['paved', 'singletrack', 'gravel'],
            iframeInput: false,
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
            ],
            checkbox: false,
            lazy: false,
            snackbar: false,
            text: 'Route Added',
            timeout: 2000,
        }
    },
    methods: {
        onDone() {
            this.snackbar = true
            return console.log('Route Created')
        },
        iframeEdit() {
            this.$refs.form.validate()
            const width = this.iframeData.indexOf('width')
            const height = this.iframeData.indexOf('height')
            return [String(this.iframeData = (this.iframeData.slice(13, width) + this.iframeData.slice(height + 13).slice(0,-10))), this.iframeInput = true]
        },
        reset () {
        this.$refs.form.reset()
      },
    }
}
</script>

<style scoped>

</style>