import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const userId = user.metadata.createdAt;
    const products = useLoaderData();
    const foundProduct = products.filter((product) => product.userId === userId);


    return (
        <div className="container mx-auto mt-2 mb-20">
            <div className="bg-gradient-to-r from-[#0078FF] to-[#002B44] rounded-md h-[40vh] flex items-center justify-center">
                <h1 className="text-white font-bold text-4xl">Shop and Save!</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-10 lg:px-0 mt-8'>
                {
                    foundProduct?.map(product => <CartCard key={product._id} product={product}></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;