import { lazy } from "react";
import { useParams } from "react-router-dom";

const Services = lazy(() => import('./Services'));
const Formations = lazy(() => import('./Formations'));
const Recruit = lazy(() => import('./Recruit'));


function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
* @author
* @function PricingService
**/

const PricingComponent = () => {
 const { slug } = useParams()

 const components = {
    Services,
    Formations,
    Recruit
  }

 const comp = Capitalize(slug)
 const TagName = components[comp] || Services
  
 
 return <TagName />
}

export default PricingComponent;
