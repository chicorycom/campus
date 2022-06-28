import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BtnAuthFacebook } from '../BtnAuthFacebook'
import { BtnAuthGithub } from '../BtnAuthGithub'
import { BtnAuthGoogle } from '../BtnAuthGoogle'

/**
* @author
* @function RegisterForm
**/

export const RegisterForm = (props) => {
    
    const { t } = useTranslation()
  return(
    <div className="w-full lg:w-5/12 px-4 max-w-md">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white border-0">
      <div className="rounded-t mb-0 px-6 pt-6">
        <div className="text-center mb-3">
          <h2 className="text-gray-800 font-bold">{t('Create Your Free Account')}</h2>
        </div>
        <div className="btn-wrapper text-center">
           <BtnAuthGithub /> <BtnAuthGoogle/> <BtnAuthFacebook />
        </div>
        <div className="flex items-center ">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
   </div>
   <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
    {/* <div className="text-gray-400 text-center mb-3 font-bold">
       <small>{t('Ou connectez-vous avec vos identifiants')}</small>
     </div> */}
     <form>
       <div className="relative w-full mb-3">
         <label htmlfor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2"> Phone </label>
         <input id="email" type="email" placeholder="Email or Phone" 
           className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
       </div>
       <div className="relative w-full mb-3">
         <label htmlfor="grid-password" className="block uppercase text-gray-600 text-xs font-bold mb-2"> Password </label>
         <input id="grid-password" type="password" placeholder="Password" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
       </div>
         <div className="text-center mt-6">
               <button type="submit" className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"> Sign In </button>
         </div>
         <div className="text-sm text-gray-500 text-center mt-3">
            By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
        </div>
       </form>
     </div>
   </div>
 </div>
    )
  }
