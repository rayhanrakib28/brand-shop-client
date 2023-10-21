import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='flex flex-col lg:flex-row gap-16 items-center'>
                <img className='lg:w-full rounded-xl px-4 md:px-0' src="https://i.ibb.co/W3LWcdT/iliya-jokic-ru9e7p-KWlg0-unsplash.png" alt="Blog" />
                <div className='w-2/3 md:w-3/4 lg:w-1/2 '>
                    <h1 className='text-3xl text-[#002B44] font-semibold'>DIY Smart <br /> PC Building for <br />Enhanced Gaming.</h1>
                    <h3 className='text-sm text-[#92989c] font-light mt-5'>Unlock a world of gaming possibilities with our innovative approach to building smarter gaming PCs right in the comfort of your home.</h3>
                    <button className='border px-4 py-2 rounded-2xl mt-10 font-semibold text-[#002B44] hover:text-[#0078FF]'>Read the article</button>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;