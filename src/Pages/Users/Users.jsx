import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadUsers } from "../../store/usersSlice";
import Pagination from "./Pagination";

const Users = () => {
  const dispatch = useDispatch();
  const search = useLocation().search;
  const pageNumber = new URLSearchParams(search).get("page");

  const users = useSelector((state) => state.users);

  console.log(pageNumber);

  useEffect(() => {
    dispatch(loadUsers(pageNumber ? pageNumber : 1));
  }, [pageNumber]);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-800">Users List</h1>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full  text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-600 bg-slate-50 rounded-lg uppercase ">
            <tr>
              <th scope="col" class="px-6 py-4">
                #ID
              </th>
              <th scope="col" class="px-6 py-4">
                USER
              </th>
              <th scope="col" class="px-6 py-4">
                EMAIL
              </th>
              <th scope="col" class="px-6 float-right py-4">
                OPTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {users.users?.data?.map((user, index) => (
              <tr class="bg-white">
                <th class="px-6 py-4 font-medium text-gray-900  ">{user.id}</th>
                <td class="px-6 py-4 flex items-center">
                  <img
                    className="w-16 rounded-2xl mr-5"
                    src={user.avatar}
                    alt=""
                  />{" "}
                  {`${user.first_name} ${user.last_name}`}
                </td>
                <td class="px-6 py-4">{user.email}</td>
                <td class="px-6 py-4 float-right text-gray-500 text-3xl">
                  ...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination currentPage={pageNumber ? pageNumber : 1}/>
      </div>
    </div>
  );
};

export default Users;
