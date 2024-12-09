import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import LoadingPage from "../components/LoadingPage/LoadingPage";

const PrivateRoute = (props = {}) => {

    const {children} = props || {};

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <LoadingPage></LoadingPage>;
    } else {
        if (user && user?.email) {
            return children;
        }
    }

    return (
        <Navigate state={location.pathname} to={`/auth/login`}></Navigate>
    );
};

export default PrivateRoute;