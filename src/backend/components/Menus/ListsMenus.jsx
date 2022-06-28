import { useCallback, useEffect } from 'react'
import { Button, Card, CardBody } from '@windmill/react-ui'
import React, {useState} from 'react'
import { EditIcon, TrashIcon } from '../../icons'
import ListMenus from '../../../database/front-menu.json'
import Item from './Item'
import { destroy } from '../../../database'
import { menuIterable } from '../../utils/helper'
import { SpinnerContaine } from '../SpinnerContaine'
import { useMenus } from '../../context/AdminMenusContext'





export default function ListsMenus() {
    const {docs, action, setDocs, edit} = useMenus()
    const [isLoading, setIsLoading] = useState()
    const lists = menuIterable(docs)
   

    const handlerTrash = useCallback( async (value) => {
        setIsLoading(true)
        await destroy(action, value)
        //await new Promise(r => setTimeout(r, 2000));
        const result = await docs.filter(doc => doc.id !== value.id);
        
        setDocs(result);
        setIsLoading(false)
    
        return
      }, [docs])

     
  return (
            <Card className='relative'>
                {isLoading && <SpinnerContaine />}
            <div className="flex justify-between border-b-2 border-gray-100 p-3 mb-4 font-semibold text-gray-600 dark:text-gray-300 dark:border-gray-700">
                <div>
                    Title
                </div>
                <div>
                    <Button icon={EditIcon} className="p-1" aria-label="Edit" />
                </div>
            </div>
            <CardBody>
                {
                    lists.map(data => <Item data={data} key={data.id} onDelete={handlerTrash} edit={edit}/>)
                }
            </CardBody>
        </Card>
   
  )
}
