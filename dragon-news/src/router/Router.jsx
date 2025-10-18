import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>,
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                }
            ]
        },
        {
            path: '/auth',
            element: <h1>auth layout</h1>
        },
        {
            path: '/news',
            element: <h1>news layout</h1>
        },
        {
            path: '/*',
            element: <h1>Error layout</h1>
        },
    ]
)

export default router;