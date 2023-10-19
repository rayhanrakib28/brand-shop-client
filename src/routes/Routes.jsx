import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Error from '../pages/Error';
import Layout from '../utils/Layout';
import Cart from './../pages/Cart';
import Login from './../pages/Auth/Login';
import Register from './../pages/Auth/Register';
import AddProduct from './../pages/Products/AddProduct';
import UpdateProduct from './../pages/Products/UpdateProduct';
import Shop from '../pages/Shop/Shop';



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add_product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/update_product",
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            }   
        ]
        
    },
]);

export default Routes;