<template>
  <div class="home text-center">
      <b-jumbotron class="jumbotron" header="Economía Circular" lead="Apoyar el cambio hacia una economía eficiente en el uso de los recursos" >
      </b-jumbotron>
      <div class="container">
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
  height: 350px;
  color: white;
  background-image: url(./../assets/img/banner.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}
.imgIcon{
  width: 100px;
  height: auto;
  border-radius: 50%;
}
</style>

