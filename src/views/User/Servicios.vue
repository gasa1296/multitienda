<template>
  <b-container>
    <h1>Servicios</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-img src="http://placehold.it/1200x300" alt="img" rounded fluid></b-img>
    <b-row>
      <b-col lg="4" md="4" v-for="servicio in servicios" :key="servicio">
        <b-card :header="servicio">
          <b-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, maxime nam sit nobis nulla distinctio quos ratione est reprehenderit ipsam!
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "servicios",
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          to: '/'
        },
        {
          text: 'Servicios',
          active: true
        }
      ],
      servicios: [
        'A domicilio',
        'Zoom',
        'MRW'
      ]
    }
  }
}
</script>

<style>

</style>
