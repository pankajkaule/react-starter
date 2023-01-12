import ProtectedRoutes from "../auth/ProtectedRoutes";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

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
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoutes>
        <Cart />
      </ProtectedRoutes>
    ),
  },
];
