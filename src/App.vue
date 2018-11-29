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
            <v-btn color="info">Acceder</v-btn>
            <v-btn color="success">Registrarse</v-btn>
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
  .success {
    background-color: #4caf50!important;
    border-color: #4caf50 !important;
  }
  .error {
    background-color: #ff5252!important;
    border-color: #ff5252 !important;
  }
  .warning {
    background-color: #ffc107!important;
    border-color: #ffc107 !important;
  }
  .info {
    background-color: #2196f3!important;
    border-color: #2196f3 !important;
  }
</style>
