import React from 'react';

const Newsletter = () => {
    const handleSubscribe = e => {
        e.preventDefault();
    }
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-xl text-[#002B44] capitalize md:text-3xl lg:text-4xl font-bold text-center'>Join newsletter and get <br /><span className='text-[#0078FF]'>$10</span> discount for your next order!</h1>

            <div className='flex justify-center items-center mt-5 w-full'>
                <form onSubmit={handleSubscribe} className='w-1/2 text-center'>
                    <input type="email" name="email" placeholder='Email Address' className='py-3 px-6 border outline-none w-full rounded-lg' />
                    <button className="btn text-white bg-[#0078FF] hover:bg-[#0078FF] mt-6">Subscribe</button>
               </form>
            </div>
        </div>
    );
};

export default Newsletter;