import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Blog/Blog"
import NotFound from "../../Pages/NotFound/NotFound";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/carddetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ]
    }
])