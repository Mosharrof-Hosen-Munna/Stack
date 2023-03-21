import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{background:'#f5f5f54d'}} className="absolute top-0 left-0  z-50 w-full min-h-screen flex items-center justify-center">
        <ThreeDots
          height="100"
          width="100"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  if (!user.token) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
