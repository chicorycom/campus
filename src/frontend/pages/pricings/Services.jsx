import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../components/Icon'
import SectionPricing from '../../components/pricing/SectionPricing'

const lists = [
  'test','test','test','test','test','test','test','test',
]

/**
* @author
* @function PricingService
**/

const Services = () => {

  const datas = [
    {
      name: "Basic",
      descript: "ACCÈS LIMITÉ",
      price: "",
      btn: {label: "Commencer", link: ""},
      items: [
        {
          name: 'Every first chapter free'
        },
        {
          name: 'Selection of free courses (6)'
        },
        {
          name: 'Free professional profile and job board access'
        },
        {
          name: 'Upgrade to earn certificates'
        },
      ]
    },
    {
      name: "Premium",
      top: true,
      items: [
        {
          name: 'Every first chapter free'
        },
        {
          name: 'Selection of free courses (6)'
        },
        {
          name: 'Free professional profile and job board access'
        },
        {
          name: 'Upgrade to earn certificates'
        },
      ]
    },
    {
      name: "Teams",
      items: [
        {
          name: 'Every first chapter free'
        },
        {
          name: 'Selection of free courses (6)'
        },
        {
          name: 'Free professional profile and job board access'
        },
        {
          name: 'Upgrade to earn certificates'
        },
      ]
    },
    {
      name: "Enterprise",
      items: [
        {
          name: 'Every first chapter free'
        },
        {
          name: 'Selection of free courses (6)'
        },
        {
          name: 'Free professional profile and job board access'
        },
        {
          name: 'Upgrade to earn certificates'
        },
      ]
    }
  ]

  return(
    <>
        <section className="relative my-8">
          <div className="container mx-auto items-center lg:flex">
            <div className="m-2 md:flex flex-wrap lg:mx-0">
              {
                datas.map(data => <SectionPricing key={data.name} data={data} />)
              }
        
            </div>
          </div>
          <div className="container mx-auto items-center">
            <a href="#table" className="flex justify-center items-center text-xl text-gray-100 font-bold mb-6 ">
              Compare features 
              
              <Icon className="ml-2" aria-hidden="true" icon='DropdownIcon' />
            </a>
          </div>
      </section>
      <section className='relative'>
        <div className="container mx-auto items-center justify-around lg:flex mb-20 mt-5">
            <div className="w-60 text-gray-100 font-bold ">
              <strong className=" text-4xl">180+</strong>
              <p className=" text-2xl">Countries using the DataCamp platform</p>
            </div>
            <div className=" w-72 text-gray-100 font-bold">
              <strong className="text-4xl">4.5+ 
              <svg viewBox="0 0 89 17" fill="none" xmlns="http://www.w3.org/2000/svg" width="185" className="css-112vqin-SocialProof"><g clip-path="url(#star-rating-courses_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.97 15.93c-1.36.93-3.1-.39-2.67-2.02l.86-3.18-2.5-2.05C-.6 7.63.07 5.5 1.7 5.42l3.17-.14L5.97 2.2a1.74 1.74 0 0 1 3.3 0l1.1 3.1 3.18.13c1.63.08 2.3 2.2 1.02 3.26l-2.49 2.05.85 3.18c.44 1.63-1.3 2.95-2.66 2.02L7.62 14.1l-2.65 1.83ZM23.3 15.93c-1.37.93-3.11-.39-2.68-2.02l.86-3.18-2.5-2.05c-1.27-1.05-.6-3.18 1.03-3.26l3.17-.14L24.3 2.2a1.74 1.74 0 0 1 3.3 0l1.1 3.1 3.18.13c1.63.08 2.3 2.2 1.02 3.26l-2.49 2.05.85 3.18c.44 1.63-1.3 2.95-2.66 2.02l-2.65-1.83-2.65 1.83ZM41.85 15.93c-1.35.93-3.1-.39-2.66-2.02l.85-3.18-2.49-2.05c-1.28-1.05-.6-3.18 1.02-3.26l3.17-.14 1.11-3.09a1.74 1.74 0 0 1 3.3 0l1.1 3.1 3.18.13c1.63.08 2.3 2.2 1.02 3.26l-2.49 2.05.85 3.18c.44 1.63-1.3 2.95-2.66 2.02L44.5 14.1l-2.65 1.83ZM59.93 15.93c-1.35.93-3.1-.39-2.66-2.02l.85-3.18-2.49-2.05c-1.28-1.05-.61-3.18 1.02-3.26l3.17-.14 1.11-3.09a1.74 1.74 0 0 1 3.3 0l1.1 3.1 3.18.13c1.63.08 2.3 2.2 1.02 3.26l-2.49 2.05.86 3.18c.43 1.63-1.32 2.95-2.67 2.02l-2.65-1.83-2.65 1.83Z" fill="#FCCE0D"></path>
              <mask id="star-rating-courses_svg__b"  maskUnits="userSpaceOnUse" x="81" y="-1" width="8" height="18"><path fill="#FCCE0D" d="M81-1h8v18h-8z"></path></mask>
              <g mask="url(#star-rating-courses_svg__b)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.29 15.93c-1.36.94-3.1-.38-2.67-2.01l.85-3.18-2.49-2.06c-1.27-1.05-.6-3.18 1.02-3.25l3.17-.15 1.11-3.09a1.74 1.74 0 0 1 3.3 0l1.11 3.1 3.17.14c1.63.07 2.3 2.2 1.02 3.25l-2.48 2.06.85 3.18c.43 1.63-1.31 2.95-2.67 2l-2.65-1.82-2.64 1.83Z" fill="#FCCE0D" fill-opacity="0.1"></path>
              </g>
              <mask id="star-rating-courses_svg__c"  maskUnits="userSpaceOnUse" x="73" y="-1" width="8" height="18">
                <path fill="#FCCE0D" d="M73-1h8v18h-8z"></path>
              </mask>
              <g mask="url(#star-rating-courses_svg__c)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.29 15.93c-1.36.94-3.1-.38-2.67-2.01l.85-3.18-2.49-2.06c-1.27-1.05-.6-3.18 1.02-3.25l3.17-.15 1.11-3.09a1.74 1.74 0 0 1 3.3 0l1.11 3.1 3.17.14c1.63.07 2.3 2.2 1.02 3.25l-2.48 2.06.85 3.18c.43 1.63-1.31 2.95-2.67 2l-2.65-1.82-2.64 1.83Z" fill="#FCCE0D"></path>
              </g>
            </g>
            <defs><clipPath id="star-rating-courses_svg__a"><path fill="#fff" d="M0 0h89v17H0z"></path></clipPath></defs>
          </svg>
        </strong>
        <p className="text-2xl">Trusted by more than <br/>9 million learners</p>
            </div>
        <div className="w-60 text-gray-100 font-bold">
          <strong className="text-4xl">80%</strong>
        <p className="text-2xl">of the Fortune 1000 use DataCamp</p>
        </div>
        </div>
      </section>
      <section className='relative bg-purple-dark'>
              <div className="container mx-auto items-center justify-around lg:flex ">
                <div className="flex my-24 text-white font-bold">
                  <div className=" max-w-sm mr-24">
                    <h2 className=" text-3xl tracking-tighter">DataCamp Workspace</h2>
                    <p className="text-2xl mt-6 lg:mt-12 ">Workspace is a cloud-based coding environment that lets you analyze data and share your analyses in Python or R.</p>
                  </div>
                  <ul className="flex flex-grow mt-6 justify-between lg:mt-0">
                    <li className="flex flex-col max-h-80 w-1/3">
                      <span className="text-3xl">
                        <svg viewBox="0 0 18 18" aria-hidden="false" height="18" role="img" width="18"><path d="M9.84 0l.001 7.243a1.948 1.948 0 11-1.64-.02V5.34a3.778 3.778 0 00.824 7.462 3.776 3.776 0 003.207-5.77l1.358-.922A5.416 5.416 0 118.2 3.67V1.682a7.361 7.361 0 106.99 3.336l1.353-.918A8.908 8.908 0 0118 9 9 9 0 118.202.035c.138-.012.276-.012.415-.008L9.84 0z" fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span className=" mt-5"> Start analyzing data instantly—no setup or installation required.</span>
                    </li>
                    <li className="css-1hhany5">
                      <span className="css-1rbq0za">
                        <svg viewBox="0 0 18 18" aria-hidden="false" height="18" role="img" width="18"><title>Database</title><path fill="currentColor" d="M4 9.175h10V7.472C12.715 8.163 10.93 8.5 9 8.5c-1.93 0-3.715-.337-5-1.028v1.703zm0 2.971V13.5c0 1.105 2.239 2 5 2s5-.895 5-2v-1.354c-1.285.692-3.07 1.029-5 1.029-1.93 0-3.715-.337-5-1.029zM2 4.5c0-2.71 3.225-4 7-4s7 1.29 7 4v9c0 2.71-3.225 4-7 4s-7-1.29-7-4v-9zm7 2c2.761 0 5-.895 5-2s-2.239-2-5-2-5 .895-5 2 2.239 2 5 2zM4 9.175c0 1.104 2.239 2 5 2s5-.896 5-2H4z" fill-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="css-csl1qk"> Get started easily with a curated library of datasets and ready-made templates.</span>
                    </li>
                    <li className="css-1hhany5">
                      <span className="css-1rbq0za">
                        <svg viewBox="0 0 18 18" aria-hidden="false" height="18" role="img" width="18"><title>Team</title><path fill="currentColor" d="M6.019 3.665a3 3 0 015.962 0 7 7 0 014.017 6.505 3.001 3.001 0 11-2.663 5.326A6.97 6.97 0 019 17a6.97 6.97 0 01-4.335-1.504 3 3 0 11-2.663-5.326 7 7 0 014.016-6.505zm.486 2.001a4.998 4.998 0 00-2.502 4.506 3.001 3.001 0 011.861 3.723A4.98 4.98 0 009 15a4.98 4.98 0 003.136-1.105 3.001 3.001 0 011.861-3.723 4.998 4.998 0 00-2.502-4.506A2.997 2.997 0 019 7c-1.04 0-1.957-.53-2.495-1.334zM3 14a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2zM9 5a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="css-csl1qk"> Work more effectively as a team with real-time collaboration features.</span>
                    </li>
                  </ul>
                </div>
              </div>
      </section>
      <section className='relative '>
              <div className="container mx-auto items-center justify-around lg:flex ">
                <div className="flex my-24 text-white font-bold">
                  <div className=" max-w-md mr-24">
                    <h2 className=" text-3xl tracking-tighter">DataCamp is trusted by top companies globally</h2>
                  </div>
                  <div className="flex flex-wrap mt-6 lg:mt-0 max-w-xl">
                    {
                      lists.map(l => (
                        <div className='flex justify-center items-center m-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 26" className="h-10 w-28"><path d="M55.83 7.1c1.57 0 2.82.68 3.47 1.43h.1V7.49h2.74V18.9c0 4.7-2.87 6.61-6.26 6.61a6.26 6.26 0 0 1-5.83-3.74l2.52-1.02a3.63 3.63 0 0 0 3.31 2.26c2.17 0 3.52-1.3 3.52-3.73v-.91h-.1a4.56 4.56 0 0 1-3.47 1.44 6.4 6.4 0 0 1-6.3-6.33 6.43 6.43 0 0 1 6.3-6.38zm-28.19 0c3.64 0 6.6 2.68 6.6 6.36 0 3.66-2.96 6.36-6.6 6.36-3.64 0-6.6-2.7-6.6-6.36 0-3.68 2.96-6.36 6.6-6.36zm14.25 0c3.63 0 6.6 2.68 6.6 6.36 0 3.66-2.96 6.36-6.6 6.36-3.64 0-6.6-2.7-6.6-6.36 0-3.68 2.96-6.36 6.6-6.36zm32.2 0c3.42 0 5.09 2.63 5.63 4.04l.3.73-8.8 3.52a3.36 3.36 0 0 0 3.2 1.92c1.47 0 2.49-.7 3.23-1.76L79.9 17a6.6 6.6 0 0 1-5.49 2.81 6.33 6.33 0 0 1-6.53-6.35A6.14 6.14 0 0 1 74.1 7.1zM10.37.08a9.91 9.91 0 0 1 7 2.72L15.4 4.7a7.26 7.26 0 0 0-5.03-1.93c-4.12 0-7.33 3.2-7.33 7.17s3.21 7.18 7.33 7.18a6.96 6.96 0 0 0 5.16-1.98 5.5 5.5 0 0 0 1.51-3.34h-6.67V9.12h9.4c.1.47.15 1.03.15 1.63 0 2.02-.58 4.52-2.42 6.3-1.8 1.81-4.1 2.77-7.13 2.77C4.74 19.81 0 15.38 0 9.94S4.74.07 10.37.07zm56.3.72v18.63h-2.82V.8h2.82zM27.64 9.6c-2 0-3.71 1.57-3.71 3.86a3.73 3.73 0 0 0 3.71 3.85c2 0 3.71-1.59 3.71-3.85a3.72 3.72 0 0 0-3.7-3.85zm14.25 0c-2 0-3.72 1.57-3.72 3.86a3.73 3.73 0 0 0 3.72 3.85c2 0 3.7-1.59 3.7-3.85a3.72 3.72 0 0 0-3.7-3.85zm14.2 0c-2 0-3.67 1.65-3.67 3.88a3.7 3.7 0 0 0 3.67 3.83c1.96 0 3.51-1.61 3.51-3.83 0-2.23-1.54-3.87-3.51-3.87zm18.1-.04a3.54 3.54 0 0 0-3.44 3.7l5.88-2.35c-.32-.8-1.3-1.35-2.44-1.35z" fill="currentColor"></path></svg>
                        </div>
                      ))
                    }
                    
                  </div>
                </div>
              </div>
      </section>
      <section className='relative bg-white'>
        <div id="table" className='container mx-auto items-center hidden lg:block pt-24'>
            <table cellpadding="0" cellspacing="0" className=' border-collapse w-full'>
              <thead className="sticky top-16 z-20 bg-white">
                <tr className="w-72 font-bold pb-1">
                  <th className="relative border-transparent text-left align-bottom pb-3 after:border after:border-gray-600 after:absolute after:left-0 after:-bottom-1 after:block after:w-72">
                    Specifications per workspace
                  </th>
                  <th className="border-l-2 border-y-2 border-l-gray-600 border-y-gray-600 rounded-tl-md pb-5 pt-2">
                    <div className="flex flex-col min-h-84 mb-2">
                      <strong className='text-2xl'>Basic</strong>  
                      <strong >Free</strong>
                    </div>
                    <div className="px-5">
                      <Link className="flex justify-center items-center w-full border border-gray-900 active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md hover:text-gray-100 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" to="/users/sign_up?from_pricing=true">
                        Try Now
                      </Link>
                    </div>
                  </th>
                  <th className="relative z-10 bg-gray-100 border-b-2 border-b-gray-600 rounded-tl-sm pb-5 pt-2">
                        <div className="absolute flex justify-center left-0 right-0 -top-7 after:border-t-4 after:border-t-red-600 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-4 after:bg-gray-100 after:z-0 after:rounded-tl-md after:rounded-tr-md">
                          <span className="text-xs uppercase p-2 z-20 bg-red-600 rounded text-white">Most Popular</span>
                        </div>
                        <div className="flex flex-col min-h-84 mb-2">
                          <span className='text-2xl'>Premium</span>  
                          <strong className="font-normal">
                            <span >$8.25 /month<br/>billed annually</span>
                          </strong>
                        </div>
                        <div className="px-5">
                          <Link className="flex justify-center items-center text-center  border border-gray-900 active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md hover:text-gray-100 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" to="/subscribe?from_pricing=true&amp;pay_period=yearly&amp;product=workspace">
                              Subscribe Now
                          </Link>
                        </div>
                      </th>
                      <th className="border-y-2 border-y-gray-600 pb-5 pt-2">
                        <div className="flex flex-col min-h-84 mb-2">
                          <span className='text-2xl'>Teams</span>
                          <strong >
                            <span className="font-normal">
                                $8.25 per user /month 
                              <span className="css-rzvkog">
                                <br/>billed annually
                              </span>
                            </span>
                          </strong>
                        </div>
                        
                        <div className="px-5">
                          <Link className="flex justify-center items-center text-center  border border-gray-900 active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md hover:text-gray-100 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" to="/groups/subscribe/account?plan_name=workspace.teams">
                              Work Together
                          </Link>
                        </div>
                      </th>
                      <th className="border-2 border-gray-600 pb-5 pt-2">
                        <div className="flex flex-col min-h-84 mb-2">
                          <span className='text-2xl'>Enterprise</span>
                          <strong className="font-normal">
                            Contact sales for pricing
                          </strong>
                        </div>
                        <div className="px-5">
                          <Link className="flex justify-center items-center text-center  border border-gray-900 active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md hover:text-gray-100 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" to="/business/demo">
                              Request a Demo
                          </Link>
                        </div>
                      </th>
                </tr>
              </thead>
              <tbody>
                {
                 lists.map(list => (
                <tr className="section-row-one css-vurnku">
                  <td className="pt-6 pb-2">Cloud-based workspaces for Python and R</td>
                  <td className="pt-6 pb-2 border-l-2 border-gray-600 text-center">Unlimited</td>
                  <td className="pt-6 pb-2  text-center">Unlimited</td>
                  <td className="pt-6 pb-2  text-center">Unlimited</td>
                  <td className="pt-6 pb-2 border-x-2 border-gray-600 text-center">Unlimited</td>
                </tr>
                 )) 
                }
                
              </tbody>
            </table>
        </div>
      </section>
    </>
   )
  }


export default Services