<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title class="blue white--text">
          <a href="/"><img id="logo" src="./assets/img/logo.png" alt="Logo Circularidapp"></a>
          <span class="headline title">CircularidApp</span>
          <v-spacer></v-spacer> 
             <b-button to="/perfil" variant="primary" v-if="user !== null">Perfil</b-button>&nbsp;&nbsp;
             <b-button to="/buscar" variant="success" v-if="rolUserlogged.rol === 'CLIENTE'">Buscar</b-button>&nbsp;&nbsp;&nbsp;
            <b-button v-b-modal.modal1 variant="primary" v-if="user === null">Acceder</b-button>
            <!-- Modal Component -->
            <b-modal id="modal1" ref="myModalRefLog" title="Bootstrap-Vue">
              <div class="formAcceder">
                <h3 style="color: black;">ACCEDER</h3>
                <b-form @submit="onLogin" @reset="onReset" v-if="show">
                  <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
                  <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.correo"
                      required
                      placeholder="Correo">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.contrasena"
                      required
                      placeholder="Contraseña">
                  </b-form-input>
                  </b-form-group>
                    <b-button type="submit" variant="primary">Entrar</b-button>
                </b-form>
              </div> <!--fin form-->
            </b-modal> &nbsp;&nbsp;&nbsp;  
          <b-button v-b-modal.modal2 variant="success" class="boton" v-if="user === null">Registrar</b-button>
          <b-button @click="onLogOut()" variant="primary" v-if="user !== null">Cerrar Sesión</b-button>
          <!-- Modal Component -->
          <b-modal id="modal2" title="Bootstrap-Vue">
            <div class="formAcceder">
                <h3 style="color: black;">REGISTRAR</h3>
                <b-form @submit="onRegistro" @reset="onResetRegistro" v-if="show">
                  <b-form-group id="exampleInputGroup2"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
                  <b-form-input id="exampleInput1"
                      type="email"
                      v-model="formRegistro.email"
                      required
                      placeholder="Correo">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Nombre completo:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="formRegistro.nombre"
                      required
                      placeholder="Nombre completo">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Telefono:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="number"
                      v-model="formRegistro.telefono"
                      required
                      placeholder="Telefono">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Contraseña:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="formRegistro.contrasena"
                      required
                      placeholder="Contraseña">
                  </b-form-input>
                  </b-form-group><b-form-group id="exampleInputGroup2"
                    label="Rol:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.rol"
                      required
                      placeholder="Rol">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Edad:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.edad"
                      required
                      placeholder="Edad">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Descripcion:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.descripcion"
                      required
                      placeholder="Descripción">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Pais:"
                    label-for="inptPais">
                  <b-form-input id="inptPais"
                      type="text"
                      v-model="form.pais"
                      required
                      placeholder="País">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Departamento:"
                    label-for="exampleInput2">
                  <b-form-input id="inptDepartamento"
                      type="text"
                      v-model="form.departamento"
                      required
                      placeholder="Departamento">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Municipio:"
                    label-for="exampleInput2">
                  <b-form-input id="inptMunicipio"
                      type="text"
                      v-model="form.municipio"
                      required
                      placeholder="Municipio">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup3"
                    label="Sexo:"
                    label-for="exampleInput3">
                  <b-form-select id="exampleInput3"
                      :options="sexo"
                      required
                       placeholder="Sexo"
                      v-model="form.sexo">
                  </b-form-select>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="Cedula:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.cedula"
                      required
                      placeholder="Cédula">
                  </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                    label="fotourl:"
                    label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.fotourl"
                      required
                      placeholder="Foto">
                  </b-form-input>
                  </b-form-group>
                  
                    <b-button type="submit" variant="primary">Guardar</b-button>
                </b-form>
            </div>
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
                @click="clickLink(link)"
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
  const places = require('places.js')
  import appService from './services/app.services'
  import Vue from 'vue'

  export default {
    data: () => ({
      user: '',
      form: {
        correo: '',
        contrasena: '',
      },
      formRegistro: {
        nombre: '',
        correo: '',
        telefono: '',
        contrasena: '',
        rol: '',
        edad: '',
        descripcion: '',
        pais: '',
        departamento: '',
        municipio: '',
        sexo: '',
        cedula: '',
        fotourl: '',
      },
      sexo: [
        { text: 'Select One', value: null },
        'FEMENINO', 'MASCULINO'
      ],
      show: true,

      links: [
        'INICIO',
        'SOBRE NOSOTROS'
      ]
    }),
    created: function () {
      this.user = localStorage.getItem('lbUser')
      /********Option for Country***********/
      const fixedOptions = {
        container: document.querySelector('#inptPais'),
      };

      const reconfigurableOptions = {
        language: 'es',
        countries: ['ni'],
        type: 'country',
        aroundLatLngViaIP: false
      };
      places(fixedOptions).configure(reconfigurableOptions);
    /************Option for City******************/
      const fixedOptions2 = {
        container: document.querySelector('#inptDepartamento'),
      };

      const reconfigurableOptions2 = {
        language: 'es',
        countries: ['ni'],
        type: 'city',
        aroundLatLngViaIP: false
      };
      places(fixedOptions2).configure(reconfigurableOptions2);

    },
    computed: {
      rolUserlogged: function () {
        if (this.user === null) {
          return {
            rol: ''
          }
        }
        return this.user
      }
    },
    methods: {
      clickLink (evt) {
        if (evt === 'SOBRE NOSOTROS') {
          this.$router.push({name:'about'})
        } else {
          this.$router.push({name:'home'})
        }
      },
      onLogin (evt) {
        evt.preventDefault();
        //Doing Login
        appService.post(`${Vue.http.options.root}/login`, this.form).then((resp) => {
          const user = resp.body.user
          const token = resp.body.token
          this.user = user
          localStorage.setItem('token', token)
          localStorage.setItem('lbUser', JSON.stringify(user))
          this.$router.push({name:'perfil'})
          this.$refs.myModalRefLog.hide()
          this.$toastr.success('Accedio Correctamente', 'Notificación')
        }, () => {
           this.$toastr.warning('Usuario y Contraseña incorrectas', 'Advertencia')
        })
      },
      onLogOut () {
        localStorage.removeItem('token')
        localStorage.removeItem('lbUser')
        this.user = null
         this.$router.push({name:'home'})
      },
      onRegistro (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.formRegistro));
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.correo = '';
        this.form.contrasena = '';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      onResetRegistro (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.formRegistro.nombre = '';
        this.formRegistro.correo = '';
        this.formRegistro.telefono = '';
        this.formRegistro.contrasena = '',
        this.formRegistro.rol = '',
        this.formRegistro.edad = '',
        this.formRegistro.descripcion = '',
        this.formRegistro.pais = '',
        this.formRegistro.departamento = '',
        this.formRegistro.municipio = '',
        this.formRegistro.sexo = '',
        this.formRegistro.cedula = '',
        this.formRegistro.fotourl = '',
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
.title:hover{
  opacity: 0.8;
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
