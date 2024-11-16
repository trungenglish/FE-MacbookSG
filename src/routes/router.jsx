import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from "../App.jsx";
import {PageNotFound} from "../pages/SystemPage/PageNotFound.jsx";
import HomePage from "../pages/HomePage.jsx";
import Register from "../pages/auth/Register.jsx";
import LoginPage from "../pages/auth/Login.jsx";
import BranchInfo from "../pages/BranchInfo.jsx";
import detailProduct from "../pages/DetailProduct.jsx";
import DetailProduct from "../pages/DetailProduct.jsx";
import WarrantyPolicy from "../pages/WarrantyPolicy.jsx";
import DeliveryPage from "../pages/Delivery.jsx";
import InstallmentPolicyPage from "../pages/installmentPolicy.jsx";
import ProductList from "../components/Product/ProductList.jsx";
import Product from "../pages/Product.jsx";
import CartPage from "../pages/Cart.jsx";
import ProtectedRoute from "../pages/SystemPage/ProtectedRoute.jsx";
import News from "../pages/News.jsx";
import NewsDetail from "../components/TinTuc/NewsDetail.jsx";
import TechnicalSpecs from "../components/Product/TechnicalSpecs.jsx";
import Checkout from "../pages/Checkout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Navigate to="/homepage" />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "homepage",
                element: <HomePage />,
            },
            {
                path: "branch",
                element: <BranchInfo/>
            },
            {
                path: "detailProduct/:productId",
                element: <DetailProduct />,
            },
            {
                path: "deliveryPolicy",
                element: <DeliveryPage />,
            },
            {
                path: "warrantyPolicy",
                element: <WarrantyPolicy />,
            },
            {
                path: "installmentPolicy",
                element: <InstallmentPolicyPage />,
            },
            {
              path: "news",
              element: <News/>
            },
            {
                path: "/news/:id",
                element: <NewsDetail/>
            },
            {
                path: "productList/:categoryId",
                element: <Product />,
            },
            {
                path: "cart",
                element: <CartPage />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            }
            // {
            //     path: "checkout",
            //     element: <ProtectedRoute></ProtectedRoute>,
            // }
        ]
    },
]);