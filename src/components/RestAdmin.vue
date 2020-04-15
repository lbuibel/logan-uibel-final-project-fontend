<template>
<v-container>
        <h1>REST admin</h1>
        <br>
        <AddRoute/>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteRest'
export default {
    name: 'admin',
    components: {
        AddRoute,
    },
    data: () => ({
    }),
}
</script>