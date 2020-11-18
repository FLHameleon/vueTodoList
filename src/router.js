import Vue from 'vue'
import Router from 'vue-router'
import Home from '/home/iai/workOcen3/12112020/opiti/myProdg/1232/src/views/Home.vue'
import Todos from '/home/iai/workOcen3/12112020/opiti/myProdg/1232/src/views/Todos.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: Todos
        }
    ]
})