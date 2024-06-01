import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Update from "../Pages/Dashboard/Update/Update";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/secret",
          element: <PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        },

        // Admin Route

        {
          path: "alluser",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "additem",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "manageitems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: "update/:id",
          element:<AdminRoute><Update></Update></AdminRoute>,
          // loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);