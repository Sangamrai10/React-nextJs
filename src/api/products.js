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
    const authToken = localStorage.getItem('authToken');

    const response = await api.post(`/api/products?limit=100&sort={"createdAt":-1}`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            // Do not set Content-Type explicitly if data is FormData
        },
    });

    return response;
}

async function getProductById(id) {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
}

async function editProduct(id, data) {
    const authToken = localStorage.getItem('authToken');

    const response = await api.put(`/api/products/${id}`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            // Do not set Content-Type explicitly if data is FormData
        },
    });

    return response;
}

export {
    getAllProducts,
    addProducts,
    getProductById,
    editProduct,
}