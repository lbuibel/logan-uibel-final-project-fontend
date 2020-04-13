<template>
    <ApolloMutation
    :mutation="require('../graphql/DeleteRoute.gql')"
    :variables="{
        id,
        }"
        @done="onDone"
        class="mt-10"
    >
    <template v-slot="{ mutate, loading, error }">
        <!-- Form here -->
        <v-form>
            <v-container>
                <h2>Delete Route</h2>
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <v-text-field v-model="id" label="Route ID" required></v-text-field>
                    </v-col>
                </v-row>

                <v-btn large primary :disabled="loading" @click="mutate()">Delete Route</v-btn>
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
            id: '',
        }
    },
    methods: {
        onDone() {
            return console.log('Done')
        },
    }
}
</script>