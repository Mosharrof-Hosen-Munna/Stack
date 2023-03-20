import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Sales from "../Pages/Sales/Sales";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Pages/Users/Users";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
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
            element: <Dashboard/>
        },
        {
            path:'/dashboard/users',
            element:<Users/>
        },
        {
            path:'/dashboard/sales',
            element:<Sales/>
        }
    ]
  }
]);

export default routes;
