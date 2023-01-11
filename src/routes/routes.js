
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";


export const router =[
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/login",
    element: <Login/>
  },
];