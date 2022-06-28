import { NavLink, Outlet } from "react-router-dom"
import PricingBg from "../components/pricing/PricingBg"

/**
* @author
* @function Pricing
**/


const Pricing = () => {
  return(
    <div className="relative bg-gray-900 min-h-screen">
       <PricingBg />
        <div className="container mx-auto items-center">
            <h1 className="text-white font-bold text-3xl text-center pt-6">Apprenez les  
                <span className="text-red-600"> compétences en matière de données</span> dont vous avez besoin pour faire avancer votre carrière.
            </h1>
        </div>
        <div className="container mx-auto items-center mt-6 flex justify-center">
            <div className="max-w-dm bg-gray-800 rounded-full flex justify-center items-center h-11 text-gray-200 py-1 px-2">
                <NavLink className={({ isActive }) => (isActive ? "bg-white text-gray-800 rounded-full font-bold " : "hover:bg-gray-900 hover:rounded-full ") + "appearance-none px-3 font-semibold h-full w-full overflow-hidden flex justify-center items-center p-1" } to="/pricing/formations">Formations</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-white text-gray-800 rounded-full font-bold " : "hover:bg-gray-900 hover:rounded-full ") + "appearance-none px-3 font-semibold h-full w-full overflow-hidden flex justify-center items-center p-1" } to="/pricing/services">Servive</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-white text-gray-800 rounded-full font-bold " : "hover:bg-gray-900 hover:rounded-full ") + "appearance-none px-3 font-semibold h-full w-full overflow-hidden flex justify-center items-center p-1" } to="/pricing/recruit">Recruit</NavLink>
            </div>
        </div>
    
        <Outlet />
    </div>
   )
}

export default Pricing
