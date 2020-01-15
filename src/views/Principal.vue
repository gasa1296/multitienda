<template>
  <body>
    <header>
      <b-navbar type="dark" variant="dark">
        <b-container>
          <b-navbar-brand to="/">NavBar</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/conocenos">Conocenos</b-nav-item>
              <b-nav-item to="/servicios">Servicios</b-nav-item>
              <b-nav-item to="/contactanos">Contactanos</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>

    <router-view/>

    <footer>
      <b-navbar variant="dark" fixed="bottom">
        <b-container fluid>
          <b-row>
            <b-col cols="12">
              <h5 class="text-light">Hecho por Gabriel Segovia</h5>
            </b-col>
          </b-row>
        </b-container>
      </b-navbar>
    </footer>
  </body>
</template>

<script> 
  export default {
    name: 'principal'
  }
</script>

<style scoped>
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
