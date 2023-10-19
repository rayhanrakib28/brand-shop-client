import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="bg-gray-100 mt-2">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 justify-center items-center gap-x-16 gap-y-8">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form className="space-y-8">
                                <h1 className='text-center text-3xl text-[#0078FF] font-bold'> Get started today !</h1>
                                <p className='text-center text-sm font-extralight text-gray-500 lg:px-60'>Access your account, explore the latest tech products, and enjoy a seamless shopping experience. Sign in to unlock exclusive offers and stay up-to-date with the latest tech trends.</p>
                                <h1 className='text-center font-bold'>Account Creation</h1>
                                <div className='flex justify-center'>
                                    <input
                                        className="w-full lg:w-1/2 rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Email Address"
                                        type="email"
                                        name='email'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <input
                                        className="w-full lg:w-1/2 rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Full Name"
                                        type="text"
                                        name='name'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <input
                                        className="w-full lg:w-1/2 rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Photo Url"
                                        type="text"
                                        name='photo'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <input
                                        className="w-full lg:w-1/2 rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Password"
                                        type="password"
                                        name='password'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <span>Already have an account?</span>
                                    <Link to={'/login'}><span className='text-[#0078FF] pl-2'>Sign in</span></Link>
                                </div>
                                
                                <div className="mt-4 flex justify-center items-center w-full">
                                    <button
                                        className="w-full md:w-1/2 rounded-lg bg-[#0078FF] px-12 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div class="flex w-full justify-center items-center">
                                    <div class="w-full md:w-1/5 border-t border-gray-300"></div>
                                    <div class="px-4 text-gray-500">Or</div>
                                    <div class="w-full md:w-1/5 border-t border-gray-300"></div>
                                </div>

                                <div className="flex flex-col gap-6 justify-center items-center w-full">
                                    <button
                                        className="w-full md:w-1/2 rounded-lg bg-[#0078FF] px-12 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Continue with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;