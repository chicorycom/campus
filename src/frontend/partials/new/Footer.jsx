import React from 'react'
import { Link } from 'react-router-dom'
import { useDatas } from '../../../hooks/DatasContext'
import { Policy } from '../../components/footer/Policy'

/**
* @author
* @function Footer
**/

export const Footer = () => {

    
    const { Datas: { footer } } = useDatas()

  return(
    <footer className='text-white bg-gray-900'>

        <div className='relative container mx-auto pt-16 pb-4 w-full lg:pb-12'>
            <div className='flex flex-col mb-12 lg:mb-0 px-4'>
                <div className="flex flex-wrap gap-3 ">
                    {
                        footer.map(menu => (
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-40 flex flex-col space-y-5">
                                <strong className="py-2.5 uppercase">{menu.title}</strong>
                                {
                                    menu.items && menu.items.map(item => (
                                        <Link to={item.link} >{item.title}</Link>
                                    )) 
                                }
                            </div>
                        ))
                    }
                </div>
                
                <Policy />

            </div>
        </div>

    </footer>
   )
  }
