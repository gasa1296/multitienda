import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'principal',
    component: () => import( '../views/Principal.vue'),
    children: [{
      path: '/',
      name: 'inicio',
      component: () => import('../views/User/Principal.vue')
    },
    {
      path: '/conocenos',
      name: 'conocenos',
      component: () => import('../views/User/Acerca.vue')
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/User/Servicios.vue')
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      component: () => import('../views/User/Contactanos.vue')
    }]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    children: [{
      path: '/',
      name: 'login',
      component: () => import('../views/Admin/Login.vue')
    },
    {
      path: '/admin/ordenes',
      name: 'ordenes',
      component: () => import('../views/Admin/Ordenes.vue')
    },
    {
      path: '/admin/categorias',
      name: 'categorias',
      component: () => import('../views/Admin/Categorias.vue')
    },
    {
      path: '/admin/productos',
      name: '',
      component: () => import('../views/Admin/Productos.vue')
    },
    {
      path: '/admin/usuarios',
      name: 'usuarios',
      component: () => import('../views/Admin/Usuarios.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
