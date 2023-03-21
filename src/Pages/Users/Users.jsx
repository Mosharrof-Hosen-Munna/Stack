import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, } from "react-router-dom";
import { loadUsers } from "../../store/usersSlice";

const Users = () => {

  const dispatch = useDispatch()
  const search = useLocation().search;
  const pageNumber = new URLSearchParams(search).get('page');

  const users = useSelector(state=>state.users)

  console.log(users)

  useEffect(()=>{
    dispatch(loadUsers(pageNumber?pageNumber :1))
  },[])

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-xl font-semibold text-gray-800">Users List</h1>
      </div>
      
<div class="relative px-8 overflow-x-auto">
    <table class="w-full  text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-900 uppercase ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    #ID
                </th>
                <th scope="col" class="px-6 py-3">
                    USER
                </th>
                <th scope="col" class="px-6 py-3">
                    EMAIL 
                </th>
                <th scope="col" class="px-6 float-right py-3">
                    OPTIONS 
                </th>
            </tr>
        </thead>
        <tbody>
           {
            users.users?.data?.map((user,index)=>
               <tr class="bg-white">
                <th  class="px-6 py-4 font-medium text-gray-900  ">
                   {user.id}
                </th>
                <td class="px-6 py-4">
                    {`${user.first_name} ${user.last_name}`}
                </td>
                <td class="px-6 py-4">
                    {user.email}
                </td>
                <td class="px-6 py-4 float-right text-3xl">
                    ...
                </td>
            </tr>
            )
           }
           
            
        </tbody>
    </table>
</div>

    </div>
  );
};

export default Users;
