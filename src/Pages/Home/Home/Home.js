import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Hero></Hero>
        </div>
    );
};

export default Home;