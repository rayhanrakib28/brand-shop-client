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
import BrandProducts from './../pages/Products/BrandProducts';
import ProductSpecs from './../pages/Products/ProductSpecs';
import PrivateRoutes from './PrivateRoutes';



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
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: () => fetch('https://tech-shop-server-ecru.vercel.app/cart_products')
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
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: "/update/:id",
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://tech-shop-server-ecru.vercel.app/update/${params.id}`)
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/brands/:id",
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`https://tech-shop-server-ecru.vercel.app/brands/${params.id}`)
            },
            {
                path: "/product/:id",
                element: <PrivateRoutes><ProductSpecs></ProductSpecs></PrivateRoutes>
            }
        ]

    },
]);

export default Routes;