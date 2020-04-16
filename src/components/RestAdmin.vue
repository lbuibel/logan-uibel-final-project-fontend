<template>
<v-container>
        <h1>REST admin</h1>
        <br>
        <AddRoute/>
        <UpdateRoute/>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteRest'
import UpdateRoute from '../components/UpdateRest'
export default {
    name: 'admin',
    components: {
        AddRoute,
        UpdateRoute,
    },
    data: () => ({
    }),
}
</script>