import React from 'react'
import { About } from '../../components/features/About'
import { LearningExperience } from '../../components/features/LearningExperience'
import { LearningMethodology } from '../../components/features/LearningMethodology'
import { Learning } from './Learning'
import Signal from '../../components/features/Signal'
import Certification from '../../components/features/Certification'
//import bgHome from '../../images/bg-home.svg'

/**
* @author
* @function Features
**/

export const Features = () => {
  return(
    <div  className='home__features'>
        <About />
        <LearningMethodology />
        <LearningExperience />
        <Learning />
        <Signal />
        <Certification />
    </div>
   )
  }
