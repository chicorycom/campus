import { useState } from 'react'
import {isMobile} from 'react-device-detect'

export default function SectionPricing({data}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleCollapse = () => {
        setIsOpen(() => !isOpen)
    }

  return (
        <article 
            className={
                `relative
                bg-white 
                lg:first:rounded-tl-lg 
                lg:first:rounded-bl-lg 
                lg:last:rounded-tr-lg 
                lg:last:rounded-br-lg
                lg:last:border-l
                lg:last:border-l-gray-100
                py-6 lg:pt-7
                rounded-lg
                lg:rounded-none
                lg:pb-8 
                md:w-[calc(50%-8px)]
                mb-2
                lg:w-1/4 ${data.top ? 'lg:shadow-2xl z-3 lg:-mt-4 lg:rounded-t-xl border-t-8 border-red-600': ''}
            `}>
              {
                data.top && <strong className="absolute bg-red-600 text-white px-2 py-1 -top-6 left-6 rounded">Le plus populaire</strong>
              }
          
          <div className="mx-6">
            <h3 className=" text-2xl font-bold">{ data.name }</h3>
            <strong className="font-bold uppercase">For Individuals</strong>
          </div>

          <div className="flex h-20 mx-6">
            <strong className=" my-4 text-3xl">
              Free
            </strong>
          </div>

          <div className="mx-6">
            <button className={ data.top ? 'btn w-full justify-center items-center px-4 bg-red-600 font-bold py-3 text-white' : 'btn w-full justify-center items-center px-4 hover:bg-gray-300 border-2 border-gray-900 focus:ring font-bold py-3 '}>
              <span className="css-1sfgo9">Get Started</span>
            </button>
              
            <button className="btn lg:hidden w-full mt-2 justify-center items-center bg-gray-200 px-4 hover:bg-gray-100 focus:ring font-bold py-3" type="button" onClick={handleCollapse}>
              <span className="css-l4r8xm">See Details</span>
              <svg className=' ml-2 rotate-45' viewBox="0 0 18 18" aria-hidden="true" height="18" role="img" width="18"><path d="M9.005 7.625l4.83-4.83a.976.976 0 011.38 1.38l-4.83 4.83 4.82 4.82a.976.976 0 11-1.38 1.38l-4.82-4.82-4.83 4.83a.976.976 0 01-1.38-1.38l4.83-4.83-4.84-4.84a.976.976 0 111.38-1.38l4.84 4.84z" fill-rule="evenodd"></path></svg>
            </button>


              <div className={isOpen && isMobile ? 'black': 'hidden lg:block' }>
                <ul className="mt-6">
                    {
                        data.items && data.items.map(item => (
                            <li className="flex items-start mt-2 text-sm text-gray-800">
                                <svg viewBox="0 0 18 18" aria-hidden="false" className="mr-2" height="18" role="img" width="18">
                                <path fill="currentColor" d="M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z" fill-rule="evenodd"></path></svg>
                                    {
                                        item.name
                                    }
                            </li>
                        ))
                    }
                  
                </ul>
              </div>
            </div>
        </article>     
  )
}
