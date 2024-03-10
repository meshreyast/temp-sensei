import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const userData = useSelector(state => state.parents.data);

    let auth = {
        'token': userData ? true : false
    }

    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes