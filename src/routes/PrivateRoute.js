import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const user = useSelector((state)=>state.auth.user)
    
    const location = useLocation()

    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

  return children
}

export default PrivateRoute