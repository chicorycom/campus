import React from 'react';
//import Slider from "react-slick";
import { useTranslation } from 'react-i18next'
import { About } from '../components/home/About';
import { Works } from '../components/home/Works';
import { Documentation } from '../components/home/Documentation';


function Featured() {

  const { t } = useTranslation();

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

 

  
  return (
      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-100 dark:bg-gray-800">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style={{transform: "translateZ(0)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" className="absolute bottom-0 overflow-hidden"><polygon points="2560 0 2560 100 0 100" className="text-gray-100 dark:text-gray-800 fill-current"></polygon></svg>
        </div>

        <About />

        <Works />

      <Documentation />

    </section>
  );
}

export default Featured;
