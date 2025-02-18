import axios from "../axiosCustomize.js"

const getCity = async() => {
    const URL_BACKEND = `/api/v1/user/city`;
    return axios.get(URL_BACKEND);
}

const getDistrict = async(cityCode) => {
    const URL_BACKEND = `/api/v1/user/district?cityCode=${cityCode}`;
    return axios.get(URL_BACKEND);
}


export {
    getCity, getDistrict
}