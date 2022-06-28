import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

/**
* @author
* @function BottonContact
**/

export const ButtonContact = () => {
    const { t } = useTranslation()
  return(
    
    <Link 
        to="/users/signup"
        className="w-full lg:w-96 flex justify-center items-center rounded text-white mt-4 bg-red-600 hover:bg-red-700 py-5 border border-red-500  focus:ring get-started  text-xl font-bold "> 
        Commencez gratuitement {/*t('Start Learning For Free')*/} 
    </Link>
   )
  }
