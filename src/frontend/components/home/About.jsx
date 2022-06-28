import React, {useState, useEffect, Suspense } from 'react'
import homeJob from '../../images/home-job.png'
import { 
    ShuffleOutline,  
    Contract, 
    Designer, 
    CodeWorking 
  } from '../../../backend/icons';
import { useTranslation } from 'react-i18next';
import { useAll } from '../../../hooks/AllContext';

/**
* @author
* @function About
**/

export const About = () => {
    
    const { t, i18n } = useTranslation();
    const { docs } = useAll()
    //const [lefte, setLeft] = useState(()=> (docs.filter(doc => doc[i18n.language]?.position === 'left')).shift())

    
   /* useEffect(()=>{
        setLeft(()=> (docs.filter(doc => doc[i18n.language]?.position === 'left')).shift())
    }, [docs])*/
    const left = {
        title: 'Notre priorité est vous accompagner pour votre projet sur mesure !',
        content: 'about.content'
    }

    const features = [
        {
          title: 'analyse.title',
          describe: 'analyse.content',
          icon: ShuffleOutline
        },
        {
          title: t('Contrat sur mesure'),
          describe: t('contrat.body'),
          icon: Contract
        },
        {
          title: t('Personalized follow-up'),
          describe: t('Personalized.body'),
          icon: Designer
        },
        {
          title: t('A quality deliverable'),
          describe: 'quality.body',
          icon: CodeWorking
        }
    ]
    //console.log(lefte)
  return(
    <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 lg:px-12 md:px-4 mr-auto ml-auto -mt-32">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600">
                    <Suspense fallback='loading'>
                    <img alt="..." src={homeJob} className="w-full align-middle rounded-t-lg"/>
                    </Suspense>
                    <blockquote className="relative p-8 mb-4">
                        <svg preserveAspectRatio="none" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px"><polygon points="-30,95 583,95 583,65" className="text-red-600 fill-current"></polygon></svg>
                        <h4 className="text-xl font-bold text-white">{t(left.title)}</h4>
                        <p className="text-md font-light mt-2 text-white">{t(left.content)}</p>
                    </blockquote>
                </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                    {features.map(feature => (
                        <div className="relative flex flex-col mt-4 w-6/12">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <feature.icon />
                                </div>
                                <h6 className="text-xl mb-1 font-semibold text-gray-800 dark:text-gray-100">
                                    {t(feature.title)}
                                </h6>
                                <p className="mb-4 text-gray-600 dark:text-gray-400">
                                    {t(feature.describe)}
                                </p>
                            </div>
                        </div>
                        ) 
                    )}
                </div>
            </div>
        </div>
    </div>
   )
  }
