import ProtectedRoutes from "../auth/ProtectedRoutes";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetails from "../pages/ProductDetail";
import Products from "../pages/Products";

export const router = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/products/:category",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoutes>
        <Checkout />
      </ProtectedRoutes>
    ),
  },
];
