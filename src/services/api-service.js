import axios from "axios";

const url = 'http://localhost:5000/';

export const ApiService = {
    get(resource) {
        return axios.get(url + resource)
    },

    post(resource, value) {
        console.log(value)
        return axios.post(url + resource, value)
    }
}