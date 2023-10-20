import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandProductsCard from './BrandProductsCard';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const BrandProducts = () => {
    const specficBrand = useLoaderData();
    return (
        <div className='mt-2 mb-8 container mx-auto'>
            <div className=''>
                <AwesomeSlider bullets={false}>
                    <div className='w-full h-full'>
                        <a href="#"><img className='w-full h-full' src="https://i.ibb.co/KVRVzY8/banner1.jpg" alt="" /></a>
                    </div>
                    <div className='w-full h-full'>
                        <a href="#"><img className='w-full h-full' src="https://i.ibb.co/18KXL9Z/banner2.jpg" alt="" /></a>
                    </div>
                    <div className='w-full h-full'>
                        <a href="#"><img className='w-full h-full' src="https://i.ibb.co/s1vf3Rn/banner3.jpg" alt="" /></a>
                    </div>
                </AwesomeSlider>
            </div>

            <div className='container mx-auto my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-10 lg:px-0 mt-8'>
                    {
                        specficBrand?.map(products => <BrandProductsCard key={products._id} products={products}></BrandProductsCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default BrandProducts;