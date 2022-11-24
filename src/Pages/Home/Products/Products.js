import React, { useEffect, useState } from 'react';
import ProductCategoryCard from './ProductCategoryCard';

const Products = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>Our Products</h2>
            <hr className='w-1/2 mx-auto mb-3' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    brands.map(brand => <ProductCategoryCard
                        key={brand._id}
                        brandOption={brand}
                    ></ProductCategoryCard>)
                }
            </div>
        </div>
    );
};

export default Products;