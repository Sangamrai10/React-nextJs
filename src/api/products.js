import api from './api';
import { formatSearchParams } from '@/helpers/formatParams';

async function getAllProducts(searchParams) {

    const query = formatSearchParams(searchParams);

    const response = await api.get(`/api/products?${query}`);

    return response.data;
}

export {
    getAllProducts,
}