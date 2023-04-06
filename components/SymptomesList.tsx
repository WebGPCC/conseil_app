import React from 'react'
import SymptomeCard from './SymptomeCard'

interface SymptomeListProps{
  data:Record<string,any>
  isLoading : boolean
  filterby : string
}

const SymptomesList:React.FC<SymptomeListProps> = ({data, isLoading, filterby}) => {

  if(isLoading){
    return (
      <div className='flex justify-around  items-center text-bold text-4xl'>Loading...</div>
    )
  }

  return (
      <div className='flex justify-around  items-center flex-wrap gap-10 m:gap-24 m:px-36 pb-16 px-10'>
        {data.filter((element:Record<string,any>)=>element.name.includes(filterby))
        .map((symptome: Record<string,any>) => (
          <SymptomeCard key={symptome.id} data={symptome}/>
        ))}
      </div>
  )
}

export default SymptomesList