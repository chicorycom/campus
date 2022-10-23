import React, { createContext, useContext, useState, useEffect, useMemo} from 'react'
import useFirestore from '../../hooks/useFirestore'
import  technologies from '../../database/technologies.json'




// create context
export const MenusContext = createContext()



export const MenusProvider = ({ children }) => {
   const action = 'menus'
   const [filds, setFilds] = useState([])
   const [docs, setDocs] = useFirestore(action)
   const [data, setData] = useState({})
   const edit = (data) => {
        setData(data)
   }
  
   useEffect(() => {
    const options = docs.map(r => ({value: r.id, label: r.name, selected: data.category_id === r.id}))
    const technologie = technologies.map((tech, index) => ({value: tech.icon, label: tech.icon, selected: data.tags && data.tags[index] === tech.icon}))
    
    const newElement =  [
        {
          label: 'title',
          input: {type: 'text',name: 'name',  placeholder: "Jane Doe", required: true}
        },
        {
          label: 'Slug',
          input: {type: 'text',name: 'slug', placeholder: "jane-doe", required: false}
        },
        {
          label: 'Icon',
          input: {type: 'text', name: 'icon',  placeholder: "icon....", required: false}
        },
      {
          label: 'Categories',
          input: {type: 'select', name: 'category_id', options, required: false}
      },
      {
        label: 'tags',
        input: {type: 'select', name: 'tags', default: '', options: technologie, required: false, multiple: true}
      },
      {
          label: 'Content',
          input: {type: 'textarea', name: 'content', required: false}
      }
    ]
    setFilds(newElement);
   

  return () => ({
    options,
    technologie,
    newElement,
    data,
  })
}, [docs, setDocs, data])

  
    const value = useMemo(
        () => ({
            filds,
            data,
            docs,
            setDocs,
            action,
            edit
        }),
        [docs, setDocs, data, action, filds]
    )
  
    return <MenusContext.Provider value={value}>{children}</MenusContext.Provider>
  }



export const useMenus = () => {
    return useContext(MenusContext);
}