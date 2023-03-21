import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router";
import "./App.css";
import routes from "./routes/routes";
import { getUserLocalStorage, setLoading } from "./store/authSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(true))
    dispatch(getUserLocalStorage())
    dispatch(setLoading(false))

  },[])

  return <RouterProvider router={routes} />;
}

export default App;
