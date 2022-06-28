import { Link, useMatch, useResolvedPath} from "react-router-dom"

/**
* @author
* @function Linker
**/

export const Linker = ({ children, to, ...props }) => {
    
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return(
    <Link
     to={to}
     {...props}
    >
        {match && (
            <span
                class="absolute inset-y-0 left-0 w-1 bg-red-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
            ></span>
        )}
        {children}
    </Link>
   )
  }
