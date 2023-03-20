import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faGrip,faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const DashboardSideMenu = () => {
  return (
    <div  style={{minWidth:'250px'}}>
        <div className="flex items-center py-8 pl-8">
          <FontAwesomeIcon
            className="text-2xl text-blue-400 font-bold mr-2"
            icon={faBook}
          />
          <h1 className="text-2xl font-bold " style={{ color: "#4E5D78" }}>
            Stack
          </h1>
        </div>
        <div className='text-xs text-gray-400 font-medium ml-8  mb-6'>PAGES</div>
        <ul className='list-none '>
            <li className='my-2'>
                <Link to='/dashboard' className='p-4 bg-slate-100 text-medium flex items-center rounded-xl text-sm text-gray-400 mx-4'> <FontAwesomeIcon
            className="text-xl text-gray-400  font-bold mr-4"
            icon={faGrip}
          />Dashboard</Link>
            </li>
            <li className='my-2'>
                <Link to='/dashboard/users' className='p-4 bg-slate-100  flex items-center rounded-xl text-sm text-gray-400 mx-4'><FontAwesomeIcon
            className="text-xl text-gray-400  font-bold mr-4"
            icon={faUser}
          />Users</Link>
            </li>
            <li className='my-2'>
                <Link to='/dashboard/users' className='p-4 bg-slate-100  flex items-center  rounded-xl text-sm text-gray-400 mx-4'><FontAwesomeIcon
            className="text-xl text-gray-400  font-bold mr-4"
            icon={faUser}
          />Sales</Link>
            </li>
        </ul>
    </div>
  )
}

export default DashboardSideMenu