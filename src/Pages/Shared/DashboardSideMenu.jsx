import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGrip, faUser,faChartSimple,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const DashboardSideMenu = () => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }
  return (
    <div  style={{ minWidth: "250px" }}>
      <div className="sticky min-h-screen top-0 border-r-2">
      <div className="flex   items-center py-8 pl-8">
        <FontAwesomeIcon
          className="text-3xl text-blue-400 font-bold mr-2"
          icon={faBook}
        />
        <h1 className="text-3xl font-bold " style={{ color: "#4E5D78" }}>
          Stack
        </h1>
      </div>
      <div className="text-xs text-gray-400 font-medium ml-8  mb-6">PAGES</div>
      <ul className="list-none ">
        <li className="my-2">
          <NavLink
           
            to="/dashboard/dashboard"
            className={({ isActive}) =>
              isActive
                ? "p-4 bg-secondary  flex items-center  rounded-xl text-sm text-gray-400 mx-4"
                : "p-4   flex items-center  rounded-xl text-sm text-gray-400 mx-4"
            }
          >
            {" "}
            <FontAwesomeIcon
              className="text-xl text-gray-400  font-bold mr-4"
              icon={faGrip}
            />
            Dashboard
          </NavLink>
        </li>
        <li className="my-2">
          <NavLink
            to="/dashboard/users"
            className={({ isActive}) =>
              isActive
                ? "p-4 bg-secondary  flex items-center  rounded-xl text-sm text-gray-400 mx-4"
                : "p-4   flex items-center  rounded-xl text-sm text-gray-400 mx-4"
            }
          >
            <FontAwesomeIcon
              className="text-xl text-gray-400  font-bold mr-4"
              icon={faUser}
            />
            Users
          </NavLink>
        </li>
        <li className="my-2">
          <NavLink
            to="/dashboard/sales"
            className={({ isActive}) =>
              isActive
                ? "p-4 bg-secondary flex items-center  rounded-xl text-sm text-gray-400 mx-4"
                : "p-4   flex items-center  rounded-xl text-sm text-gray-400 mx-4"
            }
          >
            <FontAwesomeIcon
              className="text-xl text-gray-400  font-bold mr-4"
              icon={faChartSimple}
            />
            Sales
          </NavLink>
        </li>
        <li onClick={handleLogout} className="p-4 my-2 cursor-pointer  flex items-center  rounded-xl text-sm text-gray-400 mx-4">
         
            <FontAwesomeIcon
              className="text-xl text-gray-400  font-bold mr-4"
              icon={faRightFromBracket}
            />
            LogOut
          
        </li>
      </ul>
      </div>
    </div>
  );
};

export default DashboardSideMenu;
