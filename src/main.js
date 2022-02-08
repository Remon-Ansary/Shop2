import Vue from "vue"
import VueRouter from "vue-router"
import App from "@/App.vue"
import { routes } from "@/routes"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import store from "@/store"
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({ routes })
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
