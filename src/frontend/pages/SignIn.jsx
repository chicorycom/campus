import React, {useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BtnAuthGoogle } from '../components/BtnAuthGoogle';
import { BtnAuthGithub } from '../components/BtnAuthGithub';
import { BtnAuthFacebook } from '../components/BtnAuthFacebook';
import { ChicoryCampsLogo } from '../components/ChicoryCampsLogo';

function validateEmail(elementValue){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue); 
} 

function SignIn() {

  const { t } = useTranslation()

  const [next, setNext] = useState(false)

  const usernameRef = useRef()

  const handlNext = e => {
      e.preventDefault()
      validateEmail(usernameRef.current.value) && setNext(true)
      //console.log(usernameRef.current.value)
  }

  return (
     <section className="relative w-full h-full overflow-hidden">
       <div className="container mx-auto px-4 h-full">
         <div className="flex flex-col space-y-7 content-center items-center justify-center h-full">
           <ChicoryCampsLogo />
           <div className="w-full lg:w-5/12 px-4">
             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white border-0">
               <div className="rounded-t mb-0 px-6 py-6">
               
                 <div className="text-center mb-3">
                   <h6 className="text-gray-900 text-3xl font-bold">{t('Welcome Back!')}</h6>
                 </div>
                 <div className="btn-wrapper text-center">
                    <BtnAuthGithub /> <BtnAuthGoogle/> <BtnAuthFacebook />
                 </div>
                 <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div className="relative w-full mb-3">
                  <label htmlfor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2">E-mail address </label>
                  <input id="email" 
                    type="email" 
                    placeholder="Email or Phone" 
                    ref={usernameRef}
                    className="border-2 px-3 py-3 border-gray-300 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>

                {
                  next ? (<>
                    <div className="relative w-full mb-3">
                      <label htmlfor="grid-password" className="block uppercase text-gray-600 text-xs font-bold mb-2"> Password </label>
                      <input id="grid-password" type="password" placeholder="Password" className="border-2 px-3 py-3 border-gray-300 px-3 py-3 placeholder-gray-300 text-gray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    </div>
                    <div className="text-center mt-6">
                        <button type="submit" className="bg-red-700 text-white active:bg-red-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"> Sign In </button>
                  </div></>
                  )
                  : 
                  (
                    <div className="text-center mt-6">
                      <button 
                        type='button'
                        onClick={handlNext}
                        className="bg-green-700 text-white active:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"> 
                        Next 
                      </button>
                    </div>
                  )
                }
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input id="customCheckLogin" type="checkbox" className="form-checkbox border-2 px-3 py-3 border-gray-300 text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 rounded" />
                    <span className="ml-2 text-sm font-semibold text-gray-600"> Remember me </span>
                  </label>
               </div>
                  
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/users/reset-password" className="text-gray-200">
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link className="text-gray-200" to="/users/signup">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;