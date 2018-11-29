<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>-->
<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title class="blue white--text">
          <span class="headline">Menu</span>

          <v-spacer></v-spacer>
          <div>
            <v-btn color="success">Success</v-btn>
            <v-menu offset-y>
      <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Dropdown
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
          </div>
          
          
        </v-card-title>

        <router-view/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    })
  }
</script>

<style>
.success{
  background-color: black !important;
}
</style>
