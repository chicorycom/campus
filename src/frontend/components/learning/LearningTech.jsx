import React from 'react'
import { Link } from 'react-router-dom'
import { useDatas } from '../../../hooks/DatasContext'
import { Icon } from '../Icon'

/**
* @author
* @function LearningTech
**/

export const LearningTech = () => {

  const { Technologies } = useDatas()

  return(
    <nav className=''>
            <div className="container mx-auto px-4 mt-52 w-full">
              <h2 id="learning-paths" className="text-white text-4xl font-bold">Des parcours d'apprentissage <span className="text-red-600 ">conçus par des experts</span></h2>
              <h3 className="text-white text-3xl font-bold mt-8">Apprendre une nouvelle technologie</h3>

              <div className="flex flex-wrap justify-center">
                {
                  Technologies.map(tech => (
                    <Link class="learning__lang relative flex justify-center items-center shadow-md m-4 bg-white rounded overflow-hidden h-28  text-gray-900 hover:text-white" to={tech.link}>
                      <Icon icon={tech.icon} className={tech.size && tech.size.big ? tech.size.big : 'h-10'} />
                    </Link>
                  ))
                }
              </div>
              <div className="flex justify-center lg:justify-end">
                  <Link to="/courses-all" class="flex items-center font-bold mt-2 text-xl text-gray-800  transition ease-in-out delay-400 hover:text-red-600">
                      Explorer toutes les technologies <svg viewBox="0 0 743 458" width="18" className="text-red-600 ml-2"><path d="m732.36 251.65-.4.36-234.34 205.43-39.55-45.12L633 258.97l-632.14.15-.02-60 631.33-.15L458.02 45.63 497.67.6 732 206.94a30 30 0 0 1 .36 44.7z" fill="currentColor"></path></svg>
                  </Link>
              </div>
            </div>
        </nav>
   )
  }
