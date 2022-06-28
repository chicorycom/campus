import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { Transition } from '@windmill/react-ui'
import { ChicoryCampsLogo } from './ChicoryCampsLogo'
import { Link } from 'react-router-dom'
import { UserIcon } from '../../backend/icons'
import { ButtonContact } from './ButtonContact'
import { useDatas } from '../../hooks/DatasContext'

/**
* @author
* @function MobileSideBare
**/

export const MobileSideBare = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  const { Menus } = useDatas()

  return(
    <Transition show={isSidebarOpen}>
      <>
         <Transition
          enter="transition ease-in-out duration-200"
          enterFrom="opacity-0 transform -translate-y-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform -translate-y-20"
        >
          <aside className="fixed inset-4 z-50 flex-none rounded-lg bg-white overflow-y-auto">
                    <nav id="nav" className="font-medium text-base ">
                        <div className='relative flex justify-between items-center px-4 py-2'>
                          <Link className='logo' to="/" onClick={closeSidebar}>
                            <ChicoryCampsLogo color='text-gray-700' size='h-7' tSize='text-3xl' space='1' />
                          </Link>
                          <button onClick={closeSidebar}>
                            <svg  class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div className="flex flex-col space-y-4 dark:text-gray-100 py-1 list-unstyled fw-normal small">
                          <div className='px-4 py-2'>
                            <Link to="/users/signin" class="flex justify-center items-center text-red-700 border border-red-700 active:bg-red-700 font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none">
                                <UserIcon className='h-3 mr-2' />signin
                            </Link>
                          </div>
                          <div className='flex flex-col text-gray-700'>
                            {Menus[0].sub.map(catalog =>
                                (
                                  <>
                                    <h1 className='w-full bg-gray-200 px-3 py-1 font-bold text-xl'>{catalog.name}</h1>
                                    {Array.isArray(catalog.tops) &&  catalog.tops.map(top => (
                                      <>
                                          {top.link ? (<Link className="pt-4 px-3 font-semibold" to={top.link} onClick={closeSidebar}>{top.name}</Link>) : (<div className="pt-4 px-3 font-semibold">{top.name}</div>)}
                                          {
                                            Array.isArray(top.topLearn) && top.topLearn.map(t => <Link className="pt-4 ml-3 px-3 font-normal hover:bg-gray-400" to={t.link} onClick={closeSidebar}>{t.name}</Link>) 
                                          }
                                      </>)
                                    )}
                                  </>
                                )
                              )
                            }
                          </div>
                          <div className='px-4 py-2'>
                            <ButtonContact />
                          </div>
                        </div>
                    </nav>
            </aside>
          </Transition>
            
          <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60" onClick={closeSidebar} ></div>
        </>
      </Transition>
   )
  }
