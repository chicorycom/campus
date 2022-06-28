import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@windmill/react-ui';
import { Waves } from '../components/Waves'
import { CardService } from '../components/services/CardService';
import { ButtonContact } from '../components/ButtonContact';

/**
* @author
* @function Services
**/

const Services = (props) => {
    
    const { t } = useTranslation()

    const items = [
      {
        image: 'https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png',
        en: {
          title: 'Item name goes here',
          content: 'Carried out by young dynamic and determined engineers, your projects will take shape until they reach their finalization. Passionate about their area of ​​expertise, it is with an innovative perspective that our project managers and consultants support you in your project.'
        },
        fr: {
          title: 'Item name goes here',
          content: 'Réalisés par de jeunes ingénieurs dynamiques et déterminés, vos projets prendront forme jusqu\'à arriver à leur finalisation. Passionnés par leur domaine d\'expertise, c\'est avec un regard innovant que nos chefs de projets et consultants vous accompagnent dans votre projet.',
        }
      },
      {
        image: 'https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png',
        en: {
          title: 'Item name goes here',
          content: 'Carried out by young dynamic and determined engineers, your projects will take shape until they reach their finalization. Passionate about their area of ​​expertise, it is with an innovative perspective that our project managers and consultants support you in your project.'
        },
        fr: {
          title: 'Item name goes here',
          content: 'Réalisés par de jeunes ingénieurs dynamiques et déterminés, vos projets prendront forme jusqu\'à arriver à leur finalisation. Passionnés par leur domaine d\'expertise, c\'est avec un regard innovant que nos chefs de projets et consultants vous accompagnent dans votre projet.',
        }
      },
      {
        image: 'https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png',
        en: {
          title: 'Item name goes here',
          content: 'Carried out by young dynamic and determined engineers, your projects will take shape until they reach their finalization. Passionate about their area of ​​expertise, it is with an innovative perspective that our project managers and consultants support you in your project.'
        },
        fr: {
          title: 'Item name goes here',
          content: 'Réalisés par de jeunes ingénieurs dynamiques et déterminés, vos projets prendront forme jusqu\'à arriver à leur finalisation. Passionnés par leur domaine d\'expertise, c\'est avec un regard innovant que nos chefs de projets et consultants vous accompagnent dans votre projet.',
        }
      },
      {
        image: 'https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png',
        en: {
          title: 'Item name goes here',
          content: 'Carried out by young dynamic and determined engineers, your projects will take shape until they reach their finalization. Passionate about their area of ​​expertise, it is with an innovative perspective that our project managers and consultants support you in your project.'
        },
        fr: {
          title: 'Item name goes here',
          content: 'Réalisés par de jeunes ingénieurs dynamiques et déterminés, vos projets prendront forme jusqu\'à arriver à leur finalisation. Passionnés par leur domaine d\'expertise, c\'est avec un regard innovant que nos chefs de projets et consultants vous accompagnent dans votre projet.',
        }
      }
    ]

  return(
    <>
    <Waves height={"500px"} className="waves"/>
    <section className="header__service relative pt-7 pb-16 items-center  flex w-screen max-h-auto">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-12/12 lg:w-8/12 xl:w-8/12 px-4">
          <div className="pt-32 sm:pt-0 ">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"><span className='text-gray-100 dark:text-gray-200'>{t('hero.title')}</span></h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-200 dark:text-gray-100"> {t('hero.content')} </p>
            <div className="mt-12">
              <ButtonContact />
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section className="mt-10 md:mt-30 pb-40 relative bg-white dark:bg-gray-900 text-gay-800 dark:text-gray-100">
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-4 py-4 lg:px-8 mx-4 lg:mx-0">
              {items.map(item => <CardService item={item} />)}
            </div>
        </div>
    </section>
    
    </>
   )
  }

  export default Services;
