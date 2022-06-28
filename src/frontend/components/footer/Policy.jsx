import React from 'react'
import { useDatas } from '../../../hooks/DatasContext'
import { Icon } from '../Icon'

/**
* @author
* @function Policy
**/

export const Policy = () => {

    const { Datas: { policy: { items, socialNetwork, mobileApp } }} = useDatas()
  return(
    <div className='md:grid pt-0 md:pt-16 md:grid-cols-4 md:auto-rows-auto'>
        <div className="col-span-1  md:order-none flex justify-center md:justify-end">
            {
               socialNetwork.map(s => (
                <a href={s.link} key={s.link} rel="noreferrer" target="_blank" className="w-11 h-11 flex justify-center hover:text-red-500">
                    <Icon icon={s.icon} className="w-4 h-4" />
                </a>
               )) 
            }
       
    </div>
    <div className='flex col-span-1 order-last  justify-center mb-8 md:mb-0 md:justify-end gap-x-2'>
            {
                mobileApp.map(m => (
                    <a href={m.link} className="">
                        <Icon icon={m.icon}  />
                    </a>
                ))
            }
        </div>
    <div className="col-span-3 order-first  flex flex-wrap justify-start gap-x-5 text-sm font-normal place-items-start">
        {
            items.map(item => (
                <a href={item.link} className="text-gray-400 py-2 hover:text-gray-300">{item.name}</a>
            ))
        }
       
    </div>
    
    
    <p className="col-span-3  pt-6 text-xs text-gray-500">© 2022 Chicorycom, Inc. All Rights Reserved.</p>
        
    </div>
   )
  }
