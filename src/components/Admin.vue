<template>
<v-container>
   <AddRoute></AddRoute>
   <update/>
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
    }
}
</script>