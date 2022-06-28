import React, {useState, useCallback} from 'react'
import {isMobile} from 'react-device-detect';
import { 
  Button, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
  Input, 
 // HelperText, 
  Label, 
  Select, 
  Textarea
} from '@windmill/react-ui';

import { upload } from '../../storage'
import { add } from '../../database'

import { useForm } from "react-hook-form";
//import useFirestore from "../../hooks/useFirestore"
import { CloseIcon, FolderOpenIcon, SaveIcon } from '../icons';
import { Image } from './Image';
import { SpinnerContaine } from './SpinnerContaine';
import { ModalCustom } from './ModalCustom';

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
* @function Formulaire
**/

export const ModalForm = ({action, title, filds, isModalOpen, setIsModalOpen, docs, setDocs}) => {
  const { register, handleSubmit, reset } = useForm()
  const [file, setFile] = useState(null);
  const [isloading, setLoading] = useState(false)

  function closeModal() {
    setIsModalOpen(false)
  }
  
  const onSubmit = useCallback(async values => {
    setLoading(true)
    if(values.lang !== null){
      //const asArray = Object.entries(values);
      //const filtered = asArray.filter(([key, value]) => key !== 'lang' && key !== 'image' && key !== 'icon');

     // const justStrings = Object.fromEntries(filtered);
     // const data = {en: justStrings, fr: justStrings, icon: values.icon}

      const data = values
      data.items = []
      if(values.image && values.image[0]){
        const {url, name} = await upload(values.image[0])
        data.image = {}
        data.image.src = url
        data.image.alt = name 
      }      

      const docRef = await add(action, data) //addDoc(collection(db, action), data);
      data.id = docRef
      
      const newDocs = [...docs, data]
      setDocs(newDocs)
    }
    reset()
    setFile(false)
    setLoading(false)
    setIsModalOpen(false)
  }, [action, reset, setIsModalOpen, docs])

    
  const onFileChange = event => {
      const fileReader = new window.FileReader();
      const file = event.target.files[0];
      
      fileReader.onload = fileLoad => {
          const { result } = fileLoad.target;
          setFile(result);
      };
      
      fileReader.readAsDataURL(file);
  };

  return(
      <ModalCustom isOpen={isModalOpen} onClose={closeModal} >
          {isloading && <SpinnerContaine /> }
          <ModalHeader className='flex justify-between'>
            {title}
            
          </ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody>
              {filds.map(fild => {
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
                                        </div> <input type="file" className={styles.inputFile} {...register(fild.input.name)} onChange={onFileChange} key={fild.label} />
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
                                  rows="5"
                                  {...register(fild.input.name, {required: fild.input?.required})}
                              />
                            : fild.input.type === 'select'
                            ? <Select 
                                key={fild.label}
                                className="mt-1" 
                                defaultValue={fild.input.default} 
                                {...register(fild.input.name, {required: fild.input?.required})}
                              >
                                {fild.input.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                              </Select>
                              
                            : <Input className="mt-1" type={fild.input.type} placeholder={fild.input?.placeholder} {...register(fild.input.name, { required: fild.input?.required })} key={fild.label} />
                          }
                      </Label>
                  )    
                })}
              </ModalBody>
              <ModalFooter>
              
                <div className="hidden sm:block">
                  <Button layout="outline" className={styles.btn} onClick={closeModal}>
                    <CloseIcon className='w-5 h-5' /> Cancel
                  </Button>
                </div>
                <div className="hidden sm:block">
                  <Button type='submit' className={styles.btn}>
                    <SaveIcon className='w-5 h-5' /> Save
                  </Button>
                </div>
                {isMobile && (
                  <>
                    <div className="block w-full sm:hidden">
                      <Button block size="large" layout="outline" onClick={closeModal}>
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
                
              </ModalFooter>
            </form>
      </ModalCustom>
   )
}
