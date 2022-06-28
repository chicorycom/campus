import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonContact } from '../components/ButtonContact';
import { Wrapper } from '../components/new/Wrapper';
import { WorksLang } from '../components/new/WorksLang';
import { HeroDevpos } from '../../backend/icons';

function HeroHome() {
  const { t } = useTranslation()
 
  return (
    <>
    <header className="relative pt-0 pb-24 md:pt-16 md:pb-44 items-center flex lg:max-h-860-px h-auto max-h-auto bg-gray-900">
      <div className='flex flex-col container mx-auto items-center' >
      <div className=" flex flex-wrap justify-between">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 pb-4">
          <div className="flex flex-col pt-16 md:pt-0 w-full">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
              <span className='text-gray-100'>{t('hero.title')}</span> 
              <span className='text-red-600'> { t('hero.mesure')}</span>  
            </h1>
            <p className="my-2 text-lg leading-relaxed text-gray-300"> {t('hero.content')} </p>
            
              <ButtonContact />
            
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4 ">
          <HeroDevpos />
        </div>
      </div>
      <WorksLang />
      </div>
      <Wrapper />
    </header>
    </>
  );
}

export default HeroHome;