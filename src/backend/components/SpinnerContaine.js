import React from 'react'

/**
* @author
* @function SpinnerContaine
**/

export const SpinnerContaine = (props) => {
  return(
    <div className="flex justify-center items-center absolute bottom-0 left-0 right-0 top-0 z-50 bg-white bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-50">
        <span className="text-gray-900 dark:text-white loader"></span>
    </div>
   )

 }