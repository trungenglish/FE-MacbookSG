import axios from "../axiosCustomize.js";

const getOrderById = async() => {
    const URL_BACKEND = `/api/v1/user/your-order`;
    return axios.get(URL_BACKEND);
}

const createOrder = async(items, quantity, totalPrice, address, note) => {
    const URL_BACKEND = `/api/v1/user/order`;
    const data = {items, quantity, totalPrice, address, note}
    return axios.post(URL_BACKEND, data);
}
export {
    getOrderById, createOrder
}