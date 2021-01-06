import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import  store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, meta: { requiresAuth: true} },
        { path: '/login', component: LoginPage },
        { path: '*', redirect: '/'}
    ]
})


