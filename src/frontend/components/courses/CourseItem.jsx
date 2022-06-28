import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function CourseItem
**/

export const CourseItem = ({data}) => {
  return(
    <Link to="/" className="_transition border-solid border-2 border-gray-200 rounded-md text-left font-normal hover:shadow-lg" >
        <article className="flex bg-white  px-4 pt-3 pb-6">
            <div className=" w-9 mt-1 mr-3">
                <svg viewBox="0 0 39 39" role="img" data-technology="Power BI" min="36"><title>Power BI</title><g fill="none" fill-rule="evenodd"><circle cx="19.5" cy="19.5" r="19.5" fill="#05192D"></circle><path fill="#FFF" d="M14.874 24.518c.05.521.021 1.051.024 1.578.002.494.013.99-.005 1.484-.03.861-.588 1.437-1.354 1.42-.755-.017-1.236-.58-1.241-1.458-.003-.462 0-.925 0-1.388 0-.495-.006-.99.001-1.484.01-.758.506-1.329 1.19-1.381.692-.053 1.313.47 1.385 1.229zm2.648-5.973c.783-.007 1.315.618 1.317 1.556l.002 1.844v1.844c0 1.23.002 2.46-.002 3.689-.002.908-.525 1.515-1.299 1.521-.783.006-1.306-.586-1.307-1.503-.005-2.475-.004-4.95 0-7.424 0-.922.513-1.52 1.29-1.527zm3.95 2c.762.002 1.291.592 1.3 1.473.008.942.001 1.884.001 2.827 0 .894.007 1.788-.001 2.683-.009.88-.537 1.47-1.3 1.47-.755.002-1.296-.598-1.3-1.47a669.57 669.57 0 01.001-5.51c.004-.877.544-1.474 1.3-1.473zm3.93-5.266c.784-.004 1.3.585 1.302 1.509.004 1.787 0 3.574 0 5.361 0 1.82.006 3.639-.004 5.458-.004.68-.394 1.181-.983 1.325a1.24 1.24 0 01-1.452-.71 1.89 1.89 0 01-.148-.737c-.01-3.575-.01-7.15-.004-10.724.002-.88.538-1.478 1.29-1.482zm-8.627-4.276h11.288c1.792.002 2.936 1.208 2.936 3.091 0 3.195.002 6.39 0 9.585-.002 1.63-1.222 2.91-2.781 2.938-.312.006-.5-.064-.469-.447.025-.308-.077-.63.426-.643 1.155-.027 1.794-.737 1.796-1.942.005-3.195.006-6.39 0-9.585-.003-1.206-.705-1.938-1.859-1.938-5.743-.004-11.485-.005-17.228 0-1.142 0-1.835.72-1.838 1.9-.005 3.243-.006 6.486.001 9.729.003 1.045.652 1.797 1.611 1.835.647.025.606-.02.604.726 0 .093-.019.186-.028.273-1.151.348-2.585-.477-3.045-1.769a3.164 3.164 0 01-.18-1.025c-.013-3.274-.009-6.55-.007-9.824.001-1.633 1.179-2.89 2.741-2.9 2.01-.013 4.022-.004 6.032-.004z"></path></g></svg>
            </div>
            <div className="flex flex-col">
                <h2 className="text-gray-800 text-xl font-bold">Introduction to Power BI</h2>
                <p className="py-2 text-lg">Gain a 360° overview of how to explore and use Power BI to build impactful reports.</p>
                <div className="flex gap-x-4 text-gray-700 text-sm">
                    <span className="flex justify-center items-center gap-2"><svg viewBox="0 0 18 18" aria-hidden="false" height="12" role="img" width="12"><title>Clock</title><path fill="currentColor" d="M7.98 9.022L8 4.995a1 1 0 012 .01l-.016 3.022H12a1 1 0 010 2H8.98a1 1 0 01-1-1.005zM9 16A7 7 0 109 2a7 7 0 000 14zm0 2A9 9 0 119 0a9 9 0 010 18z" fill-rule="evenodd"></path></svg>6 hours</span>
                    <span className="flex justify-center items-center gap-2"><svg viewBox="0 0 18 18" aria-hidden="false" height="12" role="img" width="12"><title>Tag</title><path fill="currentColor" d="M9.593 2.872L3.035 9.43a1 1 0 000 1.414l4.242 4.243a1 1 0 001.414 0l6.559-6.559.294-3.802a2 2 0 00-2.148-2.149l-3.803.295zM9.439.877L13.24.583a4 4 0 014.297 4.297l-.294 3.803a2 2 0 01-.58 1.26L10.106 16.5a3 3 0 01-4.243 0L1.62 12.258a3 3 0 010-4.242L8.18 1.457a2 2 0 011.26-.58zm2.788 5.017a1 1 0 111.414-1.414 1 1 0 01-1.414 1.414z" fill-rule="evenodd"></path></svg>Data Visualization</span>
                    <span className="flex justify-center items-center gap-2"><svg viewBox="0 0 18 18" aria-hidden="false" height="12" role="img" width="12"><title>User</title><path fill="currentColor" d="M12 17v-5a1 1 0 00-1-1H7a1 1 0 00-1 1v5c0 .667-.333 1-1 1s-1-.333-1-1v-5a3 3 0 013-3h4a3 3 0 013 3v5c0 .667-.333 1-1 1-.666 0-1-.333-1-1zM9 6a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z" fill-rule="evenodd"></path></svg>Sara Billen</span>
                    <span className="flex justify-center items-center gap-2"><svg viewBox="0 0 18 18" aria-hidden="false" height="12" role="img" width="12"><title>Learn</title><path d="M11.879 16.244L10.864 18H7.132l-1.014-1.756h5.76zM8.999 0c3.684 0 6.672 2.978 6.672 6.652a6.643 6.643 0 01-3.199 5.68l-.044.027v2.744H5.582v-2.736l-.016-.01a6.646 6.646 0 01-3.24-5.62v-.085C2.325 2.978 5.313 0 8.998 0zm0 1.756c-2.717 0-4.918 2.193-4.918 4.896a4.894 4.894 0 002.762 4.402l.494.24v2.052h3.335V11.29l.492-.241a4.887 4.887 0 002.75-4.397c.001-2.703-2.2-4.896-4.916-4.896zm.216 2.229l-.493 1.9h2.449l-.91 3.827H8.456l.492-2.07H6.453L7.4 3.985h1.814z" fill="currentColor" fill-rule="evenodd"></path></svg>courses</span>
                </div>
            </div>
        </article>
    </Link>
   )
  }
