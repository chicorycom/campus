import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom"

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import { SidebarContext } from '../context/SidebarContext'
import { useDatas } from '../../hooks/DatasContext'
import { SpinnerContaine } from '../components/SpinnerContaine'


function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  const location = useLocation()
  const { isloading } = useDatas()

  useEffect(() => {
    closeSidebar()
  }, [location, isloading, closeSidebar])

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Outlet/>
        </Main>
      </div>
      {isloading && <SpinnerContaine /> }

    </div>
  )
}

export default Layout
