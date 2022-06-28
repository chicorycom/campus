import { Button } from '@windmill/react-ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ForbiddenIcon } from '../icons'

function Page404() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center">
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
  )
}

export default Page404
