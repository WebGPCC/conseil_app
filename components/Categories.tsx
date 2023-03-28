import useSymptomes from '@/hooks/useSymptomes'
import React from 'react'
import Categorie from './Categorie'

const Categories = () => {
  const {data: symptomes = []} = useSymptomes()

  return (
      <div className='flex justify-center flex-wrap gap-10 m:gap-24 m:px-36 pb-16'>
        {symptomes.map((symptome: Record<string,any>) => (
          <Categorie key={symptome.id} data={symptome}/>
        ))}
      </div>
  )
}

export default Categories