<template>
<v-container>
    <h1>Routes</h1>
   <hr>
   <AddRoute></AddRoute>
   <UpdateRoute></UpdateRoute>
   <DeleteRoute/>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteGQL'
import UpdateRoute from '../components/UpdateRouteGQL'
import DeleteRoute from '../components/DeleteRouteGQL'
export default {
    name: 'admin',
    components: {
        AddRoute,
        UpdateRoute,
        DeleteRoute,
    }
}
</script>