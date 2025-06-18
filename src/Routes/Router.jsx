import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Home from "../Pages/Homepage/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Jobdetails from "../Pages/Homepage/Jobdetails";
import Jobapply from "../Components/Jobapply";
import PrivateRoutes from "./PrivateRoutes";
import Myapplication from "../Pages/Application/Myapplication";
import NotFound from "../Pages/NotFoundRoute";
import Addjobs from "../Pages/Addjobs/Addjobs";
import MypostedJobs from "../Pages/Addjobs/MypostedJobs";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/jobdetails/:id",
        loader: async ({ params }) => {
            const res = await fetch(`https://job-hyper-server.vercel.app/singlejob/${params.id}`);
            if (!res.ok) {
                throw new Response("Not Found", { status: 404 });
            }
            return res.json();
        },
        Component: Jobdetails,

    },
    {
        path: "/jobapply/:id",
        element: <PrivateRoutes>
            <Jobapply />
        </PrivateRoutes>,
    },
    {
        path: "/myapplication",
        element: <PrivateRoutes>
            <Myapplication />
        </PrivateRoutes>,
    },
    {
        path: "/addjobs",
        element: <PrivateRoutes>
            <Addjobs />
        </PrivateRoutes>,
    },
    {
        path: "/mypostedjobs",
        element: <PrivateRoutes>
            <MypostedJobs />
        </PrivateRoutes>,
       
    },
    {
        path: "*",
        Component: NotFound,
    }
])