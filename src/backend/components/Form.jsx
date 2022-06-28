import React, { useCallback, useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { CloseIcon, FolderOpenIcon, SaveIcon } from '../icons';
import { Image } from './Image'
import { SpinnerContaine } from './SpinnerContaine'
import { upload } from '../../storage'
import { add, put } from '../../database'
import {isMobile} from 'react-device-detect'
import slugify from 'react-slugify'
//import Select from 'react-select';
import { 
  Button, 
  Input, 
 // HelperText, 
  Label, 
  Select, 
  Textarea
} from '@windmill/react-ui';
import { Spinner } from './spinner';
import { useMenus } from '../context/AdminMenusContext';

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

export default function Form() {
  const { register, handleSubmit, reset } = useForm()
  const {action, filds, setDocs, data, docs} = useMenus()
  const [file, setFile] = useState(null);
  const [isloading, setLoading] = useState(false)
  const options = docs.map(r => ({value: r.id, label: r.name, selected: 'A7wzMBVnSki4UupD4tbp' === r.id || r.id === 'fa7LIbQFmL5fKTFUBpyI'}))
    


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
      
      //
      
      reset()
      //setFile(false)
      setLoading(false)
    
  }, [action, data, setDocs, reset])


  const onFileChange = useCallback(event => {
          const fileReader = new window.FileReader();
          const file = event.target.files[0];
          
          fileReader.onload = fileLoad => {
              const { result } = fileLoad.target;
              setFile(result);
          };
          
          fileReader.readAsDataURL(file);
  }, []);


  useEffect(() => {
    
    return () => data
  }, [data])

  return (
    <div className='relative'>
        {isloading && <SpinnerContaine />}
        <form className='p-4' onSubmit={handleSubmit(onSubmit)} >
                  {filds && filds.map(fild => {
                    
                    return(  
                          fild.input.type === 'file' ?
                            <div className={styles.contentFileImg} key={fild.input.name}>
                                <div className={styles.mdflex}>
                                    <div className={styles.wfull}>
                                        <div className={styles.containerInputFile}>
                                            <div className={styles.absolute}>
                                                <div className={styles.contentFileIcon}> 
                                                  {file ? <Image image={{src: file}} className={styles.img} /> : <FolderOpenIcon /> } 
                                                  <span className={styles.span}>Attach you files here</span> 
                                                </div>
                                            </div> <input type="file" className={styles.inputFile} name={fild.input.name} onChange={onFileChange} key={fild.label} />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                          : 
                          <Label key={fild.label} className="mb-4 capitalize">
                              <span>{fild.label}</span>
                              {
                               
                                fild.input.type === 'textarea' ?
                                  <Textarea
                                      key={fild.label}
                                      className="mt-1"
                                      defaultValue={data[fild.input.name]}
                                      rows="5"
                                      //name={fild.input.name}
                                      {...register(fild.input.name)}
                                      required={fild.input?.required} 
                                  />
                                : fild.input.type === 'select'
                                ? <Select 
                                    key={fild.label}
                                    className="mt-1" 
                                    defaultValue={data[fild.input.name] || fild.input?.multiple ? [] : ''}
                                    multiple 
                                    //name={fild.input.name}
                                    {...register(fild.input.name)}
                                    required={fild.input?.required}
                                    //options={fild.input.options}
                                 >
                                   <option></option>
                                   {fild.input.options.map((option) => <option key={option.value} value={option.value} selected={option.selected}>{option.label}</option>)
                                   }
                                 </Select>
                                  
                                : <Input className="mt-1" 
                                      type={fild.input.type} 
                                      defaultValue={data[fild.input.name]} 
                                      placeholder={fild.input?.placeholder} 
                                      //name={fild.input.name}
                                      {...register(fild.input.name)}
                                      required={fild.input?.required} 
                                      key={fild.label} />
                              }
                          </Label>
                      )    
                    })}
                    {/*<Select 
                          key="test"
                          className="mt-1" 
                          isMulti 
                          defaultValue={[{label: "Développement logiciel", value: "A7wzMBVnSki4UupD4tbp"}, {label: "Administrateur système DevOps", value: 'fa7LIbQFmL5fKTFUBpyI'}]}
                          //name={fild.input.name}
                          {...register('test')}
                          options={options}
                  />*/}
                                  
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
                    {isMobile && (
                      <>
                        <div className="block w-full sm:hidden">
                          <Button block size="large" layout="outline" onClick={reset}>
                            Cancel
                          </Button>
                        </div>
                        <div className="block w-full sm:hidden">
                          <Button block size="large">
                            Save
                          </Button>
                        </div>
                      </>
                    )}
        </form>
    </div>
  )
}
