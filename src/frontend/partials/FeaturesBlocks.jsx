import React from 'react';

import login from '../images/login.jpg'
import profile from '../images/profile.jpg'
import landing from '../images/landing.jpg'

function FeaturesBlocks() {
  return (
    <section class="block relative z-1 bg-gray-900"><div class="container mx-auto"><div class="justify-center flex flex-wrap"><div class="w-full lg:w-12/12 px-4 -mt-24"><div class="flex flex-wrap"><div class="w-full lg:w-4/12 px-4"><h5 class="text-xl font-semibold pb-4 text-center">Login Page</h5><a href="/notus-angular/auth/login"><div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"><img alt="..." src={login} class="align-middle border-none max-w-full h-auto rounded-lg"/></div></a></div><div class="w-full lg:w-4/12 px-4"><h5 class="text-xl font-semibold pb-4 text-center">Profile Page</h5><a href="/notus-angular/profile"><div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"><img alt="..." src={profile} class="align-middle border-none max-w-full h-auto rounded-lg" /></div></a></div><div class="w-full lg:w-4/12 px-4"><h5 class="text-xl font-semibold pb-4 text-center">Landing Page</h5><a href="/notus-angular/landing"><div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"><img alt="..." src={landing} class="align-middle border-none max-w-full h-auto rounded-lg"/></div></a></div></div></div></div></div></section>
  );
}

export default FeaturesBlocks;
