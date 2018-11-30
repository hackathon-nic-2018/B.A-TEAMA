<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title class="blue white--text">
          <img id="logo" src="./assets/img/logo.png" alt="Logo Circularidapp">
          <span class="headline title">CircularidApp</span>
          <v-spacer></v-spacer> 
            <b-button v-b-modal.modal1 variant="primary">Acceder</b-button>
            <!-- Modal Component -->
            <b-modal id="modal1" title="Bootstrap-Vue">
              <div class="formAcceder">
                <h3 style="color: black;">ACCEDER</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Entrar</b-button>
    </b-form>
  </div>
            </b-modal> &nbsp;&nbsp;&nbsp;  
          <b-button v-b-modal.modal2 variant="success" class="boton">Registrar</b-button>
          <!-- Modal Component -->
          <b-modal id="modal2" title="Bootstrap-Vue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>      
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
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true,

      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    }),
    methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
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
    margin-left: 5px;
  }
  
</style>
<style scoped>
#logo{
  height: 50px;
  margin-left: 15px;
}
.boton{
  margin-right: 20px;
}
</style>
