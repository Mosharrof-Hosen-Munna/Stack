import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router";
import "./App.css";
import routes from "./routes/routes";
import { getUserLocalStorage } from "./store/authSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserLocalStorage())
  },[])

  return <RouterProvider router={routes} />;
}

export default App;
