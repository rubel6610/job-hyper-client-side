import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Home from "../Pages/Homepage/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Jobdetails from "../Pages/Homepage/Jobdetails";
import Jobapply from "../Components/Jobapply";
import PrivateRoutes from "./PrivateRoutes";

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
    },
    {
        path:"/jobdetails/:id",
        loader:({params})=>fetch(`http://localhost:3000/singlejob/${params.id}`),
        Component:Jobdetails,
    },
    {
        path:"/jobapply/:id",
        element:<PrivateRoutes>
            <Jobapply/>
        </PrivateRoutes>,
    }
])