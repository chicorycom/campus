import React, {useState,useEffect, useCallback} from 'react'
import { MoonIcon, SunIcon } from '../../../backend/icons'



/**
* @author
* @function Themes
**/

export const Themes = () => {
  const [mode, setMode] = useState(null)

  const toggleMode = useCallback(() => {
    if (mode === 'light') {
      document.documentElement.className = ''
      document.documentElement.classList.add('dark')
      setMode('dark')
    } else {
      document.documentElement.className = ''
      document.documentElement.classList.add('light')
      setMode('light')
    }
  }, [mode])

  useEffect(() => {
    const userPreference =
      !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    setMode(
      // use stored theme; fallback to user preference
      window.localStorage.getItem('theme') || (userPreference ? 'dark' : 'light')
    )
  }, [])

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode)
      document.documentElement.classList.add(mode)
    }
  }, [mode])

  return(
    <div className="flex items-center border-l ml-6 pl-6 border-gray-800">
          
            <button 
              className="ml-6 block text-gray-100 hover:text-gray-300"
              type="button"  
              onClick={toggleMode}
            >
             {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
            {/* <a href="https://github.com/tailwindlabs/tailwindcss" className="ml-6 block text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">Tailwind CSS on GitHub</span>
              <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a> 
            */}
          </div>
   )
  }
