import React, { useCallback, useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { CloseIcon, FolderOpenIcon, SaveIcon } from '../../icons';
import { Image } from '../Image'
import { SpinnerContaine } from '../SpinnerContaine'
import {isMobile} from 'react-device-detect'
import slugify from 'react-slugify'
import Select from 'react-select';
import { 
  Button, 
  Input, 
  Label, 
  Textarea
} from '@windmill/react-ui';
import { Spinner } from '../spinner';
import { useMenus } from '../../context/AdminMenusContext';


const styles = {
    contentFileImg: 'max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl', 
    mdflex: 'md:flex',
    wfull: 'w-full p-3',
    containerInputFile: "relative border-dotted h-48 rounded-lg border-dashed border-2 border-gray-500 bg-gray-100 dark:bg-gray-700 flex justify-center items-center",
    absolute: 'absolute',
    contentFileIcon: 'flex flex-col items-center text-blue-700 dark:text-blue-300',
    img: 'object-cover w-28 w-full h-full rounded',
    span: 'block text-gray-400 font-normal',
    inputFile: 'h-full w-full opacity-0',
    btn: 'flex flex-col items-center',
    langContent: 'flex items-center',
    label: 'block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300',
    inputRadio: 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600',
  }
  

/**
* @author
* @function FormMenu
**/

export default function FormMenu (props) {
    const { register, handleSubmit, reset } = useForm()
    const [isloading, setLoading] = useState(false)
    const {action, options, setDocs, data, docs, technologie} = useMenus()


    const onSubmit = useCallback( async values => {
        //e.preventDefault()
        setLoading(true)
        //const form = e.target
        //const d = new FormData(form)
        //console.log(Object.fromEntries(d.entries()))
        // const values = Object.fromEntries(d.entries())
        values.slug = values.slug === '' ? slugify(values.name) : slugify(values.slug)
  
        if(data.id){
          const up = {id: data.id, ...values}
          
         // put(action, up)
          setDocs(old => old.map(ol => ol.id === up.id ? up : ol))
        }else {
          //const docRef = await add(action, values) //addDoc(collection(db, action), data);
          //values.id = docRef
          setDocs(old =>([...old, values]))
        }
        
        reset()

        setLoading(false)
      
    }, [reset])
   // console.log(data.tags && data.tags.map(tag => ({label: tag, value: tag})))
  return(
    <div className='relative'>
        {isloading && <SpinnerContaine />}
        <form className='p-4' onSubmit={handleSubmit(onSubmit)} >
            <Label  className="mb-4 capitalize">
                <span>Name</span>
                <Input className="mt-1" 
                    type="text" 
                    defaultValue={data.name} 
                    placeholder="title" 
                    {...register("title")}
                    required={true} 
                />
            </Label>
            <Label  className="mb-4 capitalize">
                <span>Slug</span>
                <Input className="mt-1" 
                    type="text" 
                    defaultValue={data.slug} 
                    placeholder="slug-slug" 
                    {...register("slug")}
                    required={true} 
                />
            </Label>
            <Label  className="mb-4 capitalize">
                <span>Icon</span>
                <Input className="mt-1" 
                    type="text" 
                    defaultValue={data.icon} 
                    placeholder="icon...." 
                    {...register("icon")}
                />
            </Label>

            <Label>
                <span>Categories</span>
                {
                    data.name ?
                    <Select 
                    className="mt-1" 
                    defaultValue={{label: data.name, values: data.category_id}}
                    {...register("category_id")}
                    required={true}
                    options={options}
                />
                :
                <Select 
                    className="mt-1"                     
                    {...register("category_id")}
                    required={true}
                    options={options}
                />

                }
                
            </Label>
            <Label>
                <span>Tags</span>
                {
                    data.tags ? 
                    <>
                    {
                        console.log('tag')
                    }
                         <Select 
                    className="mt-1" 
                    value={data.tags.map(tag => ({label: tag, value: tag}))}
                    isMulti 
                    {...register("tags")}
                    required={true}
                    options={technologie}
                />
                    </>
                    :
                <Select 
                    className="mt-1" 
                    isMulti 
                    {...register("tags")}
                    required={true}
                    options={technologie}
                />
                }
                
            </Label>
            <Label>
                <span>Content</span>
                <Textarea
                    className="mt-1"
                    defaultValue={data.content}
                    rows="5"
                    {...register("content")}
                />
            </Label>

            <div className='flex justify-between mt-5'>
                <div className="hidden sm:block">
                    <Button layout="outline" className={styles.btn} onClick={reset}>
                        <CloseIcon className='w-5 h-5' /> Cancel
                    </Button>
                </div>
                <div className="hidden sm:block">
                    <Button type='submit' className={styles.btn} disabled={isloading}>
                    {isloading ? <Spinner /> : <SaveIcon className='w-5 h-5' />}  Save
                    </Button>
                </div>
            </div>
        </form>
    </div>
   )
  }
