import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import Home from "../../Pages/Home/Home/Home";
import ProductCategoryCard from "../../Pages/Home/Products/ProductCategoryCard";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";

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
                path: '/carddetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },

        ]
    }
])