import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component:Home,
            }
        ]
    },
    {
        path:"/register",
        Component:Register,
    },
    {
        path:"/login",
        Component:Login,
    }
])