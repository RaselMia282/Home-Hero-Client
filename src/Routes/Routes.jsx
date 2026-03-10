import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyServices from "../Pages/MyServices/MyServices";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Profile from "../Pages/Profile/Profile";

import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddServices from "../Pages/AddServices/AddServices";
import UpdateService from "../Pages/UpdateService/UpdateService";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/services")
      },
      { 
        path: "services", 
        element: <Services></Services>,
        loader: () => fetch("http://localhost:3000/services")
      },
      { 
        path: "service-details/:id",
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      
      { 
        path: "/my-bookings", 
        element: <MyBookings></MyBookings>
      },
      
      { 
        path: "/my-services", 
        element: <MyServices></MyServices>
      },
      { 
        path: "/profile", 
        element: <Profile></Profile>
      },
      
      { 
        path: "/register",
        element: <Register></Register> 
      },
      { 
        path: "/login",
        element: <Login></Login>
      },
      { 
        path: "/add-services",
        element: <AddServices></AddServices>
      },
      {
       path:"/update-service/:id",
       element:<UpdateService></UpdateService>,
       loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
      },
    ]
  }
]);