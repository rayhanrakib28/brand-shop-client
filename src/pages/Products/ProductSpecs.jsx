
import { useLoaderData, useLocation } from 'react-router-dom';

const ProductSpecs = () => {
    const [data] = useLoaderData();

    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const product = data.find(item => item._id = id);
    console.log(product);


    return (
        <div>

        </div>
    );
};

export default ProductSpecs;