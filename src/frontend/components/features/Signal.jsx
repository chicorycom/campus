import { Link } from "react-router-dom";
import { Image } from "../../../backend/components/Image";
import { useDatas } from "../../../hooks/DatasContext";
import { Icon } from "../Icon";

export default function Signal() {
  const { Datas: { siganl }} = useDatas()
  
  return (
    <div className="bg-gray-900 text-white pb-14">
      <div className="container mx-auto flex flex-wrap py-32 lg:mt-36 items-center justify-between">
          <div className="pl-0 lg:pl-10 lg:w-1/2 text-center lg:text-left">
              <h1 className="flex justify-start items-center text-2xl font-bold mb-7" style={{color: "#06bdfc"}}>
                  <Icon icon={siganl.icon} className="h-12 mr-4"/>
                   {siganl.hero.title} <sup className="text-xs">TM</sup>
              </h1>
              <p className="text-5xl font-bold" >{siganl.hero.p1}</p><span className="text-blue-400"></span>
              <p className="leading-6 text-xl my-6 max-w-sm">{siganl.hero.p2}</p>
                <Link className="btn text-white bg-red-600 px-4 hover:bg-red-700  border py-3 border-red-600 focus:ring font-bold " to="/signal">
                  Faire une évaluation
                </Link>
              
                <Link className="btn text-white px-4 hover:bg-gray-600 ml-4 border border-gay-100  focus:ring font-bold py-3" to="/business/demo">
                    Demander un démo pour Etablissement
                </Link>
          </div>
          
          <div className="pl-0 lg:pl-10 lg:w-1/2 text-center lg:text-left">
            <Image image={{ src: "https://res.cloudinary.com/dyd911kmh/f_auto,c_limit,w_1200,q_auto/Marketing/Screenshots/screenshot-signal-100.png"}} />
          </div>
      </div>
    </div>
  )
}
