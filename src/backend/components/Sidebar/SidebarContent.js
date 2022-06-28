import React from 'react'
import routes from '../../routes/sidebar'
import { Link } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import Icon from '../Icon'
import { Linker } from './Linker'



function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link to="/admin" className="flex items-center ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" >
        <Icon icon='ChicorycomLogo'  className='w-5 h-5 mr-2' /> Chicorycom
      </Link>
      <ul className="mt-6">
        {routes.map(route => (
          route.routes ? 
            <SidebarSubmenu route={route} key={route.name} />
           : 
            <li className="relative px-6 py-3" key={route.name}>
              
              <Linker
                key={route.path}
                exact='true'
                to={route.path}
                className={`inline-flex items-center text-gray-800 dark:text-gray-100 w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </Linker>
            </li>
            )
          
        )}
      </ul>
      <div className="px-6 my-6">
        <Button className="bg-red-600 active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </div>
  )
}

export default SidebarContent
