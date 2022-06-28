import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuth } from '../context/ChicorycomContex'

/**
* @author
* @function AuthLayout
**/

export const AuthLayout = () => {
  
  const auth = useAuth()
  const user = auth.user
  const navigate = useNavigate()
  const location = useLocation()
  let from = location?.state?.from?.pathname || "/admin"

  useEffect(() => {
    if(user) navigate(from, { replace: true });
  }, [user])


  return(
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div
        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
       <Outlet/>
       <ToastContainer/>
      </div>
      <div className="fixed bottom-2 flex items-center ustify-items-center w-full text-sm">
        <p>Absolute child</p>
      </div>
    </div>
   )
  }
