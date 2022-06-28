let layout = require('./components/layouts/layout.vue').default;




let home = require('./components/home.vue').default;
let PageNotFound = require('./components/404.vue').default;


let prefix = '/'
export const routes = [


  { path:  `${prefix}`, component: home, name:'home',meta: { layout: layout } },
  { path: "*", component: PageNotFound }

]
