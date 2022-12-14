import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/ProductCard/BookingModal/BookingModal';
import ProductCard from '../Shared/ProductCard/ProductCard';

const CardDetails = () => {
    const [camera, setCamera] = useState(null);
    const allProducts = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>
                This Category Contain {allProducts.length} Items
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-36'>
                {
                    allProducts.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setCamera={setCamera}
                    ></ProductCard>)
                }
            </div>
            {camera &&
                <BookingModal
                    camera={camera}
                    setCamera={setCamera}
                ></BookingModal>
            }
        </div>
    );
};

export default CardDetails;