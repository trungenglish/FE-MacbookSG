import axios from '../axiosCustomize.js';

const getProductByCategory = async (categoryId) => {
    const URL_API = `/api/v1/user/productByCate/${categoryId}`;
    return axios.get(URL_API);
}

const getProductById = async (id) => {
    const URL_API = `/api/v1/user/productById/${id}`;
    return axios.get(URL_API);
}

export {
    getProductByCategory, getProductById
}