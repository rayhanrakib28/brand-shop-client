import React from 'react';
import { Link } from 'react-router-dom';

const BrandProductsCard = ({ products }) => {
    const { _id, image, name, type, price, rating } = products || {};

    return (
        <Link to={`/product/${_id}`}>
            <div className='cursor-pointer'>
                <img
                    src={image}
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-md"
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
                        <p className='text-[#0078FF]'>({rating})</p>
                    </div>
                    

                    <div className="mt-4">
                        <Link to={`/product/${_id}`}>
                            <button
                                className="block w-full rounded bg-gradient-to-r from-[#0078FF] to-[#002B44] text-white font-semibold p-4 text-sm transition hover:scale-105"
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default BrandProductsCard;