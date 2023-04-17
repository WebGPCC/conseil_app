import React from 'react'
import SymptomeCard from './SymptomeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import {motion} from 'framer-motion' 
import Loading from './Loading'

const variants = {
  hidden: {opacity : 0},
  show: {
    opacity : 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

interface SymptomeListProps{
  data:Record<string,any>
  isLoading : boolean
  filterby : string
}

const SymptomesList:React.FC<SymptomeListProps> = ({data, isLoading, filterby}) => {
  console.log(data)

  const symptomes = data.filter((element:Record<string,any>)=>element
  .name.toLocaleLowerCase().replace(/ /g,'').includes(
    filterby.toLocaleLowerCase().replace(/ /g,'')
  ))
    .map((symptome: Record<string,any>) => (
      <SymptomeCard key={symptome.id} data={symptome}/>
    ))

  if(!data ||isLoading){
    return (
      <Loading/>
    )
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className='flex justify-around  items-center flex-wrap gap-10 m:gap-24 m:px-36 pb-16 px-10'>
      { symptomes.length != 0 ?
          symptomes
        :
          (<span className=" 
                flex 
                justify-center 
                items-center 
                text-bold 
                text-xl 
                text-gray-700 
                py-8 
                px-4 
                border 
                border-2 
                border-dotted
                rounded-xl
            ">
                <span className="text-4 xl mr-5">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </span>
                Aucun produit ne correspond à la recherche
            </span>
          )
      }
    </motion.div>
  )
}

export default SymptomesList