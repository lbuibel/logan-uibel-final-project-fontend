<template>
<v-container>
    <h1>Routes</h1>
   <hr>
   <AddRoute></AddRoute>
   <UpdateRoute></UpdateRoute>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteQQL'
import UpdateRoute from '../components/UpdateRouteQQL'
export default {
    name: 'admin',
    components: {
        AddRoute,
        UpdateRoute
    }
}
</script>