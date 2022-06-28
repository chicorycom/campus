import { Button } from '@windmill/react-ui'
import React from 'react'
import { EditIcon, TrashIcon } from '../../icons'


export default function Item({ml, data, onDelete, edit}) {
  return (
    <ul className={ml && 'ml-6'}>
        <li>
            <div className='flex justify-between px-6 py-2  w-full rounded border border-gray-200 dark:text-gray-100 dark:border-gray-700'>
                <span>
                    {data.name}
                </span>
                <span className='flex gap-1'>
                    <Button icon={EditIcon} className="p-1" aria-label="Edit" onClick={() => edit(data)} />
                    <Button icon={TrashIcon} className="p-1 bg-red-700 hover:bg-red-800" aria-label="Trash" onClick={()=>onDelete(data)} />
                </span>
            </div>
            {
                data.sub && data.sub.map(sub => <Item data={sub} key={sub.id} ml onDelete={onDelete} edit={edit}/>)
            }
        </li>
    </ul>
  )
}
