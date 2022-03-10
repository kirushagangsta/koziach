import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
window.Vue = Vue;
Vue.use(Vuex);

import advantages from "@/store/modules/advantages";
export default new Vuex.Store ({
    modules : {
        advantages
    }
})