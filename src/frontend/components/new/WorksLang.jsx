import React from 'react'
import {Icon} from '../../../frontend/components/Icon'
import { useDatas } from '../../../hooks/DatasContext';

/**
* @author
* @function WorksLang
**/

export const WorksLang = () => {

  const { Technologies } = useDatas()

  return(
    <div className="flex flex-wrap w-full justify-center items-center text-gray-300 pt-14 px-4 space-x-5 md:justify-between">
        {
          Technologies.slice(0, 15).map(technologie => <Icon icon={technologie.icon} className={technologie.size && technologie.size.sm ? technologie.size.sm : 'h-5'} />)
        }
        { /*<PythonIcon className="m-1 h-5" />
        <RIcon className="m-1 h-5" />
        <JavascriptIcon className='h-5 m-1' />
        <SqlIcon className='h-5 m-1'/> 
        <KotlinIcon className='h-4 m-1' />
        <TableauIcon className='h-5 m-1' />       
        <PhpIcon className='h-9 m-1' />
        <FlutterIcon className='h-4 m-1' />
        <SwiftIcon className='h-5 m-1' />
        <PowerBIcon className='h-4 m-1' />
        <ExcelIcon className='h-5 m-1'/>
        <CplusplusIcon className='h-5 m-1' />
        <OracleIcon className='h-3 m-1'/>
        <GitIcon className='h-5 m-1' />
      <ShellIcon className='h-4 m-1' />*/}
        <svg viewBox="0 0 66 26"  width="62"><path fill="currentColor" d="M16.39 16v6c-.01.15-.46 2.55-15.39 4v-6s15.39-1.5 15.39-4zm12.12-9.31c.88.1 1.74.37 2.65.59l-.74 2.71c-.77-.22-1.51-.46-2.27-.53a4.24 4.24 0 0 0-1.6.15c-.76.23-.85 1.04-.2 1.46.47.3 1.02.48 1.53.7.67.3 1.38.53 2 .92a3.62 3.62 0 0 1-.23 6.38c-1.36.7-2.82.87-4.32.74-1-.1-2-.3-3-.75l.63-2.72c.75.2 1.45.5 2.19.59a10 10 0 0 0 2.23-.04c.42-.04.71-.36.76-.8.04-.44-.18-.75-.55-.93l-1.4-.63-1.87-.87c-1.22-.7-1.96-1.73-1.88-3.18.08-1.46.84-2.5 2.13-3.16a6.77 6.77 0 0 1 3.94-.63zm11.9 3.64.3.07-.47 2.49c-1.26-.24-2.44-.47-3.33.68a2.45 2.45 0 0 0 0 2.73c.9 1.16 2.14.93 3.44.72l.34 2.47-.16.05c-2.36.63-5.14.18-6.39-1.24-1.29-1.46-1.44-3.18-.87-4.96.57-1.76 1.92-2.73 3.71-3.1a7.23 7.23 0 0 1 3.43.09zm7.42-.07c1.67.3 2.7 1.6 2.77 3.37.06 1.23.04 2.47.04 3.7.02.75.02 1.67.13 2.27h-3.05l-.25-.81a3.59 3.59 0 0 1-2.64 1.02c-1.54 0-2.67-.8-3.05-2.14a3.1 3.1 0 0 1 1.52-3.58 7.96 7.96 0 0 1 3.44-.83l.42-.03c-.07-.53-.38-.78-1.05-.83-1.1-.09-2.1.14-3.16.66l-.64-2.22c.84-.23 1.63-.55 2.45-.64 1.02-.1 2.07-.1 3.07.06zm16.22-.01c1.67.3 2.7 1.6 2.78 3.37.05 1.23.04 2.47.04 3.7 0 .76.01 1.67.13 2.27h-3.05l-.25-.82a3.6 3.6 0 0 1-2.64 1.03c-1.54 0-2.67-.8-3.05-2.14a3.1 3.1 0 0 1 1.52-3.58 7.97 7.97 0 0 1 3.43-.83l.42-.03c-.06-.54-.38-.78-1.05-.83a5.9 5.9 0 0 0-3.15.65l-.65-2.21c.85-.24 1.63-.56 2.46-.64 1.01-.1 2.07-.1 3.06.06zm-7.78-4.1v13.43h-3.4V6.15h3.4zM16.39 8v6c-.01.15-.46 2.55-15.39 4v-6h.04c.9-.1 15.35-1.58 15.35-4zm29.15 7.7c-.37.2-.58.55-.49.94.07.26.24.58.46.71.69.38 1.65-.1 1.75-.87.07-.36.03-.72.03-1.1a2.81 2.81 0 0 0-1.75.32zm16.23-.02c-.37.2-.58.56-.5.95.07.26.25.58.47.7.68.4 1.64-.1 1.75-.86.06-.35.02-.72.02-1.1a2.82 2.82 0 0 0-1.74.31zM16.39 0v6c-.01.15-.46 2.54-15.39 4V4s15.39-1.5 15.39-4z"></path></svg>
    </div>
   )
  }
