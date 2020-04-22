<template>
<v-container>
        <!-- ADDS ROUTE TO REST API -->
        <AddRoute/>
        <!-- UPDATES ROUTE TO REST API -->
        <UpdateRoute/>
        <!-- REMOVES ROUTE TO REST API -->
        <DeleteRoute/>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteRest'
import UpdateRoute from '../components/UpdateRest'
import DeleteRoute from '../components/DeleteRest'
export default {
    name: 'admin',
    components: {
        AddRoute,
        UpdateRoute,
        DeleteRoute
    },
    data: () => ({
    }),
}
</script>