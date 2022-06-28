import React from 'react';

function Newsletter() {
  return (
    <section className="pb-16 bg-gray-200 dark:bg-gray-800 relative pt-32">
      <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style={{transform: "translateZ(0)"}}>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" className="absolute bottom-0 overflow-hidden"><polygon points="2560 0 2560 100 0 100" className="text-gray-200 dark:text-gray-800 fill-current"></polygon></svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white dark:bg-gray-700 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12 text-gray-800 dark:text-gray-200">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love"> 😍 </span>
            </p>
            <h3 className="font-semibold text-3xl">Do you love this Starter Kit?</h3>
            <p className="text-gray-500 text-lg leading-relaxed mt-4 mb-4"> Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look! </p>
            <div className="sm:block flex flex-col mt-10">
              <a href="https://aide.chicorycom.net" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"> Get started </a>
              <a href="https://aide.chicorycom.net/guide/" target="_blank" className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                <i className="fab fa-github text-lg mr-1"></i>
                <span>Help With a Star</span>
              </a>
            </div>
            <div className="text-center mt-16">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
