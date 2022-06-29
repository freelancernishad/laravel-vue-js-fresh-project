let adminlayout = require('./components/layouts/adminlayout.vue').default;
let blanklayout = require('./components/layouts/blanklayout.vue').default;



// Auth Components

let logout = require('./components/auth/logout.vue').default;

let home = require('./components/home.vue').default;

let index = require('./components/vuex/index.vue').default;

let PageNotFound = require('./components/404.vue').default;


let prefix = '/dashboard'
export const routes = [

  //Auth Routes

  { path: `${prefix}/logout`, component: logout, name:'logout',meta: { layout: blanklayout } },

  { path:  `${prefix}`, component: home, name:'home',meta: { layout: adminlayout } },

  { path:  `${prefix}/index`, component: index, name:'index',meta: { layout: adminlayout } },

  { path: "*", component: PageNotFound }

]
