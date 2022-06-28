import React from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../assets/img/forgot-password-office.jpeg'
import ImageDark from '../assets/img/forgot-password-office-dark.jpeg'
import { Label, Input, Button } from '@windmill/react-ui'
import { Image } from '../components/Image'

function ForgotPassword() {

  function handleSubmit(){
    console.log('submit')
  }

  return (
    <div className="flex flex-col overflow-y-auto md:flex-row">
      <div className="h-32 md:h-auto md:w-1/2 laz-height">
        <Image aria-hidden="true" image={{src: ImageLight, alt: 'Office'}} className="object-cover w-full h-full dark:hidden" />
        <Image aria-hidden="true" image={{src: ImageDark, alt: 'Office'}} className="hidden object-cover w-full h-full dark:block" />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Forgot password
          </h1>

          <Label>
            <span>Email</span>
            <Input className="mt-1" placeholder="Jane Doe" />
          </Label>

          <Button  block className="mt-4 bg-red-600 active:bg-red-700 hover:bg-red-800 focus:outline-none focus:shadow-outline-red">
            Recover password
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
