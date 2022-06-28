import React, { Suspense, useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { CardEditable } from '../components/Cards/CardEditable';
import {Tables} from '../components/Tables';
import { Button } from '@windmill/react-ui';
import { ModalForm } from '../components/ModalFom';
import { useDatas } from '../../hooks/DatasContext';
import { SpinnerContaine } from '../components/SpinnerContaine';


/**
* @author
* @function HeroHomeAdmin
**/


const HeroHomeAdmin = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { docs, setDocs } = useDatas()
  
/*
  //for table
  const datas = [
    {
      image: {src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6'},
      name: 'Assane Sarr',
      description: 'Je test les messages',
     // actions: 'Actions'
    }
  ]
  const headers = [...Object.keys(datas[0]), 'Actions']

  const _datas = [
    {
      id: 1,
      image: {src: angular},
      icon: null,
      fr: {
        title:'Des solutions mathématiques & informatiques sur-mesure',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.', 
      },
      en: {
        title:'Tailor-made mathematical & IT solutions',
        content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', 
      },

    },
    {
      id: 2,
      fr: {
        title:'Des solutions mathématiques & informatiques sur-mesure',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.', 
      },
      en: {
        title:'Tailor-made mathematical & IT solutions',
        content: 'sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.', 
      },
      image: {src: angular},
      icon: null
    },
    {
      id: 3,
      fr: {
        title:'Des solutions mathématiques & informatiques sur-mesure',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.', 
      },
      en: {
        title:'Tailor-made mathematical & IT solutions',
        content: 'sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.', 
      },
      image: {src: angular},
      icon: 'Contract'
    }
]
*/

const filds = [
  {
    label: 'title',
    input: {type: 'text',name: 'title',  placeholder: "Jane Doe", required: true}
  },
  {
    label: 'Icon',
    input: {type: 'text', name: 'icon',  placeholder: "icon....", required: false}
  },
  {
    label: 'Position',
    input: {type: 'select', name: 'position', default: 'right', options: [{value:'left', label: 'Left'},{value:'right', label: 'Right'}], required: false}
  },
  {
    label: 'Content',
    input: {type: 'textarea', name: 'content', placeholder: "Jane Doe", required: true}
  },
  {
    label: 'boImagedy',
    input: {type: 'file', name: 'image'}
  }
]

 function openModal() {
    setIsModalOpen(true)
  }

  return(
    <>
      <header className="flex justify-between items-center border-b border-b-gray-200 dark:border-gray-800 mb-5">      
        <PageTitle>Hero Home Admin</PageTitle>
        <Button onClick={openModal}> Ajouter </Button>   
      </header>
      <Suspense fallback={<SpinnerContaine />}>
        <div className='flex flex-wrap gap-4'>
          {docs.map(data => <CardEditable docs={docs} setDocs={setDocs} action='about' value={data} key={data.id} />)}
        </div>
      </Suspense>
      <ModalForm 
        docs={docs}
        setDocs={setDocs}
        action='about'
        title='Add Element'
        filds={filds} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
    </>
   )
  }

  /**
   * <div className='flex'>
          <div className='basis-2/3'>
            <Tables title='test' headers={headers} datas={datas}/>
          </div>
        <LandingHome />
      </div>
   */

export default HeroHomeAdmin