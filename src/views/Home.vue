<template>
  <div class="home text-center">
      <b-jumbotron class="jumbotron" header="Economía Circular" lead="Apoyar el cambio hacia una economía eficiente en el uso de los recursos" >
      </b-jumbotron>
      <div class="container seccionIcon">
  <div class="row">
    <div class="col-sm">
      <img class="imgIcon" src="./../assets/img/icon1.png" alt="">
        <h3>Productos</h3>
    </div>
    <div class="col-sm">
      <img class="imgIcon" src="./../assets/img/icon2.png" alt="">
        <h3>Servicios</h3>
    </div>
    <div class="col-sm">
      <img class="imgIcon" src="./../assets/img/icon3.png" alt="">
        <h3>Manufactura</h3>
    </div>
  </div>
</div>
  </div>
</template>
<script>

export default {
  name: 'home'
}
</script>
<style>
.jumbotron{
  height: auto;
  color: white;
  background-image: url(./../assets/img/banner.png);
  background-repeat: no-repeat;
  background-size: auto;
}
.imgIcon{
  width: 100px;
  height: auto;
  border-radius: 50%;
}
.seccionIcon{
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>

