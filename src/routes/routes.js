import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Sales from "../Pages/Sales/Sales";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Pages/Users/Users";
import PrivateRoute from "./PrivateRoute";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>,
    children:[
        {
            path:'/dashboard/dashboard',
            element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
            path:'/dashboard/users',
            element:<PrivateRoute><Users/></PrivateRoute>
        },
        {
            path:'/dashboard/sales',
            element:<PrivateRoute><Sales/></PrivateRoute>
        }
    ]
  }
]);

export default routes;
