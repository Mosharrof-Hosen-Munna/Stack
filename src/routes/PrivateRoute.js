import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const user = useSelector((state)=>state.auth.user)
    const isLoading = useSelector((state) =>state.auth.isLoading)
    
    const location = useLocation()

    console.log(user)
    console.log(isLoading)
    if(isLoading){
        return <div>
            loading....
        </div>
    }
    console.log(isLoading)
    
    if (!user.token) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
      }

  return children
}

export default PrivateRoute