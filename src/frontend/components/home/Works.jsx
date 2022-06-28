import React from 'react'
import { Link } from 'react-router-dom'
import { Technologies } from './Technologies'
import { DescribWork } from './DescribWork'

/**
* @author
* @function Works
**/

export const Works = (props) => {
  return(
    <div className="container mx-auto overflow-hidden pb-20">
        <DescribWork />
        {/*<Technologies />*/}
    </div>
   )
  }
