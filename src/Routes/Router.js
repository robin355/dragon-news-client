import { createBrowserRouter } from "react-router-dom";
import Cetagory from "../components/Pages/Cetagory/Cetagory";
import Home from "../components/Pages/Home/Home";
import News from "../components/Pages/News/News";
import Main from "../Layout/Main";

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
                path: '/cetagory/:id',
                element: <Cetagory></Cetagory>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },

        ]
    }
])