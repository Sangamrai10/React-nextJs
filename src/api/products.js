import { formatSearchParams } from "@/helpers/formatParams";
import api from "./api";
import axios from "axios";
import config from "@/config/config";

async function getAllProducts(searchParams) {

    const query = formatSearchParams(searchParams);

    const response = await api.get(`/api/products?${query}`);

    return response.data;
}

async function addProducts(data) {
    const authToken = localStorage.getItem('authToken')
    const response = await axios.post(`${config.apiUrl}/api/products`, data, {
        headers: {
            Authorization: (`brarer ${authToken}`)
        }
    })
    return response
}


export {
    getAllProducts,
    addProducts,
}