import React from 'react';
import Banner from './../components/Header/Banner';
import Brands from './../components/Main/Brands';
import Products from './../components/Main/Products';
import Blog from './../components/Main/Blog';
import Newsletter from './../components/Main/Newsletter';
import Discount from './../components/Main/Discount';
import ScrollToTop from 'react-scroll-to-top';
import useGetDiscountData from '../components/Custom/useGetDiscountData';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [discounts] = useGetDiscountData();
    const brands = useLoaderData();


    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <Banner></Banner>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <Brands brands={brands}></Brands>
            </div>
            <ScrollToTop className='flex justify-center items-center' smooth />
            <div data-aos="fade-up" data-aos-duration="2000">
                <Discount discounts={discounts}></Discount>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <Blog></Blog>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;