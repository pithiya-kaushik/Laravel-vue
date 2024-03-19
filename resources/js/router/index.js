import {createRouter, createWebHistory } from "vue-router";

import pageIndex from '../components/pages/index.vue'


const routes = [
    
    {

        path:   '/',

        component: pageIndex
    },
   
]

const router = createRouter({

    history: createWebHistory(),
    
    routes

})

export default router