import React from 'react'
import { useDatas } from '../../../hooks/DatasContext'
import { ButtonContact } from '../ButtonContact'


/**
* @author
* @function About
**/

export const About = () => {

    const { Datas: {aboutHome} } = useDatas()

  return(
    <section className="relative flex flex-col justify-center items-center  px-4 py-20 lg:py-28 bg-purple-dark text-center text-white">
        <h2 className="text-5xl font-bold">{aboutHome.title}</h2>
        <p className="py-4 text-2xl max-w-lg">{aboutHome.description}</p>
        
        <ButtonContact />
        <div aria-hidden="true" className="about__home flex absolute left-0 right-0 justify-end overflow-hidden">
            <svg height="65" width="1998" className="flex-shrink-0 about__svg-bottom">
                <g fill="none">
                    <path d="M1998 65V31h-248v34z" fill="#05192d" class="lenox_svg__path-1"></path>
                    <path d="M1998 31V0h-248v31z" fill="#7933ff" class="lenox_svg__path-2"></path>
                    <path d="M1750 31V0H0v31z" fill="#06bdfc" class="lenox_svg__path-3"></path>
                </g>
            </svg>
        </div>
    </section>
   )
  }
