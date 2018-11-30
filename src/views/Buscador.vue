<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <b-form inline>
                    <i class="fas fa-search" style="color: blue; font-size: 20px;"></i> &nbsp;&nbsp;&nbsp;
                    <!--Dropdown-->
                    <b-dropdown id="ddown1" text="Seleccionar" variant="primary" class="m-md-2">
                        <b-dropdown-item>Servicio</b-dropdown-item>
                        <b-dropdown-item>Producto</b-dropdown-item>
                    </b-dropdown>   <!--Fin Dropdown-->
                    <!--Dropdown-->
                    <b-dropdown id="ddown2" text="Servicios" variant="primary" class="m-md-2">
                        <b-dropdown-item>Electricista</b-dropdown-item>
                        <b-dropdown-item>Mecánico</b-dropdown-item>
                        <b-dropdown-item>Ebanista</b-dropdown-item>
                        <b-dropdown-item>Costura</b-dropdown-item>
                    </b-dropdown>   <!--Fin Dropdown--> &nbsp;&nbsp;&nbsp;
                    <label class="sr-only" for="inlineFormInputName2">Buscar</label>
                    <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="¿Qué desea encontrar?" />
                    <b-button variant="primary">BUSCAR</b-button> <!--boton buscar-->
                </b-form>
            </div>
        </div>
        <h3 style="margin-top: 100px; margin-bottom:30px;">Resultados:</h3>
      <div class="container-fluid text-center"> <!--seccion card projectos-->
        <div class="row">
            <div class="col-lg col-md-6">
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
            <div class="col-lg col-md-6">
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
            <div class="col-lg col-md-6">
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
        </div>
    </div> 
    </div>
    
</template>
<script>
export default {
  data () {
    return {
      text1: ''
    }
  }
}
</script>
<style>
h3{
    margin-top: 30px;
}
</style>

