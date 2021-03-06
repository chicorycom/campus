import React from 'react'
import documentation from '../../images/documentation.png'

/**
* @author
* @function Documentation
**/

export const Documentation = (props) => {
  return(
    <div className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-file-alt text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold dark:text-gray-100">Complex Documentation</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-100"> This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go. </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-700 bg-gray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600 dark:text-gray-300"> Built by Developers for Developers </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600 dark:text-gray-300"> Carefully crafted code for Components </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600 dark:text-gray-300"> Dynamic Javascript Components </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img alt="..." src={documentation} className="max-w-full rounded-lg shadow-xl" style={{ transform: "scale(1) perspective(1040px) rotateY(-11deg)rotateX(2deg) rotate(2deg)"}} />
          </div>
        </div>
      </div>
   )
  }
