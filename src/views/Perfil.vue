<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8">
              <ul class="list-unstyled"> <!--imagen y descripcion-->
            <b-media tag="li">
                <img slot="aside" blank blank-color="#abc" width="90" height="95" src="https://firebasestorage.googleapis.com/v0/b/hacknic2018.appspot.com/o/img%2Fuser.png?alt=media&token=a9d59d0f-4084-4437-9354-ac81196391f9" alt="">
                <h5 class="mt-0 mb-1">{{rolUserlogged.nombre}} | {{rolUserlogged.rol}}</h5>
                {{rolUserlogged.descripcion}}
            </b-media>
        </ul>
          </div>
          <div class="col-md-4 text-right" style="margin-bottom:80px;">
            <b-button v-b-modal.modal3 variant="outline-secondary" v-if="user.rol === 'VENDEDOR'">PUBLICAR</b-button>
            <b-modal id="modal3" title="PUBLICAR PRODUCTO">
                <b-form @submit="onPublicar" @reset="onReset" v-if="show"> <!--form ventana modal-->
                    <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.nombre"
                      required
                      placeholder="Nombre">
                    </b-form-input>
                </b-form-group>
                
                <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.fotourl"
                      required
                      placeholder="Foto">
                    </b-form-input>
                </b-form-group>

                <b-form-textarea id="descripcion"
                     v-model="form.descripcion"
                     placeholder="Descripción"
                     required
                     :rows="3"
                     :max-rows="6">
                </b-form-textarea> <br/>

                <b-form-group id="precio"
                    label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.precio"
                      required
                      placeholder="Precio">
                    </b-form-input>
                </b-form-group>
    
      <b-button type="submit" variant="primary">Publicar</b-button>
    </b-form> <!--fin form-->
            </b-modal>
          </div>
      </div>
      <div v-if="rolUserlogged.rol === 'CLIENTE'">
        <h3>PRODUCTOS QUE ME INTERESAN</h3>
        <div class="container text-center"> <!--seccion card projectos-->
            <div class="row">
                <div class="col-4" v-for="(item, index) in productClient" :key="index">
                    <b-card :title="item.producto.nombre"
                        :img-src="item.producto.fotoUrl"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                        <p class="card-text">
                        {{item.producto.descripcion}}
                        </p>
                    </b-card> <!--fin card-->
                </div>
            </div>
        </div>
      </div>
      <div v-if="rolUserlogged.rol === 'VENDEDOR'">
        <!--Modal for Clientes interesados-->
            <b-modal ref="myModalRefInteresados" hide-footer title="Clientes interesados!">
                <div class="d-block text-center">
                    <b-list-group>
                        <b-list-group-item v-for="(item, index) in clientProduct" :key="index">Nombre: {{ item.usuario.nombre }}, Telefono: {{ item.usuario.telefono }},Correo: {{ item.usuario.correo }},Departamento: {{ item.usuario.departamento }}</b-list-group-item>

                    </b-list-group>
                </div>
                <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-btn>
            </b-modal>
        <!--Fin modal Clientes interesados-->

        <h3>MIS PRODUCTOS EN VENTA</h3>
        <div class="container text-center"> <!--seccion card projectos-->
            <div class="row">
                <div class="col-4" v-for="(item, index) in myProductsInOfert" :key="index">
                    <b-card :title="item.nombre"
                        :img-src="item.fotoUrl"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                        <p class="card-text">
                        {{item.descripcion}}
                        <br/><b>Precio: {{item.precio.$numberDecimal}}</b>
                        </p>
                        <b-button variant="primary" @click="getClientsByProduct(item._id)">Clientes Interesados</b-button>
                    </b-card> <!--fin card-->
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>

import appService from './../services/app.services'
import Vue from 'vue'

export default {
  data () {
    return {
      user: null,
      form: {
        nombre: '',
        fotourl: '',
        descripcion: '',
        precio: '',
      },
      myProductsInOfert: [],
      clientProduct: [],
      productClient: [],
      show: true
    }
  },
  created: function () {
    this.user = localStorage.getItem('lbUser')
  },
  mounted: function () {
      appService.get(`${Vue.http.options.root}/product/product-by-userid/${this.rolUserlogged._id}`
      ).then((resp) => {
          this.myProductsInOfert = resp.body
      }, () => {

      })
      appService.get(`${Vue.http.options.root}/client-product/product-by-client/${this.rolUserlogged._id}`).then((resp)=> {
          this.productClient = resp.body.clientProductDB
      }, () => {

      })
  },
    computed: {
        rolUserlogged: function () {
        if (this.user === null) {
            return {
            rol: ''
            }
        }
        return JSON.parse(this.user)
        }
    },
  methods: {
    onPublicar (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    hideModal () {
      this.$refs.myModalRefInteresados.hide()
    },
    getClientsByProduct(productId) {
        this.$refs.myModalRefInteresados.show()
        appService.get(`${Vue.http.options.root}/client-product/client-product-by-product/${productId}`).then((resp) => {
          this.clientProduct = resp.body.clientProductDB
        }, () => {

        })

    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.nombre = '';
      this.form.fotourl = '';
      this.form.descripcion = '';
      this.form.precio = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style>
.list-unstyled{
    padding: 30px;
}   
</style>

