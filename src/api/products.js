import { formatSearchParams } from "@/helpers/formatParams";
import api from "./api";

async function getAllProducts(searchParams) {

    const query = formatSearchParams(searchParams);

    const response = await api.get(`/api/products?${query}`);

    return response.data;
}


export {
    getAllProducts,
}