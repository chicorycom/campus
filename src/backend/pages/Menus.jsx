import {useState} from 'react'
import Form from '../components/Form'
import ListsMenus from '../components/Menus/ListsMenus'
import PageTitle from '../components/Typography/PageTitle'
import { SpinnerContaine } from '../components/SpinnerContaine'
import { MenusProvider } from '../context/AdminMenusContext'


export default function Menus() {
  const [isloading, setIsloading] = useState(false)

  return (
    <MenusProvider>
     {
       isloading 
       ? 
          <SpinnerContaine /> 
       :
          (
            <>
              <PageTitle>Menus</PageTitle>
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                  <ListsMenus  />
                  <div className="relative">
                      <div className='sticky top-6 overflow-hidden bg-white rounded-lg shadow-xs dark:bg-gray-800 dark:text-gray-100'>
                          <Form  />
                      </div>
                  </div>
              </div>
            </>
          )
     }
    </MenusProvider>
  )
}
