import axios from "../axiosCustomize.js";

const createZaloPayment = async (items, idUser, quantity, totalPrice) => {
    const URL_API = `/api/v1/user/payment-zaloPay`;
    return axios.post(URL_API, {items, idUser, quantity, totalPrice})
}

export {
    createZaloPayment
}