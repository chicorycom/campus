import { Link } from 'react-router-dom'
import { useDatas } from '../../../hooks/DatasContext'

/**
* @author
* @function LaunchCareer
**/

export const LaunchCareer = () => {

    const { Menus } = useDatas()
  return (
        <nav className="css-vurnku">
            <div className="container mx-auto px-4 w-full">
                <h3  className="text-4xl font-bold mt-8 mb-2 text-gray-900">Lancez votre carrière</h3>
                <div className="flex flex-wrap justify-center">
                    {
                        Menus[0].sub.map(sub => sub.tops && sub.tops.map(top => (
                            <>
                                <Link key={top.name} to={top.link ? top.link : '/coures-all'} className="launch__career after:bg-red-500 relative flex justify-center w-full max-w-sm items-center shadow-md m-4 bg-white rounded overflow-hidden h-28  text-gray-800 text-2xl font-bold hover:text-white" >
                                    <span className="z-20">{top.name}</span>
                                </Link>
                                {/*
                                    top.topLearn && top.topLearn.map(top_learn => (
                                        <Link to={top_learn.link ? top_learn.link : '/coures-all'} className="launch__career after:bg-red-500 relative flex justify-center w-full max-w-sm items-center shadow-md m-4 bg-white rounded overflow-hidden h-28  text-gray-800 text-2xl font-bold hover:text-white" >
                                            <span className="z-20">{top_learn.name}</span>
                                        </Link>
                                    ))
                                */}
                            </>
                        )))
                    }
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Link to="/courses-all" class="flex items-center font-bold mt-2 text-xl text-gray-800  transition ease-in-out delay-400 hover:text-red-600">
                    Explorez toutes les pistes de carrière <svg viewBox="0 0 743 458" width="18" className="text-red-600 ml-2"><path d="m732.36 251.65-.4.36-234.34 205.43-39.55-45.12L633 258.97l-632.14.15-.02-60 631.33-.15L458.02 45.63 497.67.6 732 206.94a30 30 0 0 1 .36 44.7z" fill="currentColor"></path></svg>
                  </Link>
              </div>
            </div>
        </nav>
   )
  }
