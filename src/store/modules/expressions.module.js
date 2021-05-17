import {ApiService} from "@/services/api-service";
import {FETCH_USERS} from "@/store/actions.type";
import {SET_USERS} from "@/store/mutations.type";

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
    }
};

export const mutations = {
    [SET_USERS](state, users) {
        state.users = users
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