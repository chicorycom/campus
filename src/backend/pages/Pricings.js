import { Button } from "@windmill/react-ui"
import React, { useEffect, useState } from "react"
import useFirestore from "../../hooks/useFirestore"
import { ModalForm } from "../components/ModalForm"
import { CardPricing } from "../components/Pricings/CardPricing"
import PageTitle from "../components/Typography/PageTitle"


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

const options = [{value:'formation', label: 'Formation'},{value:'service', label: 'Service'}]

const filds = [
  {
    label: 'title',
    input: {type: 'text',name: 'title',  placeholder: "Basic", required: true}
  },
  {
    label: 'Descript',
    input: {type: 'text', name: 'descript',  placeholder: "LIMITED ACCESS", required: false}
  },
  {
    label: 'Price',
    input: {type: 'text', name: 'price',  placeholder: "Free", required: false}
  },
  {
    label: 'Type',
    input: {type: 'select', name: 'type', default: 'formation', options, required: false}
  },
  /*{
    label: 'Content',
    input: {type: 'textarea', name: 'content', placeholder: "Jane Doe", required: true}
  }*/
]

/**
* @author
* @function Pricings
**/

function Pricings () {

  const [ docs, setDocs ] = useFirestore('pricings')
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  useEffect(() => {

  }, [setDocs])
  console.log(docs)
  return(
    <>
      <header className="flex justify-between items-center border-b border-b-gray-200 dark:border-gray-800 mb-5">
        <PageTitle>Setting Pricings</PageTitle>
        <Button onClick={openModal}> Ajouter </Button>   
      </header>
      <div className='flex flex-wrap gap-4'>
        {
          docs.map(data => <CardPricing docs={docs} setDocs={setDocs} action='pricings' value={data} key={data.id} options={options}/>)
        }
          
      </div>
      
      <ModalForm 
        action='pricings'
        title='Add Price'
        filds={filds} 
        docs={docs}
        setDocs={setDocs}
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
    </>
   )
}

export default Pricings