import React from 'react';


import HeroHome from '../partials/HeroHome';
//import Featured from '../partials/Feature';
//import FeaturesBlocks from '../partials/FeaturesBlocks';
//import Testimonials from '../partials/Testimonials';
//import Newsletter from '../partials/Newsletter';
import { Skill } from '../partials/new/Skill';
import { Features } from '../partials/new/Features';
//import { Learning } from '../partials/new/Learning';

function Home() {
  return (
      <main className="flex-grow">
        <HeroHome />
        <Skill />
        <Features />
        {/*<Featured />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />*/}
      
      </main>
  );
}

export default Home;