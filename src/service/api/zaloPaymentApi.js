import axios from "../axiosCustomize.js";

const createZaloPayment = async (items, quantity, totalPrice, address, note) => {
    const URL_API = `/api/v1/user/payment-zaloPay`;
    return axios.post(URL_API, {items, quantity, totalPrice, address, note})
}

export {
    createZaloPayment
}