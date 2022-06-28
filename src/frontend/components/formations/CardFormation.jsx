import React from 'react'
import { Link } from 'react-router-dom'
import { MysqlIcon } from '../../../backend/icons'

/**
* @author
* @function CardFormation
**/

export const CardFormation = () => {
  return(
    <article className="card card--stacked c-card bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-500 hover:scale-125 hover:z-10 rounded-lg overflow-hidden">
        <Link to="/formations/1" className="relative overflow-hidden p-4">
          <div className="card__icons">
              <MysqlIcon className='h-10 w-10 ' />
        </div>
        <div className="my-3 ">
              <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
              
              <h2 className="mt-2 mb-2 text-gray-800 dark:text-gray-100 font-bold">Purus Ullamcorper Inceptos Nibh</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <div className="mt-3 flex items-center ">
                <span className="text-sm font-semibold"></span>&nbsp;<span className="font-bold text-xl">35.000 </span>&nbsp;<span className="text-sm font-semibold">xof</span>
              </div>
        </div>
            
            <div className="flex justify-between items-center border-t py-2 border-gray-100 dark:border-gray-700 text-gray-400  dark:text-gray-600 text-sm">
              <span className="ml-2">2 chapitres</span>
              <span className="ml-2"> 12h </span>
            </div>
      </Link>
  </article>
   )
  }
