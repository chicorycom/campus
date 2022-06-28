import {Image} from '../../../backend/components/Image' 

/**
* @author
* @function Header
**/

export const Header = () => {
  return(
    <header className="relative pt-0 pb-24 md:pt-28 md:pb-44 items-center flex lg:max-h-860-px h-auto max-h-auto bg-gray-900">
        <div className="flex flex-col container mx-auto items-center">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 pb-4">
                    <div className="flex flex-col pt-16 md:pt-0 w-full text-white">
                        <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">Cours pratiques</h1>
                        <p className="my-2 text-2xl leading-relaxed text-gray-300 font-medium">Suivez de courtes vidéos dirigées par des instructeurs experts, puis mettez en pratique ce que vous avez appris avec des exercices interactifs dans votre navigateur. </p>
            
                        <ul className="mt-8 text-2xl text-gray-300">
                            <li className="flex mt-3 items-center ">
                                <div className="w-6 mr-4 text-red-400">
                                    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-5" role="img"><path fill="currentColor" d="M7.98 9.022L8 4.995a1 1 0 012 .01l-.016 3.022H12a1 1 0 010 2H8.98a1 1 0 01-1-1.005zM9 16A7 7 0 109 2a7 7 0 000 14zm0 2A9 9 0 119 0a9 9 0 010 18z" fill-rule="evenodd"></path></svg>
                                </div>
                                Apprenez à votre propre rythme
                            </li>
                            <li className="flex mt-3 items-center ">
                                <div className="w-6 mr-4 text-red-400">
                                    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-5" role="img"><path fill="currentColor" d="M17.655 9.756l-4.946 4.95a1 1 0 11-1.415-1.415l4.29-4.294-4.277-4.293a.998.998 0 01.003-1.413 1 1 0 011.414.003l4.985 5.002a.998.998 0 01-.054 1.46zm-17.31 0a.998.998 0 01-.054-1.46l4.985-5.002a1 1 0 011.414-.003.998.998 0 01.003 1.413L2.416 8.997l4.29 4.294a1.002 1.002 0 01-1.415 1.416L.345 9.757z" fill-rule="evenodd"></path></svg>
                                </div>
                                Obtenez une expérience pratique
                            </li>
                            <li className="flex mt-3 items-center ">
                                <div className="w-6 mr-4 text-red-400">
                                    <svg viewBox="0 0 79 59" className="h-5"><path d="M75.51.23a3.32 3.32 0 0 1 3.32 3.32v51.9a3.32 3.32 0 0 1-3.32 3.32H4.13a3.32 3.32 0 0 1-3.32-3.32V3.55A3.32 3.32 0 0 1 4.13.23zM26.59 6.87H7.45v45.26h19.14zm45.6 0H33.23v45.26H72.2zM39.71 32.6l19.54.04-.02 6.64-19.53-.04zm0-12.95 25.95.02v6.64L39.7 26.3z" fill="currentColor"></path></svg>
                                </div>
                                Chapitres complets de grande taille
                            </li>
                        </ul>
            
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 ">
                    
                    <Image image={{src: 'https://res.cloudinary.com/dyd911kmh/f_auto,c_limit,w_1920,q_auto/Marketing/Screenshots/course-mobile-desktop.png'}} />
                </div>
            </div>
        </div>
    </header>
   )
  }
