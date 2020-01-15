
<template>
  <b-container class="vh-100">
    <b-row class="h-100" align-v="center" align-h="center">
      <b-col lg="4" md="6" sm="8" align-self="center">
        <b-card title="Login">
          <b-row>
            <b-alert variant="dark" v-if="mensaje != ''">{{mensaje}}</b-alert>
            <b-col>
              <b-form>
                <b-form-group>
                  <b-form-input type="text" name="nombre" id="nombre" v-model="data.userName"  placeholder="Nombre de Usuario" required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input type="password" name="pass" id="pass" v-model="data.password" placeholder="Contraseña" required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-button type="submit" variant="dark" @click.prevent="ingresar()" block>Ingresar</b-button>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        data: {
          userName: "",
          password: ""
        },
        mensaje: "",
      }
    },
    methods: {
      ingresar () {
        if(this.data.userName == "") {
          this.mensaje = "nombre vacio"
        }
        else {
          if(this.data.password == "") {
            this.mensaje = "contraseña vacia"
          }
          else {
            this.$store.state.usuarios.forEach(usuario => {
              alert(usuario);
              if(usuario.userName == this.data.userName){
                if(usuario.password == this.data.password){
                  this.$store.commit({
                    type: 'Sesion'
                  })
                }
              }
            });
            if(!this.$store.state.autenticado){
              this.mensaje = "Usuario no encontrado"
            }
            else{
              this.$router.push("/admin/ordenes")
            }
          }
        }
      }
    }
  }
</script>
<style>

</style>
