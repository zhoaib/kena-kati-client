import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Hero></Hero>
        </div>
    );
};

export default Home;