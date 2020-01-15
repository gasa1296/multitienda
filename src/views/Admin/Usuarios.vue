<template>
<b-container>
    <b-row>
      <b-col>
        <b-card>
          <template v-slot:header>
            <b-row>
              <b-col lg="11" md="11" sm="12">
                <h3>Usuarios</h3>
              </b-col>
              <b-col>
                <b-button variant="dark" @click="estado = 'nuevo'" v-b-modal.modal>Nuevo</b-button>
              </b-col>
            </b-row>
          </template>
          <b-row>
            <b-col>
              <b-table :items="data1requestedData" :fields="campos" hover>
                <template v-slot:cell(Opciones)="row">
                  <b-button-group>
                    <b-button variant="secondary" v-b-modal.modal @click="seleccionar(row.value, index, 'Editar')">Editar</b-button>
                    <b-button variant="dark" v-b-modal.modal @click="seleccionar(row.value, index, 'Eliminar')">Eliminar</b-button>
                  </b-button-group>
                </template>
              </b-table>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="modal" v-if="estado == 'nuevo'" title="Nuevo Usuario" hide-footer>
      <b-container>
        <b-form>
          <b-form-group label="Nombre Completo" label-for="name">
            <b-form-input id="name" type="text" v-model="nuevo.userName" required></b-form-input>
          </b-form-group>
          <b-form-group label="Contraseña" label-for="pass">
            <b-form-input id="pass" type="password" v-model="nuevo.password" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" variant="dark" @click.prevent="agregar()" block>Agregar</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
    <b-modal id="modal" v-else-if="estado == 'editar'" title="Editar Usuario" hide-footer>
      <b-container>
        <b-form>
          <b-form-group label="Nombre Completo" label-for="name">
            <b-form-input id="name" type="text" v-model="seleccionado.userName" required></b-form-input>
          </b-form-group>
          <b-form-group label="Contraseña" label-for="pass">
            <b-form-input id="pass" type="password" v-model="seleccionado.password" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button type="reset" variant="secondary" @click="$bvModal.hide('modal')">Cancelar</b-button>
            <b-button type="submit" variant="dark" @click.prevent="editar()" block>Editar</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
    <b-modal id="modal" v-else title="Eliminar Usuario" hide-footer>
      <b-container>
        <h3 class="text-center">¿Estas Seguro?</h3>
        <b-form>
          <b-form-group>
            <b-button variant="secondary" @click="$bvModal.hide('modal')">No</b-button>
            <b-button type="submit" variant="dark" @click.prevent="borrar()" block>Si</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
  </b-container>
</template>

<script>
  export default {
    name: "usuarios",
    data1requestedData () {
      return {
        campos: [],
        data1requestedData: [],
        indexSeleccionado: "",
        seleccionado: "",
        nuevo: {
          userName: "",
          descripcion: "",
        },
        mensaje: "",
        estado: ""
      }
    }, 
    methods: {
      seleccionar (selected, index, modal) {
        this.indexSeleccionado = index;
        this.seleccionado = selected;
        if(modal == "eliminar"){
          this.estado = "eliminar";
        }
        else{
          this.estado = "editar"
        }
      },
      borrar () {
        this.$store.commit('eliminar', this.seleccionado.id, 'usuarios');
      },
      editar () {
        this.$bvModal.hide('modal');
        this.$store.commit('editar', this.seleccionado, 'usuarios');
      },
      agregar () {
        this.$bvModal.hide('modal');
        this.$store.commit('agregar', this.nuevo, 'usuarios');
      },
      mostrar () {
        this.data1requestedData = this.$store.state.usuarios;
      }
    },
    mounted () {
      this.mostrar ();

      let key = this.data1requestedData[0].keys();
      for(let i = 0; i < key.length - 1; i++){
        this.campos.push({'key': key[i], 'sortable': true});
      }
      this.campos.push({'key': key[key.length - 1], 'sortable': false});
    }
  }
</script>

<style>

</style>
