import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../contexts/PrivateRoute/PrivateRoute";
import Main from "../layout/Main";
import AddServices from "../pages/AddServices/AddServices";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from '../pages/Services/ServiceDetails/ServiceDetails'
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
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://assignment-for-tourism-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices /></PrivateRoute>
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
            },
            {
                path: '*', element: <div>This route not founded. 404.</div>
            }
        ]
    }
])