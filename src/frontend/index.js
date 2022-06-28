import React, { useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import './css/style.css';

import Home from './pages/Home';

import './lang'
import { Layout } from './partials/Layout';
import { LayoutAuth } from './partials/LayoutAuth';
import { SidebarProvider } from './context/SidebarContext';
import Pricing from './pages/Pricing';
import { FormationSigle } from './pages/FormationSingle';
import { SpinnerContaine } from '../backend/components/SpinnerContaine';
import Courses from './pages/Courses';

const Services = lazy(() => import('./pages/Services'));
const Formations = lazy(() => import('./pages/Formations'));
const Page404 = lazy(() => import('./pages/404'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp  = lazy(() => import('./pages/SignUp'));
const PricingComponent = lazy(() => import('./pages/pricings/PricingComponent'));
const ResetPassword  = lazy(() => import('./pages/ResetPassword'));
const Signal  = lazy(() => import('./pages/Signal'));



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
      <Routes>
        <Route path='/' element={<SidebarProvider><Layout/></SidebarProvider>}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses-all" element={<Courses /> } />
          <Route path="/courses/:slug" element={<Courses /> } />
          <Route path="/pricing" element={<Pricing />} >
              <Route index element={<Navigate to='services' replace />} />
              <Route path=":slug" element={<Suspense fallback={<SpinnerContaine />}> <PricingComponent /></Suspense>} />
          </Route>
          <Route path="/Signal" element={<Suspense fallback={<SpinnerContaine />}><Signal /></Suspense>} />

          <Route path="/formations" element={<Formations />} />
          <Route path="/formations/:slug" element={<FormationSigle />} />
            <Route path="*" element={<Suspense fallback={<SpinnerContaine />}> <Page404 /></Suspense>} />
        </Route>
        
        <Route path='/' element={<SidebarProvider><LayoutAuth/></SidebarProvider>}>
          <Route path="/users/signin" element={<Suspense fallback={<SpinnerContaine />}> <SignIn /></Suspense>} />
          <Route path="/users/signup" element={<Suspense fallback={<SpinnerContaine />}> <SignUp /></Suspense>} />
          <Route path="/users/reset-password" element={<Suspense fallback={<SpinnerContaine />}> <ResetPassword /></Suspense>} />
        </Route>   
      </Routes>
  );
}

export default App;
