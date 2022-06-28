import { Button, Card, CardBody, Input, Select, Textarea } from '@windmill/react-ui'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { destroy, put } from '../../../database'
import { TrashIcon } from '../../icons'
import { styles } from '../../utils/helper'
import Icon from '../Icon'
import { SpinnerContaine } from '../SpinnerContaine'
import { Spinner } from '../spinner';
import { async } from '@firebase/util';

/**
* @author
* @function CardPricing
**/

export const CardPricing = ({ value, action, docs, setDocs, options }) => {
    
    const { register, handleSubmit } = useForm()
    const [ item, setItem ] = useState()
    const [top, setTop] = useState(value.top || false)
    
    const [editable, setEditable] = useState(false)
    const [isloading, setIsLoading] = useState()
    const [data, setData] = useState(value)

    const onSubmit = async values => {
        setIsLoading(true)
        values.top = top
        await put(action, values)
        setData(d => ({...values, items: d.items}))
        setEditable(false)
        setIsLoading(false)
    }

    const onValueChange = e => {
        setTop(e.target.checked)
     }

    const handlerTrash = useCallback( async () => {
        setIsLoading(true)
        await destroy(action, data)
        
        const result = docs.filter(doc => doc.id !== data.id);
        setDocs(result)
        setIsLoading(false)
    
        return
      }, [docs])

    

    const handlDeletItem = useCallback( async (id) => {
        setIsLoading(true)
        const newItems = data.items.filter(d => d.id !== id)
        const up = { ...data, items: [...newItems]}   
        await put(action, up)
        setData(up)
        setIsLoading(false)
    }, [item, data, setData])


    const handleAddItem = useCallback( async () => {
        if(item.length > 3){
            setIsLoading(true)
            const up = { ...data, items: [...data.items, {id: uuidv4(), name: item}] }        
            await put(action, up)
            setData(up)
            setItem('')
            setIsLoading(false)
        }

    }, [item, setData])


  const badeColor = data.type === 'formation' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800 '
  const borderTop = data.top ?  " border-t-8 border-green-400" : ""
  return(
    
    <Card className={styles.card + borderTop}>
      {isloading && <SpinnerContaine/>}
      <div className={styles.langContent + ' justify-between m-4'}>
              <div className={styles.langContent}>
                <input 
                  type="checkbox"
                  name="top" 
                  className={styles.inputRadio}
                  onChange={onValueChange}
                  checked={top === true}
                  //{...register("top")}
                />
                <label htmlFor="top" className={styles.label}>
                  Top
                </label>
              </div>
              <div className={`${badeColor} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
                {data.type}
              </div>
        </div>
    <form onSubmit={handleSubmit(onSubmit)} >
        
      <Input type='hidden' defaultValue={data.id} {...register("id", { required: true })}/>
      <CardBody className={styles.cardBody}>
        
        {editable ? 
          (
            <>
                <Input 
                    className={styles.TitleInput} 
                    autoFocus 
                    defaultValue={data.title} 
                    {...register("title", { required: true })} 
                />
                <Input 
                    className={styles.TitleInput} 
                     
                    defaultValue={data.descript} 
                    {...register("descript", { required: true })} 
                />
                <Input 
                    className={styles.TitleInput} 
                    defaultValue={data.price} 
                    {...register("price", { required: true })} 
                />
                
                <Select 
                    className="mt-1" 
                    defaultValue={data.type} 
                    {...register("type", {required: true})}
                    >
                    {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>

            </>
          )
          : 
          (<>
            <div className="mx-6">
                <h3 className=" text-2xl font-bold">{ data.title }</h3>
                <strong className="font-bold uppercase">{ data.descript }</strong>
              </div>

              <div className="flex h-20 mx-6">
                <strong className=" my-4 text-3xl">
                  {data.price}
                </strong>
              </div>
          </>)
        }
        <div className='black'>
            <ul className="mt-6">
                {
                    data.items && data.items.map((item) => (
                        <li className="flex items-start justify-between mt-2 text-sm text-gray-800 dark:text-white" key={item.id}>
                            <div className='flex items-center justify-center'>
                                <Icon className="h-4 mr-2" icon="DoneIcon" />
                                {
                                    item.name
                                }
                            </div>
                            <div className='flex '>
                                <button onClick={() => handlDeletItem(item.id)} className={"p-1 focus:outline-none text-white font-medium rounded text-sm" + styles.btnTrash}> <Icon className="h-4" aria-hidden="true" icon="TrashIcon"/> </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='flex justify-center items-center mt-4 space-x-2'>
            <Input onChange={e => setItem(e.target.value)} value={item}  className={styles.TitleInput} />
            <Button onClick={handleAddItem} > Ajout </Button>
        </div>
      </CardBody>
      <div className={styles.cardFooter}>
        <div className='flex'>
        {!editable ?
          <span onClick={()=>setEditable(true)} className={styles.btn + styles.btnEdit}>
            <Icon className={styles.icon} icon="EditIcon" /> Edit
          </span>
          : 
          <button className={styles.btn + styles.btnSave}>
            
           {isloading ? <Spinner /> : <Icon className={styles.icon} icon="SaveIcon" />}  
            Save
          </button> 
        }
          <span className={styles.btn + styles.btnTrash} onClick={handlerTrash}>
            <TrashIcon className={styles.icon} aria-hidden="true" /> 
            Delete
          </span>
        </div>      
        
      </div>
    </form>
  </Card>
   )
  }
