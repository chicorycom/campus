import React, { createContext, useContext, useState} from 'react'
import useFirestore from './useFirestore';
import Datas from '../database/datas.json'
import Menus from '../database/front-menu.json'
import Technologies from '../database/technologies.json'

export const DatasContext = createContext(null);




/**
 * 
 * @param {children} param0 
 * @returns 
 */
 export function DatasProvider({ children }) {
   
    const [ docs, setDocs ] = useFirestore('about')
    const [isloading, setIsLoading] = useState(false)
    
      
      const value = { 
        docs, 
        setDocs,
        isloading,
        setIsLoading,
        Menus, 
        Technologies, 
        Datas
      }
      return <DatasContext.Provider value={value}>{children}</DatasContext.Provider>
  }

 /**
 * 
 * @returns useContext
 */
  export const useDatas = () => {
    return useContext(DatasContext);
}