<template>
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
    >
    <template v-slot="{ mutate, loading, error }">
        <!-- Form here -->
        <v-form>
            <v-container>
                <v-btn large primary :disabled="loading" @click="mutate()">Add Route</v-btn>
                <p v-if="error">An Error occured: {{ error }}</p>
            </v-container>
        </v-form>
    </template>
    </ApolloMutation>
</template>

<script>
export default {
    name: 'AddRoute',
    data: () => {
        return {
            name: 'vue test',
            type: 'paved',
            miles: 25,
            startPoint: 'nowhere',
            endPoint: 'somewhere',
            startingElevation: 100,
            finalElevation: 200,
            iframeData: 'iframe',
        }
    },
    methods: {
        onDone() {
            return console.log('Done')
        }
    }
}
</script>

<style lang="less" scoped>

</style>