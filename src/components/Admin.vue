<template>
<v-container>
   <AddRoute></AddRoute>
   <update/>
   <DeleteRoute/>

</v-container>
</template>

<script>
import AddRoute from '../components/AddRouteGQL'
import DeleteRoute from '../components/DeleteRouteGQL'
import update from '../components/update2'
export default {
    name: 'admin',
    components: {
        AddRoute,
        DeleteRoute,
        update
    }
}
</script>