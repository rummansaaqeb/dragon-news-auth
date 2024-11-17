import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default PrivateRoute;