import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from "../App.jsx";
import {PageNotFound} from "../pages/SystemPage/PageNotFound.jsx";
import HomePage from "../pages/HomePage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Navigate to="/Homepage" />,
            },
            {
                path: "/Homepage",
                element: <HomePage />,
            },
        ]
    },
]);