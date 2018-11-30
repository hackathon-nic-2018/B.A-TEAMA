<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8">
              <ul class="list-unstyled">
            <b-media tag="li">
                <img slot="aside" blank blank-color="#abc" width="90" height="95" src="https://firebasestorage.googleapis.com/v0/b/hacknic2018.appspot.com/o/img%2Fuser.png?alt=media&token=a9d59d0f-4084-4437-9354-ac81196391f9" alt="">
                <h5 class="mt-0 mb-1">Juan López López</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                nte sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                lacinia congue felis in faucibus.
            </b-media>
        </ul>
          </div>
          <div class="col-md-4 text-right" style="margin-bottom:80px;">
            <b-button v-b-modal.modal3 variant="outline-secondary">PUBLICAR</b-button>
            <b-modal id="modal3" title="PUBLICAR PRODUCTO">
                <b-form @submit="onPublicar" @reset="onReset" v-if="show">
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
      <h3>PRODUCTOS</h3>
      <div class="container text-center"> <!--seccion card projectos-->
        <div class="row">
            <div class="col-md">
                <b-card title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="outline-primary"><i class="fas fa-eye"></i></b-button>&nbsp;&nbsp;&nbsp;
                    <b-button href="#" variant="outline-danger"><i class="fas fa-heart"></i></b-button>
                </b-card> <!--fin card-->
            </div>
            <div class="col-md">
                <b-card title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="outline-primary"><i class="fas fa-eye"></i></b-button>&nbsp;&nbsp;&nbsp;
                    <b-button href="#" variant="outline-danger"><i class="fas fa-heart"></i></b-button>
                 </b-card> <!--fin card-->
            </div>
            <div class="col-md">
                <b-card title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button href="#" variant="outline-primary"><i class="fas fa-eye"></i></b-button>&nbsp;&nbsp;&nbsp;
                    <b-button href="#" variant="outline-danger"><i class="fas fa-heart"></i></b-button>
                </b-card>
            </div>
        </div>
    </div> 
    <h3>CLIENTES INTERESADOS</h3> 
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        nombre: '',
        fotourl: '',
        descripcion: '',
        precio: '',
      },
      
      show: true
    }
  },
  methods: {
    onPublicar (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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

