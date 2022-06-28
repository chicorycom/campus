import React from 'react'
import componentProfileCard from '../../images/component-profile-card.png'
import componentInfoCard from '../../images/component-info-card.png'
import componentInfo2 from '../../images/component-info-2.png'
import componentMenu from '../../images/component-menu.png'
import componentBtn from '../../images/component-btn.png'

/**
* @author
* @function DescribWork
**/

export const DescribWork = () => {

    const tags = [
        'Design',
        'web site',
        'E-commerce',
        'E-learning ',
        'E-government'
    ]

    const apps = [
        {
            img: componentBtn,
            className: 'w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3'
        },
        {
            img: componentProfileCard,
            className: 'w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px'
        },
        {
            img: componentInfoCard,
            className: 'w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2'
        },
        {
            img: componentInfo2,
            className: 'w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px'
        },
        /*{
            img: componentMenu,
            className: 'w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px'
        },*/
        {
            img: componentBtn,
            className: 'w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px'
        }
    ]

  return(
    <div className="flex flex-wrap items-center">
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 ">
            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i className="fas fa-sitemap text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-gray-100">Rendez votre application sur mesure </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-300"> Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours. </p>
            <div className="block pb-6">
                {tags.map(tag => <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2"> {tag} </span>)}
            </div>
        </div>
        <div className="hidden w-full md:w-5/12 px-4 mr-auto ml-auto mt-32 lg:block">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                {apps.map(app => <img alt="..." src={app.img} className={app.className} />)}
            </div>
        </div>
    </div>
   )
  }
