import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autenticado: false,
    categorias: [],
    productos: [],
    ordenes: [],
    usuarios: [
      {
        id: 1,
        userName: 'admin',
        password: '12345678'
      }
    ]
  },
  mutations: {
    Sesion (state) {
      state.autenticado = !state.autenticado;
    },
    editar (state, data, element){
      if (element == 'categorias') {
        let key = state.categorias.findIndex((backup, data) => backup.ID == data.ID);
        state.categorias[key] = data;
      }
      else if (element == 'productos') {
        let key = state.productos.findIndex((backup, data) => backup.ID == data.ID);
        state.productos[key] = data;
      }
      else if (element == 'usuarios') {
        let key = state.usuarios.findIndex((backup, data) => backup.ID == data.ID);
        state.usuarios[key] = data;
      }
      else {
        let key = state.ordenes.findIndex((backup, data) => backup.ID == data.ID);
        state.ordenes[key] = data;
      }
    },
    agregar (state, data){
      if (data.element == 'categorias') {
        state.categorias.push(data.sendedData);
      }
      else if (data.element == 'productos'){
        state.productos.push(data.sendedData);
      }
      else if (data.element == 'usuarios'){
        state.usuarios.push(data.sendedData);
      }
      else{
        state.ordenes.push(data.sendedData);
      }
    },
    eliminar (state, id, element){
      if (element == 'categorias') {
        state.categorias.splice(id, 1);
      }
      else if (element == 'productos') {
        state.productos.splice(id, 1);
      }
      else if (element == 'usuarios') {
        state.usuarios.splice(id, 1);
      }
      else {
        state.ordenes.splice(id, 1);
      }
    }
  },
  actions: {

  }
})
