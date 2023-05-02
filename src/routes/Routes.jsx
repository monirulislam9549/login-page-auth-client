import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import ServicesLayout from "../layouts/ServicesLayout/ServicesLayout";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "services",
        element: <ServicesLayout></ServicesLayout>,
        children: [
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: ":id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>
            },
        ]
    },
])

export default router;