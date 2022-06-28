import { lazy } from 'react'
import {default as r} from './sidebar'
// use lazy for better code splitting, a.k.a. load faster

const camalize = function camalize(str) {
  const text = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  return text.charAt(0).toUpperCase() + text.slice(1);
}


 let routes  = [{path: '', component: lazy(() => import(`../pages/Dashboard`))}]
 r.forEach(route => {
  if(route.routes)
      route.routes.forEach(r =>  routes.push({path: r.path, component: lazy(() => import(`../pages/${camalize(r.name)}`).catch(() => import('../pages/404')))}))
  else 
    routes.push({path: route.path, component: lazy(() => import(`../pages/${camalize(route.name)}`).catch(() => import('../pages/404')))})
})

export default routes
