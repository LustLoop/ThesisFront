import {ApiService} from "@/services/api-service";
import {FETCH_USERS, SAVE_EXPRESSION, SAVE_USER_VARIANT} from "@/store/actions.type";
import {ADD_EXPRESSION, ADD_USER_VARIANT, SET_USERS} from "@/store/mutations.type";

const initialState = {
    expressions: [],
    users: []
};

export const state = { ...initialState };

export const actions = {
    [FETCH_USERS](context) {
        ApiService.get('users')
            .then((response) => {
                context.commit(SET_USERS, response.data)
            });
    },
    [SAVE_USER_VARIANT](context, payload) {
        context.commit(ADD_USER_VARIANT, payload)
    },
    [SAVE_EXPRESSION](context, payload) {
        context.commit(ADD_EXPRESSION, payload)
    },
};

export const mutations = {
    [SET_USERS](state, users) {
        state.users = users
    },
    [ADD_USER_VARIANT](state, payload) {
        let currentUser = getCurrentVariant(payload.variantId)
        if (currentUser[0].users === undefined) {
            currentUser[0].users = []
        }
        currentUser[0].users[payload.selectorId] = payload.login
    },
    [ADD_EXPRESSION](state, payload) {
        let currentExpression = getCurrentVariant(payload.variantId)
        if (currentExpression.length === 0) {
            state.expressions.push(payload)
        } else {
            currentExpression[0].content = payload.content
        }
    }
}

export const getters = {
    users(state) {
        return state.users;
    }
}

function getCurrentVariant(payload) {
    return  state.expressions.filter(function (expression) {
        return expression.variantId === payload
    })
}

export default {
    state,
    actions,
    mutations,
    getters
}