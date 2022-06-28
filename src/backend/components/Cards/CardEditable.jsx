import React, { useCallback, useState } from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import { Input, Textarea } from '@windmill/react-ui'
import { EditIcon, SaveIcon, TrashIcon } from '../../icons';
import { put, destroy } from '../../../database'
import {destroyStore} from "../../../storage" 
import { Image } from '../Image'
import { useForm  } from "react-hook-form";
import * as Icons from '../../icons'
import { SpinnerContaine } from '../SpinnerContaine';
import { Spinner } from '../spinner';
import { styles } from '../../utils/helper'


function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}



/**
* @author
* @function CardEditable
**/

export const CardEditable = ({ value, action, docs, setDocs }) => {

  const { register, handleSubmit } = useForm()
  
  
  const [editable, setEditable] = useState(false)
  const [lang, setLang] = useState('fr')
  const [data, setData] = useState(value[lang])
  const [isloading, setIsLoading] = useState()


  const onSubmit = values => {
      const asArray = Object.entries(values);
      const filtered = asArray.filter(([key, value]) => key !== 'id');
      const justStrings = Object.fromEntries(filtered);
      const up = {id: values.id, [lang]: justStrings}
      put(action, up)
     
      setData(justStrings)
      setEditable(false)
  }

  const onValueChange = e => {
     setLang(e.target.value)
     setData(value[e.target.value])
  }

  

  const handlerTrash = useCallback( async () => {
    setIsLoading(true)
    await destroy(action, value)
    try{
      await destroyStore(value.image?.alt)
    }catch (error) {
      console.error(error);
    }
    const result = docs.filter(doc => doc.id !== value.id);
    setDocs(result)
    setIsLoading(false)

    return
  }, [docs])

  return(
    <Card className={styles.card}>
      {isloading && <SpinnerContaine/>}
      <div className='relative h-72 overflow-hidden'>
        {
          value.icon.length > 7 ? <Icon className={styles.cardHeader + styles.imageIcon} aria-hidden="true" icon={value.icon} /> :  <Image className={styles.cardHeader} image={value.image} />
        }
        <div className="absolute bottom-1 right-1 flex justify-center items-center h-8 w-8 bg-white overflow-hidden rounded p-2 cursor-pointer hover:bg-gray-500">
          <label htmlFor="up" className='w-full h-full cursor-pointer'>
            <Icon className="h-4" aria-hidden="true" icon="CloudUpload" />
            <input type="file" id='up' className=' h-full w-full opacity-0'/>
          </label>
        </div>
      </div>
    <form onSubmit={handleSubmit(onSubmit)} >
      <Input type='hidden' defaultValue={value.id} {...register("id", { required: true })}/>
      <CardBody className={styles.cardBody}>
        
        {editable ? 
          (<Input 
            className={styles.TitleInput} 
            autoFocus 
            defaultValue={data.title} 
            {...register("title", { required: true })} 
            />
          )
          : 
          (<div className={styles.TitleInput} >{data?.title}</div>)
        }
        {
          editable ?
          (
            <Textarea
              className={styles.Textarea}
              rows="5"
              defaultValue={data.content}
              {...register("content", {required: true})}
            />
          )
          :
          (
            <p className={styles.Cardcontent}>
              {data.content}
            </p>
          )
        }
      </CardBody>
      <div className={styles.cardFooter}>
        <div className='flex'>
      {!editable ?
          <span onClick={()=>setEditable(true)} className={styles.btn + styles.btnEdit}>
            <EditIcon className={styles.icon} aria-hidden="true" /> Edit
          </span>
          : 
          <button className={styles.btn + styles.btnSave}>
           {isloading ? <Spinner /> : <SaveIcon className={styles.icon} aria-hidden="true" />}  
            Save
          </button> 
        }
          <span className={styles.btn + styles.btnTrash} onClick={handlerTrash}>
            <TrashIcon className={styles.icon} aria-hidden="true" /> 
            Delete
          </span>
        </div>      
          <div className={styles.langContent}>
              <div className={styles.langContent + ' mr-4'}>
                <input 
                  id="fr" 
                  type="radio" 
                  name="lang" 
                  value="fr" 
                  className={styles.inputRadio}
                  onChange={onValueChange}
                  checked={lang === "fr"}
                 // {...register("lang")}
                />
                <label htmlFor="fr" className={styles.label}>
                  Fr
                </label>
              </div>
              <div className={styles.langContent}>
                <input 
                  id="en" 
                  type="radio" 
                  name="lang" 
                  value="en" 
                  className={styles.inputRadio}
                  onChange={onValueChange}
                  checked={lang === "en"}
                  //{...register("lang")}
                />
                <label htmlFor="en" className={styles.label}>
                  En
                </label>
              </div>
          </div>
      </div>
    </form>
  </Card>
   )
  }