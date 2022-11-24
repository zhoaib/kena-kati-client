import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategoryCard = ({ brandOption }) => {
    const { name, picture, _id, category_id } = brandOption;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <div className="card-actions justify-center">
                    <Link to={`/carddetails/${category_id}`}><button className="btn btn-primary">See All Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCard;