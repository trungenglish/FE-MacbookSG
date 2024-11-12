import React, {useContext} from 'react';
import { Button, Result } from 'antd';
import {useNavigate, useRouteError} from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext.jsx";

export const ProtectedRoute = (props) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    if (user.isAuthenticated) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button
                    type="primary"
                    onClick={() => navigate("/login", {replace: true})}>
                    Back to Login</Button>}
            />
        )
    }
}

export default ProtectedRoute;