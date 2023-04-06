import useSymptomes from '@/hooks/useSymptomes'
import React from 'react'
import SymptomeCard from './SymptomeCard'

const SymptomesList = () => {
  const {data: symptomes = []} = useSymptomes()

  return (
      <div className='flex justify-center flex-wrap gap-10 m:gap-24 m:px-36 pb-16'>
        {symptomes.map((symptome: Record<string,any>) => (
          <SymptomeCard key={symptome.id} data={symptome}/>
        ))}
      </div>
  )
}

export default SymptomesList