<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <template v-slot:header>
            <b-row>
              <b-col lg="11" md="11" sm="12">
                <h3>Productos</h3>
              </b-col>
              <b-col>
                <b-button variant="dark" @click="estado = 'nuevo'" v-b-modal.modal>Nuevo</b-button>
              </b-col>
            </b-row>
          </template>
          <b-row>
            <b-col>
              <b-table :items="data0" :fields="campos" hover>
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
    <b-modal id="modal" v-if="estado == 'nuevo'" title="Nueva Producto" hide-footer>
      <b-container>
        <b-form>
          <b-form-group label="Nombre" label-for="name">
            <b-form-input id="name" type="text" v-model="nuevo.nombre" required></b-form-input>
          </b-form-group>
          <b-form-group label="Descripcion" label-for="textarea">
            <b-form-textarea id="textarea" rows="3" max-rows="3" v-model="nuevo.descripcion" required></b-form-textarea>
          </b-form-group>
          <b-form-group label="Precio" label-for="precio">
            <b-form-input id="precio" type="number" v-model="nuevo.precio" required></b-form-input>
          </b-form-group>
          <b-form-group label="Precio" label-for="precio">
            <b-form-file
              v-model="nuevo.imagen"
              :state="Boolean(file)"
              placeholder="Escoge un archivo o arrastalo aqui..."
              drop-placeholder="Arrastra el archivo aqui..."
            ></b-form-file>
            <b-row>Archivos: {{ file ? nuevo.imagen.name : '' }}</b-row>
          </b-form-group>
          <b-form-group label="Categoria" label-for="Categoria">
            <b-form-select id="categoria" v-model="nuevo.categoria" :options="data1" required></b-form-select>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" variant="dark" @click.prevent="agregar()" block>Agregar</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
    <b-modal id="modal" v-else-if="estado == 'editar'" title="Editar Producto" hide-footer>
      <b-container>
        <b-form>
          <b-form-group label="Nombre" label-for="name">
            <b-form-input id="name" type="text" v-model="seleccionado.nombre" required></b-form-input>
          </b-form-group>
          <b-form-group label="Descripcion" label-for="textarea">
            <b-form-textarea id="textarea" rows="3" max-rows="3" v-model="seleccionado.descripcion" required></b-form-textarea>
          </b-form-group>
          <b-form-group label="Precio" label-for="precio">
            <b-form-input id="precio" type="number" v-model="seleccionado.precio" required></b-form-input>
          </b-form-group>
          <b-form-group label="Precio" label-for="precio">
            <b-form-file
              v-model="seleccionado.imagen"
              :state="Boolean(file)"
              placeholder="Escoge un archivo o arrastalo aqui..."
              drop-placeholder="Arrastra el archivo aqui..."
            ></b-form-file>
            <b-row>Archivos: {{ file ? seleccionado.imagen.name : '' }}</b-row>
          </b-form-group>
          <b-form-group label="Categoria" label-for="Categoria">
            <b-form-select id="categoria" v-model="seleccionado.categoria" :options="data1" required></b-form-select>
          </b-form-group>
          <b-form-group>
            <b-button type="reset" variant="secondary" @click="$bvModal.hide('modal')">Cancelar</b-button>
            <b-button type="submit" variant="dark" @click.prevent="editar()">editar</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
    <b-modal id="modal" v-else title="Eliminar Producto" hide-footer>
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
    name: "productos",
    data () {
      return {
        campos: [],
        data0: [],
        data1: [],
        indexSeleccionado: "",
        seleccionado: "",
        nuevo: {
          nombre: "",
          descripcion: "",
          categoria: "",
          precio: "",
          imagen: null
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
        this.$store.commit('eliminar', this.seleccionado.id, 'productos');
      },
      editar () {
        this.$bvModal.hide('modal');
        this.$store.commit('editar', this.seleccionado, 'productos');
      },
      agregar () {
        this.$bvModal.hide('modal');
        this.$store.commit('agregar', this.nuevo, 'productos');
      },
      mostrar () {
        this.data0 = this.$store.state.productos;
      }
    },
    mounted () {
      this.mostrar ();

      let key = this.data0[0].keys();
      for(let i = 0; i < key.length - 1; i++){
        this.campos.push({'key': key[i], 'sortable': true});
      }
      this.campos.push({'key': key[key.length - 1], 'sortable': false});
    }
  }
</script>

<style>

</style>
