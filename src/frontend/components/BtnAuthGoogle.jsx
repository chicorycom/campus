import React, {useCallback} from 'react'
import { signInWithGoogle } from '../../database'
import { GoogleColor } from '../../backend/icons'

/**
* @author
* @function BtnLoginSocial
**/

export const BtnAuthGoogle = () => {

  const handlClick = useCallback(async () => {
    const res = await signInWithGoogle()
  }, [])

  return(
        <button 
          onClick={handlClick}
          type="button" 
          className="bg-white active:bg-gray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">
            <GoogleColor className="w-5 mr-1" />  Google
        </button>
   )
  }
