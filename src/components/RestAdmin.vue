<template>
<v-container>
        <h1>REST admin</h1>
        <br>
        <AddRoute/>
        <UpdateRoute/>
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