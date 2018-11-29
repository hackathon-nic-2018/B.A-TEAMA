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
          <span class="headline title">Circularidapp</span>
          <v-spacer></v-spacer>
          <div>
             <v-dialog
                v-model="dialogLogin"
                width="500"
              >
                <v-btn
                  slot="activator"
                  color="info"
                  dark
                >
                  Acceder
                </v-btn>

                <v-card>
                  <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                  >
                    Acceder
                  </v-card-title>

                  <v-card-text>
                   
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      flat
                      @click="dialogLogin = false"
                    >
                      Cerrar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="dialogSignUP"
                width="500"
              >
                <v-btn
                  slot="activator"
                  color="success"
                  dark
                >
                  Registrarse
                </v-btn>

                <v-card>
                  <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                  >
                    Registrarse
                  </v-card-title>

                  <v-card-text>
                   
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      flat
                      @click="dialogSignUP = false"
                    >
                      Cerrar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
          </div>        
        </v-card-title>
        <router-view/>
         <v-footer
            height="auto"
            color="primary lighten-1"
          >
            <v-layout
              justify-center
              row
              wrap
            >
              <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                flat
                round
              >
                {{ link }}
              </v-btn>
              <v-flex
                primary
                lighten-2
                py-3
                text-xs-center
                white--text
                xs12
              >
                &copy;2018 — <strong>B.A Team</strong>
              </v-flex>
            </v-layout>
  </v-footer>
      </v-card>

      <!--footer-->
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
      ],
      dialogLogin: false,
      dialogSignUP: false,

      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
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
  .jumbotron{
    margin-bottom: 0 !important;
  }
  .primary {
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
  }
  .title{
    margin-left: 15px;
  }
  
</style>
