<template>
<v-container>
        <!-- ADDS A ROUTE TO THE GRAPHQL DATABASE  -->
        <AddRoute></AddRoute>
        <!-- UPDATES A ROUTE TO THE GRAPHQL DATABASE -->
        <update/>
        <!-- REMOVES A ROUTE TO THE GRAPHQL DATABASE  -->
        <Delete/>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteGQL'
import Delete from '../components/DeleteGQL'
import update from '../components/UpdateGQL'
export default {
    name: 'admin',
    components: {
        AddRoute,
        Delete,
        update
    },
    data: () => ({
    }),
}
</script>