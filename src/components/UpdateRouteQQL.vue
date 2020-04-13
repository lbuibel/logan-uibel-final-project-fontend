<template>
    <ApolloMutation
    :mutation="require('../graphql/UpdateRoute.gql')"
    :variables="{
        id,
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
        class="mt-10"
    >
    <template v-slot="{ mutate, loading, error }">
        <!-- Form here -->
        <v-form>
            <v-container>
                <h2>Update Route</h2>
                <!-- <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-text-field v-model="id" label="Route ID" required></v-text-field>
                    </v-col>
                </v-row> -->
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-text-field v-model="name" label="Name" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-select
                        v-model="type"
                        label="Route Type"
                        :items="types"
                        >
                        </v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-text-field v-model.number="miles" label="Miles" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" sm="4" md="3">
                        <v-text-field v-model.number="startingElevation" label="Starting Elevation" required></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="4" md="3">
                        <v-text-field v-model.number="finalElevation" label="Final Elevation" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-text-field v-model="iframeData" label="iframe" required @change="iframeEdit()"></v-text-field>
                    </v-col>
                </v-row>

                <v-btn large primary :disabled="loading" @click="mutate()">Update Route</v-btn>
                <p v-if="error">An Error occured: {{ error }}</p>
            </v-container>
        </v-form>
    </template>
    </ApolloMutation>
</template>

<script>
export default {
        data: () => {
        return {
            id: 'ck8ytwmtz0004d36ef5c55kbn',
            name: 'test 3.0',
            type: 'paved',
            miles: 2,
            startPoint: '123',
            endPoint: '456',
            startingElevation: 2,
            finalElevation: 6,
            iframeData: 'testing',
            types: ['paved', 'singletrack', 'gravel']
        }
    },
    methods: {
        onDone() {
            return console.log('Done')
        },
        iframeEdit() {
            const width = this.iframeData.indexOf('width')
            const height = this.iframeData.indexOf('height')
            return String(this.iframeData = (this.iframeData.slice(13, width) + this.iframeData.slice(height + 13).slice(0,-10)))
        }
    }
}
</script>