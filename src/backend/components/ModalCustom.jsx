import { Modal } from '@windmill/react-ui'
import React from 'react'

const styles = {
    home: "relative w-full px-6 py-4 bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
}

//overflow-hidden
/**
* @author
* @function ModalCustom
**/

export const ModalCustom = ({children, isOpen, onClose}) => {
  return(
        <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        className={styles.home}
        >
            {children}
        </Modal>
   )
  }
