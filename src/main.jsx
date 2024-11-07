import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
    RouterProvider,
} from "react-router-dom"
import {router} from "./routes/router.jsx"
import {AuthWrapper} from "./components/context/AuthContext.jsx";
import {CartProvider} from "./components/context/CartContext.jsx";

createRoot(document.getElementById('root')).render(

      <AuthWrapper>
          <CartProvider>
              <RouterProvider router={router}/>
          </CartProvider>
      </AuthWrapper>

)
