import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './frontend';
import { DatasProvider } from './hooks/DatasContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { SpinnerContaine } from './backend/components/SpinnerContaine';

const Admin = lazy(() => import('./backend'));


const container = document.getElementById('root')
//document.body.insertBefore(container, document.body.firstChild)

const root = createRoot(container);

root.render(
  <React.StrictMode>
  <DatasProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        
        
        <Route path='/admin/*' element={<Suspense fallback={<SpinnerContaine/>}><Admin/></Suspense>} />
      </Routes>
    </BrowserRouter>
</DatasProvider>
</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
