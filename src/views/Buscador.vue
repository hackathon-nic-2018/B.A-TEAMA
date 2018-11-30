<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <b-form inline>
                    <i class="fas fa-search" style="color: blue; font-size: 20px;"></i> &nbsp;&nbsp;&nbsp;
                    <label class="sr-only" for="inlineFormInputName2">Buscar</label>
                    <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="¿Qué desea encontrar?" />
                    <b-button variant="primary">BUSCAR</b-button>
                </b-form>
            </div>
        </div>
        <h3 style="margin-top: 100px; margin-bottom:30px;">Resultados:</h3>
      <div class="container-fluid text-center"> <!--seccion card projectos-->
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
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
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
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
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
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
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

