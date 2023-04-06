import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import cat_taux from '../public/cat_taux.png'

interface SymptomeCardProps {
  data: Record<string,any>
}

const SymptomeCard: React.FC<SymptomeCardProps> = ({data}) => {
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
          src={data?.logoImage}
          alt='image du symptome'
          width='100'
          height='100'
          className='object-cover'
      />
      <h2 className='pt-2 font-bold '>{data.name}</h2>
    </div>
  )
}

export default SymptomeCard