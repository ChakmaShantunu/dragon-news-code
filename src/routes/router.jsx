import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            }
        ]
    },
    {
        path: "/auth",
        element: <h2>Authentication layout</h2>
    },
    {
        path: "/news",
        element: <h2>news</h2>
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    }
]);

export default router;