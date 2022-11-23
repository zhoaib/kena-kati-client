import React from 'react';

const Hero = () => {
    return (
        <div className='my-10'>
            <div className="hero rounded-lg" style={{ backgroundImage: `url("https://miro.medium.com/max/1200/1*1Jup3iElYzyH2T6o8E1WOg.jpeg")` }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <p className='font-bold'>About</p>
                        <h1 className="mb-5 text-5xl font-bold">Kena-Kati</h1>
                        <p className="mb-5">Let us introduce to you the online Camera equipments buying and selling spot. Now you can easily buy or sell your any photography product (Lens, camera, tripod, filters, flashes, lights, bags etc).
                            <br />
                            This is the site where you can sell your product and can meet those people who really wants to buy your product (no fake people). You can browse this site to find your desired product with a reasonable price and again we could say from the real people's</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;