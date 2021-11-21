import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import LoginPage from "@/components/LoginPage/index.vue"
import CreateAccountPage from "@/components/CreateAccountPage/index.vue"
import MainLayout from "@/components/MainLayout/index.vue"
import ProjectList from "@/components/ProjectList/index.vue"
import ProjectContent from "@/components/ProjectContent/index.vue"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: LoginPage
  },
  {
    path: "/create-account",
    component: CreateAccountPage
  },
  {
    path:"/main",
    component:MainLayout,
    children:[
      {
        path:"/project-list",
        component:ProjectList
      },
      {
        path:"/project/content/:project_id",
        component:ProjectContent
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
