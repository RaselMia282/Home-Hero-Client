import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AdService from "../Pages/Home/Dashboard/Profile/AdService/AdService";
import MyBookings from "../Pages/Home/Dashboard/Profile/MyBookings/MyBookings";
import MyServices from "../Pages/Home/Dashboard/Profile/MyServices/MyServices";
import Profile from "../Pages/Home/Dashboard/Profile/Profile";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import Services from "../Pages/Services/Services";
export const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/services")
      },
      { path: "register", element: <Register></Register> },
      { path: "login", element: <Login></Login> },
      { path: "service-details/:id", element: <ServiceDetails></ServiceDetails> },
      { path: "services", element: <Services></Services>,
        loader:() => fetch("http://localhost:3000/services")
        
      },
    ]
  },

  // dashboard Layout
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>, 
    children: [
      {
        path: "profile", 
        element: <Profile></Profile>
      },
      {
        path: "ad-service",
        element: <AdService></AdService>
      },
      {
        path: "my-bookings",
        element: <MyBookings></MyBookings>
      },
      {
        path: "my-services",
        element: <MyServices></MyServices>
      }
    ]
  }
]);
