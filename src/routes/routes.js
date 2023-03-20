import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    children:[
        {
          path: "/sign-in",
          element: <SignIn/>,
        
        },
        {
          path: "/sign-up",
          element: <SignUp/>,
        
        },
      ]
    },
   
  ]);
  
  export default routes;
  