import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../LayOut/RootLayOut/RootLayOut';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Auth/Register';
import Login from '../Pages/Auth/Login';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
    ]
  },
]);
