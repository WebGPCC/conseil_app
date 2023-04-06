import useSymptomes from '@/hooks/useSymptomes'
import React from 'react'
import SymptomeCard from './SymptomeCard'

const SymptomesList = () => {
  const {data: symptomes = [], isLoading} = useSymptomes()

  if(isLoading){
    return (
      <div className='flex justify-around  items-center text-bold text-4xl'>Loading...</div>
    )
  }

  return (
      <div className='flex justify-around  items-center flex-wrap gap-10 m:gap-24 m:px-36 pb-16 px-10'>
        {symptomes.map((symptome: Record<string,any>) => (
          <SymptomeCard key={symptome.id} data={symptome}/>
        ))}
      </div>
  )
}

export default SymptomesList