import React from 'react'
import { LaunchCareer } from '../../components/learning/LaunchCareer'
import { LearningTech } from '../../components/learning/LearningTech'

/**
* @author
* @function Learning
**/

export const Learning = (props) => {
  return(
    <section className='relative'>
        <LearningTech />
        <LaunchCareer />
    </section>
   )
  }
