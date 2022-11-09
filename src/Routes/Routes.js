import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ServiceDetailCard from "../pages/Services/ServiceDetails/ServiceDetailCard/ServiceDetailCard";
import Services from "../pages/Services/Services/Services";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/services/:id',
                element: <ServiceDetailCard />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])