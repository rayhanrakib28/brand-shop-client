import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const ProductSpecs = () => {
    const { user } = useContext(AuthContext);
    const userId = user.metadata.createdAt;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://tech-shop-server-ecru.vercel.app/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const product = data.find(item => item._id == id);
    const { _id, brand, batch, type, name, image, price, rating, short_description, details } = product || {};
    const sold = parseFloat(rating) * 10;

    const handleDeleteProduct = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0078FF',
            cancelButtonColor: '#002B44',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tech-shop-server-ecru.vercel.app/product/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            window.location.href = `/brands/${batch}`;
                        }
                    })
            }
        })
    }



    const handleAddToCart = ({ userId, brand, batch, type, name, image, price, rating, short_description, details }) => {
        const cartProduct = { brand, batch, type, name, image, price, rating, short_description, details, userId };
        fetch('https://tech-shop-server-ecru.vercel.app/cart_products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Added',
                        showConfirmButton: false
                    })
                }
            })
    }




    return (
        <div className='container mx-auto my-10'>
            <h2 href='/shop' className='mb-3 mx-6 lg:mx-0  cursor-pointer uppercase font-semibold text-xs bg-[#002B44] text-[#F9FAFB] p-1 w-fit rounded-md'>shop{pathname}</h2>
            <div className='flex flex-col lg:flex-row gap-10 items-start justify-items-center px-6 lg:px-0'>
                <a className='w-full lg:w-1/2 group relative block overflow-hidden'>
                    <button
                        onClick={() => handleDeleteProduct(_id)}
                        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                    >
                        <span className="sr-only">Delete</span>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#002B44" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                    <Link to={`/update/${_id}`}>
                        <button
                            className="absolute end-4 top-16 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Update</span>
                            <svg fill="#002B44" version="1.1" id="Layer_1" xmlns: x="&amp;ns_extend;" xmlns: i="&amp;ns_ai;" xmlns: graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml: space="preserve" stroke="#002B44" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata> <sfw xmlns="&amp;ns_sfw;"> <slices> </slices> <slicesourcebounds width="505" height="984" bottomleftorigin="true" x="0" y="-552"> </slicesourcebounds> </sfw> </metadata> <g> <g> <g> <path d="M12,22C6.5,22,2,17.5,2,12c0-0.6,0.4-1,1-1s1,0.4,1,1c0,4.4,3.6,8,8,8s8-3.6,8-8s-3.6-8-8-8C9.3,4,6.8,5.3,5.4,7.6 C5,8,4.4,8.1,4,7.8C3.5,7.5,3.4,6.9,3.7,6.4C5.5,3.7,8.7,2,12,2c5.5,0,10,4.5,10,10S17.5,22,12,22z"></path> </g> </g> <g> <g> <path d="M12,13c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v5C13,12.6,12.6,13,12,13z"></path> </g> </g> <g> <g> <path d="M15,16c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3c0.4,0.4,0.4,1,0,1.4C15.5,15.9,15.3,16,15,16z "></path> </g> </g> <g> <g> <path d="M8,8H4C3.4,8,3,7.6,3,7V3c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1,0.4,1,1S8.6,8,8,8z"></path> </g> </g> </g> </g></svg>
                        </button></Link>


                    <img
                        src={image}
                        alt=""
                        className="w-full h-[60vh] object-cover transition duration-500 group-hover:scale-105 rounded-md"
                    />
                </a>
                <div className='w-full lg:w-1/2'>
                    <Link to={`/brands/${batch}`}>
                        <h3 className='bg-[#0078FF] p-1 uppercase text-white text-sm font-semibold w-fit rounded'>{brand}</h3>
                    </Link>
                    <h4 className='my-2 bg-[#002B44] p-1 w-fit rounded uppercase text-[#F9FAFB] text-xs'>{type}</h4>
                    <h1 className='my-2 capitalize text-[#002B44] text-2xl md:text-3xl lg:text-4xl font-semibold'>{name}</h1>
                    <h4 className='mb-2 capitalize text-[#002B44] text-xs font-light w-[90%]'>{short_description}</h4>
                    <p className="my-4 capitalize text-[#002B44] text-xl font-semibold">Price : ${price}</p>
                    <span className='text-[#002B44] capitalize text-sm font-semibold flex items-center gap-2 my-4'>reviews : <img className='w-4' src="https://i.ibb.co/c2wM3sV/star.png" alt="" />{rating}</span>

                    <p className="my-4 capitalize text-[#002B44] font-semibold">sold : {sold} item</p>
                    <p className=' capitalize text-[#002B44] text-sm font-normal w-[90%]'>{details}</p>
                    <button
                        onClick={() => handleAddToCart({ userId, brand, batch, type, name, image, price, rating, short_description, details })}
                        className='bg-[#002B44] text-white px-4 py-3 rounded-md mt-6'>
                        Add To Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductSpecs;