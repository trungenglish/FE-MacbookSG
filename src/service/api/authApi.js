import axios from "../axiosCustomize.js";

const loginAPI = async (phone, password) => {
    const URL_API = "/api/v1/user/login";
    const data = { phone, password }
    return axios.post(URL_API, data)
}

const registerAPI = async (name, phone, password) => {
    const URL_API = "/api/v1/user/register";
    const data = {name, phone, password}
    return axios.post(URL_API, data)
}

export {
    loginAPI, registerAPI
};