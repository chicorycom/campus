import { Button } from '@windmill/react-ui';
import React from 'react'
import { useTranslation } from 'react-i18next';

/**
* @author
* @function CardService
**/

export const CardService = ({item}) => {
    const { i18n: { language } } = useTranslation()

  return(
    <div className="bg-white dark:bg-gray-800 max-w-sm rounded-sm overflow-hidden shadow-lg">
        <div className="h-64 bg-cover hover:bg-gray" style={{backgroundImage: `url('${item.image}')`}}></div>
        <div className="mx-6 my-4 border-b border-gray-light">
            <div className="font-bold text-base  mb-4">{item[language]?.title}</div>
            <p className="font-normal text-sm mb-2">
                {item[language]?.content}
            </p>
        </div>
            <div className="mx-6 my-4 flex">
                <div className="flex-grow">
                <Button className="bg-red-600 hover:bg-red-700 active:bg-red-700 text-xs font-bold p-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                    S'inscrire
                </Button>
             
                </div>
                <div className="flex text-right">
                
                <a href="#" className="no-underline">
                    <svg className="mx-2" fill="gray-dark" width="28" height="28" viewBox="0 0 24 24"> 
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                    </svg>
                </a>
                <a href="#" className="no-underline">
                    <svg className="mx-2 cur" fill="gray-dark" width="28" height="28" viewBox="0 0 24 24"> 
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                    </svg>
                </a>
                <a href="#" className="no-underline">
                    <svg className="ml-2" fill="gray-dark" width="28" height="28" viewBox="0 0 24 24"> 
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                    </svg>
                </a>
                </div>
            </div>
        </div>
   )
  }
