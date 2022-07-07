import Vue from 'vue'
require('../bootstrap');
import "datatables.net-dt/js/dataTables.dataTables";
import 'datatables.net-buttons-bs4'
// import 'datatables.net-buttons'

import "datatables.net-dt/css/jquery.dataTables.min.css";
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routes';

import store from './store'
window.Reload = new Vue();
const router = new VueRouter({
  routes,
  mode: 'history'
})
const app = new Vue({
    el: '#app',
    router,
    store
});
