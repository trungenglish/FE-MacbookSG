import axios from '../axiosCustomize.js';

const getProductByCategory = async (categoryId) => {
    const URL_API = `/api/v1/user/productByCate/${categoryId}`;
    return axios.get(URL_API);
}

const getProductById = async (id) => {
    const URL_API = `/api/v1/user/productById/${id}`;
    return axios.get(URL_API);
}

const filterIncrease = async (categoryId) => {
    const URL_API = `/api/v1/user/filterIncrease/${categoryId}`;
    return axios.get(URL_API);
}

const filterDecrease = async (categoryId) => {
    const URL_API = `/api/v1/user/filterDecrease/${categoryId}`;
    return axios.get(URL_API);
}

export {
    getProductByCategory, getProductById, filterDecrease, filterIncrease
}