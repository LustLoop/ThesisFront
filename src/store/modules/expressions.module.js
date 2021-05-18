import {ApiService} from "@/services/api-service";
import {FETCH_USERS, SAVE_EXPRESSION, SAVE_USER_VARIANT} from "@/store/actions.type";
import {ADD_EXPRESSION, ADD_USER_VARIANT, SET_USERS} from "@/store/mutations.type";

const initialState = {
    expressions: [],
    users: []
};

export const state = { ...initialState };

export const actions = {
    async [FETCH_USERS](context) {
        ApiService.get('users')
            .then((response) => {
                context.commit(SET_USERS, response.data)
            });
    },
    async [SAVE_USER_VARIANT](context, payload) {
        context.commit(ADD_USER_VARIANT, payload)
    },
    async [SAVE_EXPRESSION](context, payload) {
        context.commit(ADD_EXPRESSION, payload)
    }
};

export const mutations = {
    [SET_USERS](state, users) {
        state.users = users
    },
    [ADD_USER_VARIANT](state, payload) {
        let currentUser = state.users.find(u => u.login === payload.login)
        currentUser.variantId = payload.variantId
    },
    [ADD_EXPRESSION](state, payload) {
        let currentExpression = state.expressions.filter(function (expression) {
            return expression.variantId === payload.variantId
        })
        if (currentExpression.length === 0) {
            state.expressions.push(payload)
        } else {
            console.log('here')
            currentExpression[0].content = payload.content
        }
    }
}

export const getters = {
    users(state) {
        return state.users;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}