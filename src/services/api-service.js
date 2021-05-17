import axios from "axios";

const url = 'http://localhost:5000';

export const ApiService = {
    get() {
        return axios.get(url)
    },

    post(resource, value) {
        return axios.post(url + resource, value)
    }
}