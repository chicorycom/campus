import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header';
import Footer from './FooterAuth';

import  SignInBg  from '../../backend/icons/sign-in-bg.svg';
import  ResetBg  from '../../backend/icons/sign-in-a-bg.svg';
import  SignUpBg  from '../../backend/icons/sign-up-bg.svg';

import { MobileSideBare } from '../components/MobileSidebar';


/**
* @author
* @function Layout
**/

export const LayoutAuth = () => {
  
  
  const {pathname} = useLocation();

  const bg = pathname === '/reset-password' ? ResetBg : pathname === '/signup' ?  SignUpBg : SignInBg;
  
  return(
    <div className="flex min-h-screen w-full h-full overflow-hidden justify-center items-center bg-gray-900 bg-no-repeat bg-center" style={{backgroundImage: `url(${bg})`}}>
         {/* <Header />
          
          <MobileSideBare/> */}
          
            <Outlet />
          <Footer />
    </div>
   )
  }
