<template>
  <b-container>
    <b-row>
      <b-col lg="3">
        <b-row>
          <b-col>
            <h1>multitienda</h1>
            <b-button variant="dark" block @click="estadoModal()">Ver mi carrito</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Categorias</h3>
            <b-button-group>
              <b-button variant="secondary" v-for="(categoria, index) in categorias" :key="categoria.ID" @click="seleccionarCategoria(categoria, index)">{{categoria.nombre}}</b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="9">
        <b-carousel>
          <b-carousel-slide v-for="producto in productos" :key="producto.ID" :img-src="producto.imagen"></b-carousel-slide>
        </b-carousel>
        <b-row class="justify-content-around">
          <b-col lg="3" md="4" sm="6" v-for="(producto, index) in productosMostrados" :key="producto.ID">
            <b-card  :img-src="producto.imagen" img-top>
              <b-card-title @click="seleccionarProducto(producto, index)">{{producto.nombre}}</b-card-title>
              <b-card-sub-title>{{producto.precio}}</b-card-sub-title>
              <b-card-text>{{producto.descripcion}}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-modal id="modal" v-if="estado == 'carrito'" title="Mi Carro" hide-footer>
      <b-container>
        <b-form>
          <b-form-group label="Nombre Completo" label-for="name">
            <b-form-input id="name" type="text" v-model="nombre" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-row v-for="(car, index) in carrito" :key="car.producto.ID">
              <b-col cols="7">
                <label :for="car.producto.nombre">{{car.producto.nombre}}</label>
              </b-col>
              <b-col cols="4">
                <b-form-input :name="car.producto.nombre" v-model="car.cantidad" type="number">{{car.cantidad}}</b-form-input>
              </b-col>
              <b-col cols="1">
                <b-button class="close" @click="quitarCarrito(index)">
                  <span aria-hidden="true">&times;</span>
                </b-button>
              </b-col>
            </b-form-row>
          </b-form-group>
          <b-form-group>
            <b-form-row>
              <b-col cols="8">Total</b-col>
              <b-col cols="4">{{total}}</b-col>
            </b-form-row>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" variant="dark" @click.prevent="comprar()" block>Comprar</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
    <b-modal id="modal" v-else :title="productoSeleccionado.nombre" hide-footer>
      <b-container>
        <h4>{{productoSeleccionado.descripcion}}</h4>
        <h5>{{productoSeleccionado.precio}} bsS</h5>
        <b-form>
          <b-form-group label="Cantidad" label-for="cantidad">
            <b-form-input id="cantidad" type="number"></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" variant="dark" @click.prevent="agregarCarrito()" block>Agregar a carro</b-button>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>
  </b-container>
</template>

<script>
  export default {
    name: "inicio",
    data () {
      return {
        categorias: [],
        productos: [],
        categoriaSeleccionada: {},
        productoSeleccionado: {
          ID: "",
          nombre: "",
          descripcion: "",
          precio: "",
          categoria: "",
          imagen: ""
        },
        nombre: "",
        carrito: [],
        total: "",
        mensaje: "",
        estado: ""
      }
    },
    methods: {
      estadoModal(){
        this.estado="carrito";
        this.$bvModal.show('modal');
      },
      seleccionarCategoria (categoria) {
        this.categoriaSeleccionada = categoria;
      },
      seleccionarProducto(producto) {
        this.productoSeleccionado = producto;
        this.estado="agregarCarrito";
        this.$bvModal.show('modal');
      },
      agregarCarrito () {
        this.$bvModal.hide("modal");
        let nuevoCarrito = {
          producto: "",
          cantidad: ""
        };
        nuevoCarrito.cantidad = document.getElementById("cantidad").value;
        nuevoCarrito.producto = this.productoSeleccionado;
        this.carrito.push(nuevoCarrito);
      },
      comprar () {
        this.$bvModal.hide("modal");
        this.$store.commit('agregar', this.carrito, 'ordenes');
      },
      quitarCarrito (index) {
        this.carrito.splice(index, 1)
      },
      clase (index) {
        if (index == 0) {
          return "active"
        }
        else {
          return ""
        }
      }
    },
    watch: {
      categoriaSeleccionada () {
        this.productosMostrados = []
        for (let i = 0; i < this.productos.length; i++) {
          if(this.productos[i].categoria == this.categoriaSeleccionada.ID) {
            this.productosMostrados.push(this.productos[i])
          }
        }
      },
      carrito () {
        this.total = 0
        for (let i = 0; i < this.carrito.length; i++) {
          this.total += (this.carrito[i].producto.precio * this.carrito[i].cantidad)
        }
      }
    },
    computed: {
      productosMostrados () {
        return this.productos.filter((productos) => (productos.categoria == this.categoriaSeleccionada.ID))
      }
    },
    mounted () {
      this.mostrar ()
      this.categorias = this.$store.state.categorias
      this.productos = this.$store.state.productos
    }
  }
</script>



