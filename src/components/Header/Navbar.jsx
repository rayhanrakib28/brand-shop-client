import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then((result) => {
            toast.success('Sign Out Successfully.', {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                },
                iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                },
            });
        })
    }

    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Home
            </NavLink>

        </li>

        <li>
            <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Shop
            </NavLink>
        </li>

    </>

    const usernav = <>
        <li>
            <NavLink
                to="/add_product"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Add Product
            </NavLink>

        </li>

        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-[#0078FF]" : ""
                }
            >
                Cart
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className='bg-[#002b44] hidden md:block text-white'>
                <div className='container mx-auto flex justify-items-center items-center py-1 px-4 lg:px-0'>
                    <h2 className='w-full text-start text-xs md:text-sm '>Need help? <br className='md:hidden' /> Call us: 1-800-123-4567</h2>
                    <h2 className='w-full text-center text-xs md:text-sm '>Summer sale discount off 50% off! Shop Now</h2>
                    <h2 className='w-full text-end text-xs md:text-sm'> </h2>
                </div>
            </div>
            <div className='container mx-auto pt-4'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className='hidden lg:flex'>
                            <ul className="flex gap-8 text-base font-semibold px-1">
                                {navlinks}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow bg-base-100 rounded-box w-52">
                                {navlinks}
                                {usernav}
                                <li><a className='font-bold' href="/login">Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a href='/' className=" normal-case text-xl"><img src="https://i.ibb.co/tMFSdqn/logo.png" alt='Priyo Tech' /></a>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? (<div className='hidden lg:flex lg:mr-2'>
                                <ul className="flex gap-4 text-base font-semibold px-1">
                                    {usernav}
                                </ul>
                            </div>) : (<a className='text-base font-semibold mr-3 hidden md:block' href="/login">Sign In</a> )
                        }
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user ? user.photoURL : '/user.png'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                                {
                                    user && <li className='text-lg text-center'>{user?.displayName}</li>
                                }
                                {
                                    user && <button className='text-lg text-center' onClick={handleLogOut}>Sign Out</button>
                                }
                                {
                                    !user && <button><a className='text-lg text-center' href="/login">Sign In</a></button>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;