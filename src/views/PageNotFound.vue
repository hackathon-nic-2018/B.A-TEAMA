<template>
    <section class="container"> <!--Aviso notFound-->
        <section class="row">
            <b-jumbotron class="col">
                <template slot="header">
                    Lo lemento!
                </template>
                <template slot="lead">
                    La página a la cual estás intentando acceder no existe o no tienes permiso para acceder a ella.
                </template>
                <hr class="my-4">
                <b-btn variant="primary" to="/">Inicio</b-btn>
            </b-jumbotron>
        </section>
    </section>
</template>
