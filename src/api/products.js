import api from '@/api/api';
import {formatSearchParams} from '@/helpers/formatParams';

async function getAllProducts(searchParams) {

    const query = formatSearchParams(searchParams);

    try {
        const response = await api.get(`/api/products?${query}`);
    
        return response.data;
    } catch (error) {
        console.log('error fetching data', error)
        throw error;
    }
}

export {
    getAllProducts,
}