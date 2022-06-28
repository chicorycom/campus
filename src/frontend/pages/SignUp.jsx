import React from 'react';
import { Link } from 'react-router-dom';
import { BtnAuthFacebook } from '../components/BtnAuthFacebook';
import { BtnAuthGithub } from '../components/BtnAuthGithub';
import { BtnAuthGoogle } from '../components/BtnAuthGoogle';
import { ChicoryCampsLogo } from '../components/ChicoryCampsLogo';


function SignUp() {
  return (
        <section className="relative w-full h-full pb-40 pt-44">
          <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col space-y-7 content-center items-center justify-center h-full">
            
            <ChicoryCampsLogo />
            
          <div className="w-full lg:w-5/12 px-4">
             <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white border-0">
            
             <div className="mb-0 px-6 py-6">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-3 ">
                <h1 className="h1 text-3xl font-bold">Create your free account to grow your data skills</h1>
              </div>

              {/* Form */}
              <div className="flex-auto">
                <form>
                  
                  <div className="relative w-full mb-3">
                      <label htmlfor="email" className="block text-gray-800 text-xs font-bold mb-2"> Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" placeholder="Email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button type="button" className="bg-red-700 text-white active:bg-red-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                          Sign up 
                        </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3 text-center">
                      <BtnAuthGithub /> <BtnAuthGoogle /> <BtnAuthFacebook />
                    </div>
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  Already using Simple? <Link to="/users/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>
            </div>
            </div>
          </div>
            </div>
          </div>
        </section>
  );
}

export default SignUp;