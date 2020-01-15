<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <template v-slot:header>
            <b-row>
              <b-col>
                <h3>Ordenes Pendientes</h3>
              </b-col>
            </b-row>
          </template>
          <b-row>
            <b-col>
              <b-table :items="data1" :fields="campos" hover>
                <template v-slot:cell(Opciones)="row">
                  <b-button-group>
                    <b-button variant="dark" v-b-modal.modal @click="seleccionar(row.value, index)">Finalizar Orden</b-button>
                  </b-button-group>
                </template>
              </b-table>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="modal" title="Finalizar Orden" hide-footer>
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
    name: "ordenes",
    data () {
      return {
        campos: [],
        data1: [],
        indexSeleccionado: "",
        seleccionado: "",
        mensaje: "",
        total: ""
      }
    }, 
    methods: {
      seleccionar (selected, index) {
        this.indexSeleccionado = index;
        this.seleccionado = selected;
      },
      borrar () {
        this.$store.commit('eliminar', this.seleccionado.id, 'ordenes');
      },
      mostrar () {
        this.data1 = this.$store.state.ordenes;
      }
    },
    mounted () {
      this.mostrar ();

      let key = this.data1[0].keys();
      for(let i = 0; i < key.length - 1; i++){
        this.campos.push({'key': key[i], 'sortable': true});
      }
      this.campos.push({'key': key[key.length - 1], 'sortable': false});
    }
  }
</script>

<style>

</style>
