import React, {useCallback} from 'react'
import { signInWithFacebook } from '../../database'
import { FacebookIcon } from '../../backend/icons'

/**
* @author
* @function BtnAuthFacebook
**/

export const BtnAuthFacebook = ({className}) => {

  const handlClick = useCallback( async ()=>{
    const res = await  signInWithFacebook()
    console.log(res)
  }, [])

  return(
    <button 
      onClick={handlClick}
      type="button" 
      className={`${className}  bg-white active:bg-gray-50 text-blue-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150`}>
            <FacebookIcon className="w-5 mr-1 "/> Facebook
    </button>
   )
  }
