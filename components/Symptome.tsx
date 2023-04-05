import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import cat_taux from '../public/cat_taux.png'

interface SymptomeProps {
  data: Record<string,any>
}

const Symptome: React.FC<SymptomeProps> = ({data}) => {
  const router = useRouter()

  const goToSymptome = useCallback((event:any) => {
      event.stopPropagation()
      router.push(`/symptome/${data.id}`)
    },
    [router, data.id],
  )
  
  return (
    <div 
        onClick={goToSymptome}
        className='
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          hover:text-green-500
        '
    >
      <Image
          src={cat_taux}
          alt='Image Maux de gorge'
      />
      <h2 className='pt-2 font-bold '>{data.name}</h2>
    </div>
  )
}

export default Symptome