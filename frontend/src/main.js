import { createApp } from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

BootstrapVue.setConfig.productionTip = process.env.NODE_ENV === 'production'
Vue.use(BootstrapVue)

createApp(App).mount('#app')

new.Vue({
    router,
    store,
    render: h =>h(App),
}).mount('#app')