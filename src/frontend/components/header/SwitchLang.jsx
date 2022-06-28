import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ActivedIcon, DropdownIcon } from '../../../backend/icons';

/**
* @author
* @function SwitchLang
**/

export const SwitchLang = () => {

    const { t, i18n } = useTranslation()

    const [selected, setSelected] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    
    function handleEsc(e) {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onClose()
      }
    }

    const dropdownRef = useRef(null)
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose()
      }
    }

   const onClose = () => {
     setIsOpen(false)
   }


  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, { capture: true })
    document.addEventListener('keydown', handleEsc, { capture: true })
    const lang = localStorage.getItem('lang') || i18n.language
    setSelected(lang)
    i18n.changeLanguage(lang);

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])


  const handleSelectLang = useCallback((e) => {
        localStorage.setItem('lang', e) 
        i18n.changeLanguage(e);
        setSelected(e)
    }, [i18n])

   const handleClick = useCallback((e) => {
      setIsOpen(true)
    }, [])

  return(
    <div className="relative">
    <button className="text-xs leading-5 font-semibold bg-gray-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/20 text-gray-100" 
      type="button"
      onClick={handleClick}
    >
        {t(selected)}
      <DropdownIcon width="6" height="3" className="ml-2 overflow-visible" />
    </button>
    { isOpen &&
      <div ref={dropdownRef} className="absolute top-full mt-1 py-2 w-40 shadow-lg ring-gray-900/10 rounded-lg bg-white shadow  text-sm leading-6 font-semibold text-gray-400 bg-gray-100  highlight-white/5" >
        {
          Object.keys(i18n.services.resourceStore.data).map((lang, key) => (<span key={key} className="flex items-center justify-between px-3 py-1 text-gray-900 cursor-pointer"  onClick={()=>handleSelectLang(lang, t(lang))}>{t(lang)} {selected === lang ? <ActivedIcon/> : ''}</span>))
        }
      </div>
    }
  </div>
   )
  }
