import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Layout from './Layout/Layout';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import DashboardLayout from './Pages/Dashboard/DashboardLayout';
import Home from './Pages/Home/Home';
import ProductCard from './Pages/Products/ProductCard';
import AllProducts from './Pages/Products/AllProducts';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
         {
          path:'/',
          element:<Home></Home>
         },
         {
          path:'/products',
          element:<AllProducts></AllProducts>
         }
    ]
  },
  {
    path:'/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'addProduct',
        element:<AddProduct></AddProduct>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
