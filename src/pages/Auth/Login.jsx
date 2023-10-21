import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = e => {
        e.preventDefault();
        googleSignIn().then((result) => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/shop')
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (email, password) {
            signIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    toast.success("Successfully Signed In");
                    navigate(location?.state ? location.state : '/shop')
                })
                .catch((err) => {
                    toast.error("Invalid Email/Password")
                })
        }
    };


    return (
        <div>
            <div className="bg-gray-100 mt-2">
                <Toaster />
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 justify-center items-center gap-x-16 gap-y-8">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form
                                onSubmit={handleLogin}
                                className="space-y-8">
                                <h1 className='text-center text-3xl text-[#0078FF] font-bold'>Welcome Back!</h1>
                                <p className='text-center text-sm font-extralight text-gray-500 lg:px-60'>Access your account, explore the latest tech products, and enjoy a seamless shopping experience. Sign in to unlock exclusive offers and stay up-to-date with the latest tech trends.</p>
                                <h1 className='text-center font-bold'>Sign in to your account</h1>
                                <div className='flex justify-center'>
                                    <input
                                        required
                                        className="w-full lg:w-1/2 rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Your Email Address"
                                        type="email"
                                        name='email'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <input
                                        required
                                        className="w-full lg:w-1/2 rounded-lg border-gray-200 p-3 text-sm border outline-none"
                                        placeholder="Your Password"
                                        type="password"
                                        name='password'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <span>New to Priyo Tech?</span>
                                    <Link to={'/register'}><span className='text-[#0078FF] pl-2'>Create an account</span></Link> 
                                </div>

                                <div className="mt-4 flex justify-center items-center w-full">
                                    <button
                                        className="w-full md:w-1/2 rounded-lg bg-[#0078FF] px-12 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div class="flex w-full justify-center items-center">
                                    <div class="w-full md:w-1/5 border-t border-gray-300"></div>
                                    <div class="px-4 text-gray-500">Or</div>
                                    <div class="w-full md:w-1/5 border-t border-gray-300"></div>
                                </div>

                                <div className="flex flex-col gap-6 justify-center items-center w-full">
                                    <button
                                        onClick={handleGoogle}
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

export default Login;