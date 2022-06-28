import React, { useCallback } from 'react'
import { signInWithGithub } from '../../database'
import { GithubIcon } from '../../backend/icons'

/**
* @author
* @function BtnAuthGithub
**/

export const BtnAuthGithub = ({className}) => {

    const handlClick = useCallback( async () => {
        const res = await signInWithGithub()
        return res;
    }, [])

  return(
    <button 
        onClick={handlClick}
        type="button" 
        className={`${className} bg-white active:bg-gray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150`}>
            <GithubIcon className="w-5 mr-1"/> Github
    </button>
   )
  }
