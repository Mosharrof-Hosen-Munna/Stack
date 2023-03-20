import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../Pages/Shared/Navigation'

const Main = () => {
  return (
    <div >
        <Navigation/>
        <Outlet/>
       
    </div>
  )
}

export default Main