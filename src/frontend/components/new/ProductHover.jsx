import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icon'

/**
* @author
* @function ProductHover
**/

export const ProductHover = ({datas}) => {
  let big = "";
  for(const dat of datas){
     big = Array.isArray(dat.sub) && dat.sub.length > 2 ? "left-0 w-full" : "left-[calc(50%-242px)]";
     break
  }
  return(
    <div className={`absolute top-8 ${big} invisible shadow-md shadow-gray-50 opacity-0 text-gray-700 pt-1 group-hover:visible group-hover:opacity-100 rounded transition duration-700 ease-in-out`}>
      <div className="bg-white rounded box-border m-0 min-w-0 overflow-hidden">
        {
          datas.map(data => (
            <div className="flex border-b border-gray-200">
                <div className="flex flex-col bg-gray-100 p-6" style={{maxWidth: "220px"}}>
                  {
                    data.slug ? 
                    (
                      <Link className="text-xl font-bold hover__svg" to="/courses-all" tabindex="0">
                        <div className='flex justify-between items-center'>
                          <span>{data.name}</span>  <Icon className="opacity-0 text-red-700 ease-in-out duration-300 " aria-hidden="true" icon='Direction' />
                        </div>
                        <p className="text-sm mt-2 font-normal">{data.description}</p>
                      </Link>
                    ) :
                    (
                      <div className="text-xl font-bold" tabindex="0">
                        {data.name}
                        <p className="text-sm mt-2 font-normal">{data.description}</p>
                      </div>  
                    )
                  }
                    
                    <div className="flex pt-4">
                        {
                          data.languages && data.languages.map(lang => <Icon className="flex h-5 text-xs items-center justify-center pr-2" aria-hidden="true" icon={lang} />)
                        }
                    </div>
                </div>
                {
                    Array.isArray(data.sub) && data.sub.length > 0 &&
                    data.sub.map(top => (
                      <div className="flex flex-col p-6">
                          <div className="flex flex-col justify-normal w-full text-gray-800 text-sm mt-2 font-normal">
                            <h4 className="whitespace-nowrap pb-2 uppercase text-gray-500 font-bold">{top.name}</h4>
                              {
                                  top.sub && top.sub.map(learn => (
                                    <Link className="whitespace-nowrap py-2" to={learn.slug} tabindex="0">
                                      {learn.name}
                                    </Link>
                                  ))
                              }
                             {top.all && top.slug && (<Link to={top.slug} className="pt-4 text-sm font-bold">{top.all}</Link>)}
                          </div>
                    </div>
                  ))
              }
          </div>
          ))
        }
    </div>
  </div>
   )
  }
