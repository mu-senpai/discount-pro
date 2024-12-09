import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import BrandsPage from "../components/BrandsPage/BrandsPage";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>
    },
    {
      path: "brands",
      element: <BrandsPage></BrandsPage>,
    },
    {
      path: "brand/:id",
      element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
      loader: () => fetch('/data.json')
    },
    {
      path: "auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "register",
            element: <Register></Register>,
        },
        {
            path: "resetpassword",
            element: <ForgotPassword></ForgotPassword>,
        },
        {
            path: "updateprofile",
            element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        },
      ]
    },
    {
      path: "profile",
      element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>,
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    },
]);

export default router;