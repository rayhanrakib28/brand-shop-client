import { useLoaderData } from "react-router-dom";
import ShopCard from "./ShopCard";

const Shop = () => {
    const products = useLoaderData();
    return (
        <div className="container mx-auto mt-2 mb-20">
            <div className="bg-gradient-to-r from-[#0078FF] to-[#002B44] rounded-md h-[40vh] flex items-center justify-center">
                <h1 className="text-white font-bold text-4xl">Shop 'Til You Drop!</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-10 lg:px-0 mt-8'>
                {
                    products?.map(product => <ShopCard key={product._id} product={product}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;