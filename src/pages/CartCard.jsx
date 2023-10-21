import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartCard = ({ product }) => {
    const { _id, batch, image, name, type, price, rating } = product || {};

    const handleDeleteFromCart = id => {
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
                fetch(`https://tech-shop-server-ecru.vercel.app/cart_products/${id}`, {
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
                            window.location.href = '/cart';
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full group relative block overflow-hidden'>
            <button
                onClick={() => handleDeleteFromCart(_id)}
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Delete</span>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#002B44" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>


            <img
                src={image}
                alt=""
                className="w-full h-[60vh] object-cover transition duration-500 group-hover:scale-105 rounded-md"
            />
            <div className="relative border border-gray-100 bg-[#F9FAFB] p-6">
                <span
                    className="whitespace-nowrap bg-[#002B44] text-white px-3 py-1.5 text-xs font-medium"
                >
                    {type}
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
                <div className='flex items-center gap-2 '>
                    <p className="text-gray-700 font-semibold">${price}</p>
                    <p className='text-[#0078FF] font-semibold'>({rating})</p>
                </div>


                <div className="mt-4">
                    <Link to={`/brands/${batch}`}>
                        <button
                            className="block w-full rounded bg-gradient-to-r from-[#0078FF] to-[#002B44] text-white font-semibold p-4 text-sm transition hover:scale-105"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartCard;