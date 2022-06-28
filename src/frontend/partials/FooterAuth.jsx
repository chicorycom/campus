import React from 'react'

/**
* @author
* @function FooterAuth
**/

const FooterAuth = (props) => {
  return(
    <footer className="pb-6 w-full fixed bottom-0 text-gray-100">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm  font-semibold py-1 text-center md:text-left"> Copyright © 2022 <a href="https://www.chicorycom.net" className="text-red-800 hover:text-red-700 text-sm font-semibold py-1"> Chicorycom.net </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <a href="https://www.creative-tim.com?ref=na-footer-small" className=" hover:text-gray-300 text-sm font-semibold block py-1 px-3"> Creative Tim </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/presentation?ref=na-footer-small" className=" hover:text-gray-300 text-sm font-semibold block py-1 px-3"> About Us </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com?ref=na-footer-small" className=" hover:text-gray-300 text-sm font-semibold block py-1 px-3"> Blog </a>
              </li>
              <li>
                <a href="https://github.com/creativetimofficial/notus-angular/blob/main/LICENSE.md?ref=creativetim" className="text-white hover:text-gray-300 text-sm font-semibold block py-1 px-3"> MIT License </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
   )
}

export default FooterAuth;
