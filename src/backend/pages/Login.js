import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button, HelperText } from '@windmill/react-ui'

import { toast } from 'react-toastify'
import { useAuth } from '../context/ChicorycomContex';
import { Image } from '../components/Image';
import { SpinnerContaine } from '../components/SpinnerContaine';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isloadin, setIsloading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const auth = useAuth()

 
  let from = location.state?.from?.pathname || "/admin";

  const onSubmit = data => {
      setIsloading(true)
      auth.signin(data)
      .then(res=>{
        setIsloading(false)
       navigate(from, { replace: true });
      })
      .catch(error => {
        setIsloading(false)
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
        if(error.code === 'auth/too-many-requests'){
          toast.error('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."');
        }
        if(error.code === 'auth/internal-error'){
          toast.error('Please check the Email');
        }
      })
      
  }

  return (
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 laz-height">
            <Image aria-hidden="true" image={{src: ImageLight, alt: 'Office'}} className="object-cover w-full h-full dark:hidden" />
            <Image aria-hidden="true" image={{src: ImageDark, alt: 'Office'}} className="hidden object-cover w-full h-full dark:block" />
          </div>
          <main  className="relative flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            {isloadin && <SpinnerContaine/>}
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
              <Label>
                <span>Email</span>
                <Input className="mt-1" placeholder="john@doe.com" {...register("email", { required: true })} />
                {errors.email && (<HelperText valid={false}>This field is required</HelperText>)}
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type='password' placeholder="***************" {...register("password", { required: true })}/>
              </Label>

              <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-700 hover:bg-red-800 focus:outline-none focus:shadow-outline-red"
                  type='submit'
                  disabled={isloadin}
                >
                   Log in
    
                </button>
              </form>
              <hr className="my-8" />

              <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
                  to="/admin/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
          </main>
        </div>
      
  )
}

export default Login
