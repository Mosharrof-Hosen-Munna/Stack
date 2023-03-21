import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const user = useSelector(state=>state.auth.user)

    if (user.token) {
        return <Navigate to="/dashboard/dashboard" replace={true} />;
      }else{
        return  <Navigate to="/sign-up" replace={true} />;
      }
  
}

export default Home