import React from "react";
import DashboardSideMenu from "../Pages/Shared/DashboardSideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex justify-start">
      <DashboardSideMenu />
      <div className="w-full">
      <div className="flex  justify-between">
        <div className="my-6 relative">
          <input
            style={{ width: "540px" }}
            type="text"
            class=" border border-gray-100 bg-slate-100 font-medium text-gray-900 text-sm rounded-xl focus:outline-orange-500 block w-full pl-5 py-4  "
            placeholder="Search"
            name="search"
          />
          <button
            type="button"
            class="block w-5 h-5 text-center text-xl leading-0 absolute top-3 right-5 text-gray-400 focus:outline-none hover:text-orange-500 transition-colors"
          >
            <FontAwesomeIcon
              className="text-md text-gray-400 "
              icon={faSearch}
            />
          </button>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="text-lg text-gray-400 " icon={faBell} />
          <img
            className="w-10 h-10 ml-11 mr-9 rounded-full"
            src="https://reqres.in/img/faces/2-image.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
       <Outlet/>
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
