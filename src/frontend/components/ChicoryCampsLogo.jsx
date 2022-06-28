import React from 'react'
import { ChicorycomLogoEmpty } from '../../backend/icons'

/**
* @author
* @function ChicoryCampsLogo
**/

export const ChicoryCampsLogo = ({color = 'text-white', size = 'h-10', tSize='text-5xl', space='2'}) => {
  return(
    <div className={`flex items-center font-bold text-center ${tSize} `}>
        <ChicorycomLogoEmpty className={`text-red-700 hover:text-red-600  w-auto ${size}`}/>
        <i className={`${color}  -ml-${space}`}>ampus</i> 
    </div>
   )
  }
