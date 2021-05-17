import Vue from "vue";
import Vuex from "vuex";
import expression from './modules/expressions.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        expression
    }
});