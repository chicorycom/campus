import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChicorycomLogo, SearchIcon } from '../../backend/icons';
import { SwitchLang, Themes } from '../components/header';
import { NavContaine } from '../components/navigation';
import { SidebarContext } from '../context/SidebarContext';

function Header() {
  const { toggleSidebar, isSidebarOpen } = useContext(SidebarContext)
  
  

  return (
          <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 border-gray-50/[0.06] bg-gray-900 supports-backdrop-blur:bg-white/60">
              <div className="container max-w-8xl mx-auto">
                  <div className="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 dark:border-gray-300/10 mx-4 lg:mx-0">
                      <div className="relative flex items-center">
                        <Link className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" to="/">
                          <ChicorycomLogo className="transition ease-in-out delay-150 hover:scale-110 text-gray-200 hover:text-red-600 w-auto h-5"/>
                        </Link>
                        <SwitchLang/>
                        <div className="hidden lg:flex items-center ml-auto">
                          <nav className="leading-6 font-semibold text-gray-100">
                            <div className="flex space-x-8">
                              <NavContaine/>
                            </div>
                          </nav>
                          <Themes/>
                        </div>
                        <button type="button" className="ml-auto text-gray-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-gray-600 lg:hidden dark:text-gray-400 dark:hover:text-gray-300">
                            <span className="sr-only">Search</span>
                            <SearchIcon />
                        </button>
                        <div className="ml-2 -my-1 lg:hidden">
                          <button onClick={toggleSidebar} aria-expanded="true" aria-controls="sidebar" className="mr-2 text-gray-400 rounded cursor-pointer lg:hidden hover:text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700">
                            {!isSidebarOpen ? 
                              (<svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>)
                              : 
                              (<svg  className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>)
                            }
                          </button>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        );
}

export default Header;
