import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeroChicorycom } from '../../backend/icons'
import { CardFormation } from '../components/formations/CardFormation'
import { Waves } from '../components/Waves'

/**
* @author
* @function Formations
**/

export default function Formations () {
  const { t } = useTranslation()
  
  return(
      <>
        <Waves height={"542px"} className="waves"/>
          <section className="relative pt-7 pb-16 items-center w-screen lg:max-h-860-px h-auto max-h-auto">
            <HeroChicorycom className=''/>
          </section>

          <section className="mt-10 md:mt-30 pb-40 relative bg-white dark:bg-gray-900 text-gay-800 dark:text-gray-100">
            <div className="container mx-auto">
                <div className="formations py-5">
                  <div class="course-hero">
                  <div className="pt-32 sm:pt-0 ">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"><span className='text-gray-800 dark:text-gray-200'>Toutes les</span> <span className='text-red-600'>formations</span></h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-100"> {t('hero.content')} </p>
            <div className="mt-12">

            </div>
          </div>
                  </div>
                  <CardFormation />
                  <CardFormation />
                  <CardFormation />
                  <CardFormation />
                  <CardFormation />
                </div>
            </div>
          </section>
      </>
    
   )
  }
