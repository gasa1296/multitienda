(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e61ee7b2"],{"4de4":function(t,o,r){"use strict";var a=r("23e7"),c=r("b727").filter,e=r("d039"),i=r("1dde"),n=i("filter"),s=n&&!e((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));a({target:"Array",proto:!0,forced:!n||!s},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},fabd:function(t,o,r){"use strict";r.r(o);var a=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",[r("b-row",[r("b-col",{attrs:{lg:"3"}},[r("b-row",[r("b-col",[r("h1",[t._v("multitienda")]),r("b-button",{attrs:{variant:"dark",block:""},on:{click:function(o){return t.estadoModal()}}},[t._v("Ver mi carrito")])],1)],1),r("b-row",[r("b-col",[r("h3",[t._v("Categorias")]),r("b-button-group",t._l(t.categorias,(function(o,a){return r("b-button",{key:o.ID,attrs:{variant:"secondary"},on:{click:function(r){return t.seleccionarCategoria(o,a)}}},[t._v(t._s(o.nombre))])})),1)],1)],1)],1),r("b-col",{attrs:{lg:"9"}},[r("b-carousel",t._l(t.productos,(function(t){return r("b-carousel-slide",{key:t.ID,attrs:{"img-src":t.imagen}})})),1),r("b-row",{staticClass:"justify-content-around"},t._l(t.productosMostrados,(function(o,a){return r("b-col",{key:o.ID,attrs:{lg:"3",md:"4",sm:"6"}},[r("b-card",{attrs:{"img-src":o.imagen,"img-top":""}},[r("b-card-title",{on:{click:function(r){return t.seleccionarProducto(o,a)}}},[t._v(t._s(o.nombre))]),r("b-card-sub-title",[t._v(t._s(o.precio))]),r("b-card-text",[t._v(t._s(o.descripcion))])],1)],1)})),1)],1)],1),"carrito"==t.estado?r("b-modal",{attrs:{id:"modal",title:"Mi Carro","hide-footer":""}},[r("b-container",[r("b-form",[r("b-form-group",{attrs:{label:"Nombre Completo","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",type:"text",required:""},model:{value:t.nombre,callback:function(o){t.nombre=o},expression:"nombre"}})],1),r("b-form-group",t._l(t.carrito,(function(o,a){return r("b-form-row",{key:o.producto.ID},[r("b-col",{attrs:{cols:"7"}},[r("label",{attrs:{for:o.producto.nombre}},[t._v(t._s(o.producto.nombre))])]),r("b-col",{attrs:{cols:"4"}},[r("b-form-input",{attrs:{name:o.producto.nombre,type:"number"},model:{value:o.cantidad,callback:function(r){t.$set(o,"cantidad",r)},expression:"car.cantidad"}},[t._v(t._s(o.cantidad))])],1),r("b-col",{attrs:{cols:"1"}},[r("b-button",{staticClass:"close",on:{click:function(o){return t.quitarCarrito(a)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)],1)})),1),r("b-form-group",[r("b-form-row",[r("b-col",{attrs:{cols:"8"}},[t._v("Total")]),r("b-col",{attrs:{cols:"4"}},[t._v(t._s(t.total))])],1)],1),r("b-form-group",[r("b-button",{attrs:{type:"submit",variant:"dark",block:""},on:{click:function(o){return o.preventDefault(),t.comprar()}}},[t._v("Comprar")])],1)],1)],1)],1):r("b-modal",{attrs:{id:"modal",title:t.productoSeleccionado.nombre,"hide-footer":""}},[r("b-container",[r("h4",[t._v(t._s(t.productoSeleccionado.descripcion))]),r("h5",[t._v(t._s(t.productoSeleccionado.precio)+" bsS")]),r("b-form",[r("b-form-group",{attrs:{label:"Cantidad","label-for":"cantidad"}},[r("b-form-input",{attrs:{id:"cantidad",type:"number"}})],1),r("b-form-group",[r("b-button",{attrs:{type:"submit",variant:"dark",block:""},on:{click:function(o){return o.preventDefault(),t.agregarCarrito()}}},[t._v("Agregar a carro")])],1)],1)],1)],1)],1)},c=[],e=(r("4de4"),r("a434"),{name:"inicio",data:function(){return{categorias:[],productos:[],categoriaSeleccionada:{},productoSeleccionado:{ID:"",nombre:"",descripcion:"",precio:"",categoria:"",imagen:""},nombre:"",carrito:[],total:"",mensaje:"",estado:""}},methods:{estadoModal:function(){this.estado="carrito",this.$bvModal.show("modal")},seleccionarCategoria:function(t){this.categoriaSeleccionada=t},seleccionarProducto:function(t){this.productoSeleccionado=t,this.estado="agregarCarrito",this.$bvModal.show("modal")},agregarCarrito:function(){this.$bvModal.hide("modal");var t={producto:"",cantidad:""};t.cantidad=document.getElementById("cantidad").value,t.producto=this.productoSeleccionado,this.carrito.push(t)},comprar:function(){var t=this;this.$bvModal.hide("modal");for(var o=0;o<this.carrito.length;o++)this.$axios.get("http://localhost/mercadito/index.php?tabla=ordenes&accion=insertar&nombre="+this.nombre+"&producto="+this.carrito[o].producto.nombre+"&cantidad="+this.carrito[o].cantidad).then((function(o){t.mensaje=o.data,t.carrito=[]})).catch((function(o){t.mensaje=o}))},quitarCarrito:function(t){this.carrito.splice(t,1)},mostrar:function(){var t=this;this.$axios.get("http://localhost/mercadito/index.php?tabla=categorias&accion=mostrar").then((function(o){t.categorias=o.data})).catch((function(o){t.mensaje=o})),this.$axios.get("http://localhost/mercadito/index.php?tabla=productos&accion=mostrar").then((function(o){t.productos=o.data,t.productosMostrados=t.productos})).catch((function(o){t.mensaje=o}))},clase:function(t){return 0==t?"active":""}},watch:{categoriaSeleccionada:function(){this.productosMostrados=[];for(var t=0;t<this.productos.length;t++)this.productos[t].categoria==this.categoriaSeleccionada.ID&&this.productosMostrados.push(this.productos[t])},carrito:function(){this.total=0;for(var t=0;t<this.carrito.length;t++)this.total+=this.carrito[t].producto.precio*this.carrito[t].cantidad}},computed:{productosMostrados:function(){var t=this;return this.productos.filter((function(o){return o.categoria==t.categoriaSeleccionada.ID}))}},mounted:function(){this.mostrar()}}),i=e,n=r("2877"),s=Object(n["a"])(i,a,c,!1,null,null,null);o["default"]=s.exports}}]);
//# sourceMappingURL=chunk-e61ee7b2.7223f9fc.js.map