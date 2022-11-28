import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Blog/Blog"
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/carddetails/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kena-kati-server.vercel.app/products/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

        ]
    }
])