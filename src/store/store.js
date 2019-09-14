import Vue from 'vue'
import Vuex from 'vuex'
import Result from './modules/Result'

import * as getters from './modules/getters'
import * as mutations from './modules/mutations'
import * as actions from './modules/actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: ""
    },
    getters,
    mutations,
    actions,
    modules: {
        Result
    }
});
