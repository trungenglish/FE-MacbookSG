import axios from "../axiosCustomize.js";

const getOrderById = async() => {
    const URL_BACKEND = `/api/v1/user/your-order`;
    return axios.get(URL_BACKEND);
}

export {
    getOrderById
}