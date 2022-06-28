import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icon'


export default function NavLink({data}) {
  return (
    <Link to={data.link.url} className={`all__nav-cercle ${data.position}`}>
        <Icon icon={data.link.icon.icon} className={data.link.icon.class} />
        <div className=" ">
            <strong className={`__title ${data.link.titlePosition}`}>
                {data.title}<svg viewBox="0 0 11 16" className="flex-shrink-0 w-2 ml-2"><path d="M10.54 7.18c.46.41.47 1.14 0 1.55v.02l-8.16 7.14-1.37-1.57 7.26-6.36L1 1.56 2.39 0l8.15 7.18z" fill="currentColor"></path></svg>
            </strong>
            <p>{data.description}</p>
        </div>
    </Link>
  )
}
