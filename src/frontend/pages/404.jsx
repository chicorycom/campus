import { Button } from '@windmill/react-ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ForbiddenIcon } from '../../backend/icons'
import { Waves } from '../components/Waves'

function Page404() {
  const navigate = useNavigate()
  return (
    <>
      <Waves className="waves"/>
          <section className="header relative pt-16 items-center flex w-screen lg:h-screen lg:max-h-860-px h-auto max-h-auto">
          <div className="flex flex-col items-center justify-center w-full">
      <ForbiddenIcon className="w-12 h-12 mt-8 text-purple-200" aria-hidden="true" />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">404</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{' '}
        <Button 
          tag='a'
          className="text-red-600 hover:underline dark:text-red-300"
          onClick={() => navigate(-1)}>
            go back
        </Button>
        .
      </p>
    </div>
          </section>
    </>
   
  )
}

export default Page404
