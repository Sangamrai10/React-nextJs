

// export function formatSearchParams(searchParams) {
//     const { limit, sort, min, max, brand, category, name } = 
//         typeof searchParams === 'function' ? searchParams() : searchParams;
  
//     let query = "";
  
//     if (limit) query = `${query == "" ? "" : query + "&"}limit=${limit}`;
  
//     if (sort) query = `${query == "" ? "" : query + "&"}sort=${sort}`;
  
//     if (min) query = `${query == "" ? "" : query + "&"}min=${min}`;
  
//     if (max) query = `${query == "" ? "" : query + "&"}max=${max}`;
  
//     if (brand) query = `${query == "" ? "" : query + "&"}brand=${brand}`;
  
//     if (category) query = `${query == "" ? "" : query + "&"}category=${category}`;
  
//     if (name) query = `${query == "" ? "" : query + "&"}name=${name}`;
  
//     return query;
//   }
export function formatSearchParams(searchParams) {
    const {
        limit,
        sort,
        min,
        max,
        brand,
        category,
        name,
      } = searchParams;
  
    const queryParts = [];
  
    if (limit) queryParts.push(`limit=${limit}`);
    if (sort) queryParts.push(`sort=${sort}`);
    if (min) queryParts.push(`min=${min}`);
    if (max) queryParts.push(`max=${max}`);
    if (brand) queryParts.push(`brand=${brand}`);
    if (category) queryParts.push(`category=${category}`);
    if (name) queryParts.push(`name=${name}`);
  
    return queryParts.join('&');
  }