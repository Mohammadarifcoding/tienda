import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import DashboardLayout from './Pages/Dashboard/DashboardLayout';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
         {
          path:'/',
          element:<Home></Home>
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
