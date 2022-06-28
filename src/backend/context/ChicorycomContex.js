import React, { createContext, useContext} from 'react'
import { useLocation, Navigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { firbaseAuth, logInWithEmailAndPassword, logout } from '../auth'

export const AuthContext = createContext(null);


/**
 * 
 * @param {children} param0 
 * @returns children
 */
 export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    //console.log(auth)
  
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="login" state={{ from: location }} replace />;
    }
    return children;
}

/**
 * 
 * @param {children} param0 
 * @returns 
 */
 export function AuthProvider({ children }) {
    let [user, loading, error] = useAuthState(firbaseAuth)
    
      let signin = (newUser) => {
        return logInWithEmailAndPassword(newUser.email, newUser.password)
                .then((userCredential) => {
                  localStorage.setItem('auth', JSON.stringify(userCredential.user))
        })
      };
    
      let signout = () => {
        localStorage.removeItem('auth')
        return logout()
      };
  
      if(!user){
          user = JSON.parse(localStorage.getItem('auth')) || null
      }
      const value = { user, signin, signout }
      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }

 /**
 * 
 * @returns useContext
 */
export const useAuth = () => {
    return useContext(AuthContext);
}