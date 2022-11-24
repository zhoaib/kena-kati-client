import React from 'react';

const ProductCategoryCard = ({ brandOption }) => {
    const { name, picture, id } = brandOption;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">See All Products</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCard;