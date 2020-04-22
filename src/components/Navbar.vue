<template>
  <v-container fluid class="pa-0">
    <v-app-bar
    color="primary"
    dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Route Guide</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    >
      <v-list
      nav
      dense
      >
        <v-list-item-group
        active-class="primary--text text--accent-4"
        >
        <router-link to="/">
          <v-list-item>
            <v-list-item-title>Home - GQL</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="home-rest">
          <v-list-item>
            <v-list-item-title>Home - REST</v-list-item-title>
          </v-list-item>
        </router-link>

          <router-link to="graphql-admin">
          <v-list-item>
            <v-list-item-title>GraphQL Admin</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="rest-admin">
          <v-list-item>
            <v-list-item-title>Rest Admin</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>

</template>

<script>
  export default {
    name: 'nav',
    data: () => {
      return {
        drawer: false,
      }
    }
  }
</script>

<style>
a {
  text-decoration: none;
}
</style>