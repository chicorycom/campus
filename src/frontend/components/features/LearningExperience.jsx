import React from 'react'

import { useDatas } from '../../../hooks/DatasContext'
import { Image } from '../../../backend/components/Image'

/**
* @author
* @function LearningExperience
**/

export const LearningExperience = () => {
    const { Datas: {learningExperience: {title, description, items}} } = useDatas()
  return(
    <section className="relative bg-gray-900 lg:bg-transparent pt-12 lg:pt-24">
        <div className="container mx-auto">
            <h2 className="text-white text-5xl font-bold text-center px-4">
                <span className="text-red-600">{title} </span> 
                {description}
            </h2>
            {
                items.map(item => (
                    <figure className="flex flex-wrap mt-20 lg:mt-36 items-center justify-between px-4">
                        <figcaption className={item.order ? 'pl-0 lg:pl-10 lg:w-1/2 text-center lg:text-left lg:order-1' : 'pl-0 lg:pl-10 lg:w-1/2 text-center lg:text-left'}>
                            <p className="text-2xl lg:text-3xl text-white font-bold">
                                {item.title}
                            </p>
                        </figcaption>
                        <div className="pr-0 mt-4 lg:pr-10 lg:w-1/2">
                            <Image  image={{src: item.image}}/>
                        </div>
                    </figure>
                ))
            }
            

            {/*<figure className="flex flex-wrap mt-20 lg:mt-36 items-center justify-between px-4">
                <figcaption className="pl-0 lg:pl-10 lg:w-1/2 text-center lg:text-left lg:order-1">
                    <p className="text-2xl lg:text-3xl text-white font-bold max-w-xs">
                        <span>Learn from the </span>
                        <span className="text-red-600"> best instructors</span
                    ></p>
                </figcaption>
                <div className="pr-0 mt-4 lg:pr-10 lg:w-1/2">
                        
                    <img alt="Screenshot of Campus exercise" src={Instructors}   />
                </div>
            </figure> */}
        </div>
    </section>
   )
  }
