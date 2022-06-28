import { Button } from '@windmill/react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Waves } from '../components/Waves'
import { HeroChicorycom, MysqlIcon, PlayIcon } from '../../backend/icons'

/**
* @author
* @function DetailFormation
**/

export const FormationSigle = (props) => {

    const { t } = useTranslation()

  return(
    <>     
        <Waves height={"470px"} className="waves"/>
          <section className="header relative pt-7 pb-16 items-center  flex w-screen lg:h-860-px h-auto max-h-auto">
          <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-12/12 lg:w-8/12 xl:w-8/12 px-4">
          <div className="pt-32 sm:pt-0 ">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"><span className='text-gray-100 dark:text-gray-200'>Découverte d'API Platform</span></h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-200 dark:text-gray-100"> Découverte d'API Platform </p>
            <div className="mt-12">
              
            <button 
              className='align-bottom flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-10 py-4 rounded-lg text-sm text-white  border border-gray-100  focus:ring get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150' 
                
              >
            <PlayIcon className='h-4 mr-4' /> <span>Commencer</span>
          </button>
              
            </div>
          </div>
        </div>
        <div className='wave-header__image hidden lg:block lg:w-4/12 xl:w-4/12 px-4 text-white'>
          
              <MysqlIcon className='h-4/6 ' />
            
        </div>
      </div>
          </section>

          <section className="mt-10 md:mt-30 pb-40 relative bg-white dark:bg-gray-900 text-gay-800 dark:text-gray-100">
            <div className="container mx-auto">
                <div className="formation-single">
                    <div className="formation-chapters">
                      <h2 className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">Chapitres</h2>
                      <div className="chapters-split">
                        <div>
                          <h3 className="chapters__section">Découverte</h3>
                          <div className="chapters__list">
                            <Link to="/tutoriels/api-platform-intro-1902#autoplay" className="chapters__item" >
                              <PlayIcon className='h-6 mr-4' />
                              <span class="chapters__title">
                                Qu'est ce qu'API Platform
                              </span>
                              <span class="chapters__duration">5 min</span>
                            </Link>
                            <Link to="/tutoriels/api-platform-intro-1902#autoplay" 
                                className="chapters__item" 
                            >
                              <PlayIcon className='h-6 mr-4' />
                              <span class="chapters__title">
                                Qu'est ce qu'API Platform
                              </span>
                              <span className="chapters__duration">5 min</span>
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
    </>
   )
  }
