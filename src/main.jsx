import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Exploring from './Exploring/Exploring';
import Layout from './Layout/Layout';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
