import { useState } from "react";
import BrandCard from "./BrandCard";
import { useEffect } from "react";

const Brands = () => {
    const [allBrands, setAllBrands] = useState([]);
    useEffect(() => {
        fetch('https://tech-shop-server-ecru.vercel.app/brands')
            .then(res => res.json())
            .then(data => setAllBrands(data))
    }, []);

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-[#002B44] text-3xl lg:text-4xl font-bold text-center'>Premium Brand Showcase</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center px-10 lg:px-0 mt-8'>
                {
                    allBrands?.map((brand) => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;