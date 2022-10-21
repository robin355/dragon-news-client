import { createBrowserRouter } from "react-router-dom";
import Cetagory from "../components/Pages/Cetagory/Cetagory";
import Home from "../components/Pages/Home/Home";
import News from "../components/Pages/News/News";
import Login from "../components/Pages/Share/Login/Login/Login";
import Register from "../components/Pages/Share/Login/Register/Register";
import Main from "../Layout/Main";
import Privateroutes from "../PrivateRoutes/Privateroutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/cetagory/:id',
                element: <Cetagory></Cetagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/news/:id',
                element: <Privateroutes><News></News></Privateroutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])