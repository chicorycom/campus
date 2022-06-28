import React from 'react'
import { useDatas } from '../../../hooks/DatasContext'
import NavLink from '../learningMethodology/NavLink'

/**
* @author
* @function LearningMethodology
**/

export const LearningMethodology = () => {
    const { Datas: {learningMethodology: {title, description, navs}} } = useDatas() 
  return(
    <section className="relative h-auto pt-20 pb-20 lg:pt-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4 w-full lg:flex lg:items-center ">
            <div className="relative z-5 xl:max-w-xs z-10 max-w-xs">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="">{description}</p>
            </div>
            <nav className="learning__nav">
                {
                   navs.map(nav => (
                        <NavLink data={nav} />
                   )) 
                }
                <div className='svg__'></div>
                <svg viewBox="0 0 358 357"  className="svg__cercle-learning"><g fill="none" fill-rule="evenodd" stroke-width="7.44" transform="translate(3 3)"><ellipse cx="175.73" cy="175.42" rx="162.13" ry="161.59" stroke="#fff"></ellipse><path d="m164.57 0 13.82 13.82-13.82 13.82" stroke="#fff"></path><path d="m153.94 0 13.82 13.82-13.82 13.82" stroke="#05192d"></path><path d="m0 179.03 13.82-13.82 13.82 13.82" stroke="#fff"></path><path d="m0 189.66 13.82-13.82 13.82 13.82" stroke="#05192d"></path><path d="m352.1 167.12-13.81 13.82-13.82-13.82" stroke="#fff"></path><path d="M352.1 156.5 338.3 170.3l-13.82-13.82" stroke="#05192d"></path><path d="m178.4 350.83-13.83-13.82 13.82-13.82" stroke="#fff"></path><path d="m189.02 350.83-13.82-13.82 13.82-13.82" stroke="#05192d"></path></g></svg>
            </nav>
        </div>
        <div aria-hidden="true" className="hidden absolute left-0 right-0 -top-9 lg:justify-end lg:flex" style={{paddingRight: "50%"}}>
            <svg  viewBox="0 0 2024 554" aria-hidden="true" className="flex-shrink-0 mr-72" style={{height: "554px"}}><g fill="none"><path className="leonard_svg__p1" fill="#213147" d="M2024 35v519-65h-292.83v65H1500V35zM0 35h1500v519H0z"></path><path className="leonard_svg__p2" fill="#06BDFC" d="M2024 35V0h-294v35z"></path><path className="leonard_svg__p3" fill="#7933FF" d="M1730 35V0H0v35z"></path><path className="leonard_svg__p4" fill="#FF6EA9" d="M1730 70V35H0v35z"></path></g></svg>
        </div>
        <div aria-hidden="true" className="flex absolute top-0 right-0 left-0 overflow-hidden learnig__bg_top">
            <svg height="70" width="2000" aria-hidden="true" className="flex-shrink-0 ml-96"><g fill="none" fill-rule="evenodd"><path d="M2000 70V35H0v35z" fill="#06bdfc"></path><path d="M2000 35V0H0v35z" fill="#7933ff"></path></g></svg>
        </div>
    </section>
   )
  }
