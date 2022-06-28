import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '../../../backend/components/Image'

export default function Certification() {
  return (
    <div className="bg-white text-gray-900 pb-14">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-16">
          <div className="pl-0 lg:pl-10 lg:w-1/2 max-w-lg text-center lg:text-left">
                <p className='mb-3 text-pink-400'>CERTIFICATION</p>
                <h1 className="text-4xl font-bold mb-7">
                  Décrochez l'emploi de vos rêves en science des données
                </h1>
              <p className="text-gray-900 text-lg font-normal mb-6" >D'une certification en science des données à des examens de CV personnalisés et à la préparation d'entretiens, nous avons ce qu'il vous faut. </p>
              
                <Link className="btn text-gray-800 px-4 hover:bg-gray-100  border-gray-900 border-2 focus:ring font-bold py-3" to="/business/demo">
                  Apprendre encore plus
                </Link>
          </div>
          
          <div className="pl-0 lg:pl-10 lg:w-1/2 text-center lg:text-left">
            <Image image={{ src: "https://res.cloudinary.com/dyd911kmh/f_auto,c_limit,w_640,q_auto/Marketing/Certification/certification_light.png"}} />
          </div>
      </div>
    </div>
  )
}
