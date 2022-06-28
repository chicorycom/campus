import React from 'react';


function Testimonials() {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto pb-64">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-code-branch text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white"> Open Source </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-400"> 
            As <strong> chcicorycom-fromwork</strong> is an open source project, we also wanted to continue this movement. You can try this version to feel the MVC organization of your code!
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-400"> Get it for free on Github and help us spread the news with a star! </p>
            <a href="https://aide.chicorycom.net/guide/" target="_blank" className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"> Github Star </a>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
          <svg className="text-gray-100 text-55 absolute -top-150-px -right-100 left-auto opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;