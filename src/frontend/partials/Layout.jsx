import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../partials/Header';
import {Footer} from './new/Footer';
import { ChicorycomConsole } from '../components/ChicorycomConsole';
import { SidebarContext } from '../context/SidebarContext';
import { MobileSideBare } from '../components/MobileSidebar';
//import {isMobile} from 'react-device-detect';

/**
* @author
* @function Layout
**/

export const Layout = () => {
  
  
  return(
    <div className="">
          <Header />
            <MobileSideBare/>
            <Outlet />

            <Footer />
            {
              /*location.pathname !== "/signin" ? <ChicorycomConsole/> : ''
              <ChicorycomConsole/>*/
            }
      
    </div>
   )
  }
