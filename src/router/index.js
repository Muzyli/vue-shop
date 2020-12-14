import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ProductDetail from '../views/ProductDetail.vue';
import ShopCart from '../views/ShopCart.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: ShopCart,
    },
  ],
});
