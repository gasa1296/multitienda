<template>
  <body>
    <header v-if="autenticado">
      <b-navbar type="dark" variant="dark">
        <b-container>
          <b-navbar-brand to="/">NavBar</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/admin/ordenes">Ordenes</b-nav-item>
              <b-nav-item to="/admin/categorias">Categorias</b-nav-item>
              <b-nav-item to="/admin/productos">Productos</b-nav-item>
              <b-nav-item to="/admin/usuarios">Usuarios</b-nav-item>
              <b-nav-item @click="cerrarSesion()">Salir</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>
    <router-view/>
    <footer v-if="autenticado">
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
    name: "admin",
    data () {
      return {
        autenticado: false
      }
    },
    methods: {
      cerrarSesion () {
        this.$store.commit({
          type: 'Sesion',
          data: null
        });
        this.$router.push("/admin");
      }
    },
    watch:{
      $route (){
          this.autenticado = this.$store.state.autenticado;
      }
    },
    mounted(){
      this.autenticado = this.$store.state.autenticado;
      if(this.autenticado){
        this.$router.push('/admin/ordenes');
      }
    }
  }
</script>
