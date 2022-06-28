import React, { Suspense } from "react";
import { 
  Routes,
  Route
 } from "react-router-dom"
 import { Windmill } from '@windmill/react-ui'
import { SidebarProvider } from "./context/SidebarContext";
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import routes from './routes'
import Layout  from './containers/Layout'
import {AuthLayout} from './containers/AuthLayout'
import { AuthProvider, RequireAuth } from "./context/ChicorycomContex";
import Page404 from "./pages/404";
import { SpinnerContaine } from "./components/SpinnerContaine";



function Admin() {
  
  return (
    <AuthProvider>
      <SidebarProvider>
        <Windmill usePreferences>
        <Routes>
          <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`${route.path}`}
                    element={<Suspense fallback={<SpinnerContaine />}><route.component /></Suspense>}
                  />
                ) : null
              })}
              <Route path="*" element={<Page404/> } />
          </Route>
            <Route path="/" element={<AuthLayout />} >
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>   
          </Routes>
        </Windmill>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default Admin;
