export  function formatSearchParams(searchParams){
    const {limit, sort, min, max, brand, category, name} = searchParams;
    let querry="";
    if(limit)querry=`${querry==""?"":querry+"&"}limit=${limit}`;
    if(sort)querry=`${querry==""?"":querry+"&"}sort=${sort}`;
    if(min)querry=`${querry==""?"":querry+"&"}min=${min}`;
    if(max)querry=`${querry==""?"":querry+"&"}max=${max}`;
    if(brand)querry=`${querry==""?"":querry+"&"}brand=${brand}`;
    if(category)querry=`${querry==""?"":querry+"&"}category=${category}`;
    if(name)querry=`${querry==""?"":querry+"&"}name=${name}`;

    return querry
}