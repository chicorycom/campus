import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useDatas } from '../../../hooks/DatasContext'
import { Icon } from '../Icon'
import { ProductHover } from '../new/ProductHover'

/**
* @author
* @function NavContaine
**/

export const NavContaine = () => {
  const { t } = useTranslation()
  const { Menus } = useDatas()


  return(
          <>
            {Menus.map(menu => 
              Array.isArray(menu.sub) && menu.sub.length > 0 ?
             (
              <div aria-expanded="false" aria-label="Learn Menu" className='group'>
                <Link className="flex justify-items-center px-4 py-1 rounded items-center hover:bg-gray-800 " to="/">
                  {menu.name} <Icon className="ml-2" aria-hidden="true" icon='DropdownIcon' />
                </Link>
                <ProductHover datas={menu.sub} />
            </div>
             ) :
             (
              <div>
                <Link className="flex justify-items-center items-center px-4 py-1 rounded hover:bg-gray-800" to={menu.slug}>
                   {menu.name}
                </Link>
            </div>
             )
            )}
            <div className="flex items-center fixed bottom-0 md:relative">
                <Link to="/users/signin" className="flex justify-items-center items-center text-white border border-gray-100 active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                    <Icon className="h-3 mr-2" aria-hidden="true" icon='UserIcon' /> {t('signin')}
                </Link>
                <Link  to="/users/signup" className="flex justify-items-center items-center text-white bg-red-600 active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                     {t('Get Started')}
                </Link>
            </div>
          </>
        )
  }
