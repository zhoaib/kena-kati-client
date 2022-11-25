import React from 'react';

const ProductCard = ({ product }) => {
    const { name, picture, resaleprice, orginalprice, sellername, location, yearofuse, details } = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto font-bold">{name}</h2>
                <p>Original Price: ${orginalprice}</p>
                <p>Resale Price: ${resaleprice}</p>
                <p>Used: {yearofuse}</p>
                <p>Seller Name: {sellername}</p>
                <p>Location: {location}</p>
                <p>{details}</p>
                <div className="card-actions justify-center mt-5">
                    <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;