import React from 'react';
import { useLocation } from 'react-router-dom';
import BrandProductsCard from './BrandProductsCard';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useState } from 'react';
import { useEffect } from 'react';


const BrandProducts = () => {
    const [brand, setBrand] = useState([]);
    const [noProducts, setNoProducts] = useState(false)
    const location = useLocation();
    const pathname = location.pathname;
    const id = parseInt(pathname.slice(pathname.lastIndexOf('/') + 1));
    useEffect(() => {
        fetch(`https://tech-shop-server-ecru.vercel.app/brands/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setBrand(data)
                } else (
                    setNoProducts("No Products Available")
                )
            })
    }, [])


    return (
        <div>
            {
                noProducts ? (<div className='h-[90vh] flex items-center justify-center p-10'><h1 className='w-1/2 text-3xl text-black text-center font-semibold'>No Products Available</h1></div>) :
                    (<div className='mt-2 mb-8 container mx-auto'>
                        <div className=''>
                            <AwesomeSlider bullets={false}>
                                <div className='w-full h-full'>
                                    <a><img className='w-full h-full' src="https://i.ibb.co/KVRVzY8/banner1.jpg" alt="" /></a>
                                </div>
                                <div className='w-full h-full'>
                                    <a><img className='w-full h-full' src="https://i.ibb.co/18KXL9Z/banner2.jpg" alt="" /></a>
                                </div>
                                <div className='w-full h-full'>
                                    <a><img className='w-full h-full' src="https://i.ibb.co/s1vf3Rn/banner3.jpg" alt="" /></a>
                                </div>
                            </AwesomeSlider>
                        </div>

                        <div className='my-10'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-10 lg:px-0 mt-8'>
                                {
                                    brand?.map(products => <BrandProductsCard key={products._id} products={products}></BrandProductsCard>)
                                }
                            </div>
                        </div>

                    </div>)
            }
        </div>
    );
};

export default BrandProducts;