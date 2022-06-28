import React from 'react'
import { Link } from 'react-router-dom'
import {  
    ReactIcon, 
    SvelteIcon
  } from '../../../backend/icons'

/**
* @author
* @function Technologies
**/

export const Technologies = () => {
    const tags = [
        'Design',
        'web site',
        'E-commerce',
        'E-learning ',
        'E-government'
    ]

    const front = [
        {
            title: 'Svelte',
            logo: ''
        }
    ]
  return(
    <div className="flex flex-wrap items-center pt-32">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                <div className="justify-center flex flex-wrap relative">
                  <div className="my-4 w-6/12 px-4">
                    <Link to="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index" >
                      <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                        <SvelteIcon className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"/>
                        <p className="text-lg text-white mt-4 font-semibold">Svelte</p>
                      </div>
                    </Link>
                    <Link to="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index" >
                      <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                        <ReactIcon className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white fill-cyan-400" />
                        <p className="text-lg text-white mt-4 font-semibold">ReactJS</p>
                      </div>
                    </Link>
                    <Link to="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index" >
                      <div className="bg-gray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img alt="..." src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg" className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">NextJS</p>
                      </div>
                    </Link>
                  </div>
                  <div className="my-4 w-6/12 px-4 lg:mt-16">
                    <Link to="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index" >
                      <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                        <img alt="..." src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png" className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">JavaScript</p>
                      </div>
                    </Link>
                    <Link to="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index" >
                      <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img alt="..." src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg" className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Angular</p>
                      </div>
                    </Link>
                    <Link to="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index" >
                      <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                        <img alt="..." src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg" className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" />
                        <p className="text-lg text-white mt-4 font-semibold">Vue.js</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-drafting-compass text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-gray-100"> Technologies Front-end </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-300"> Angular, ReactJS, VueJS... Nombreuses sont les technologies que vous pouvez utiliser pour le développement web.  Tout d’abord, souvenez-vous qu’il y a le développement back-end, qui est la partie non visible aux yeux de tous (client et utilisateur). Et il y a le développement front-end dont nous allons parler dans cet article qui est la conception de l’interface graphique utilisateur.</p>
                <div className="block pb-6">
                    {tags.map(tag => <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2"> {tag} </span>)}
                </div>
                <Link to="#"  className="font-bold text-gray-700 hover:text-gray-500 ease-linear transition-all duration-150"> 
                  View all <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </Link>
            </div>
          </div>
   )
  }
